'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const { mkdtempSync, readFileSync, writeFileSync, rmSync } = require('node:fs')
const { tmpdir } = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

const root = path.resolve(__dirname, '..')
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    timeout: 60000,
  })
  assert.equal(result.status, 0, result.error?.message || result.stdout + result.stderr)
  return result.stdout
}

test('packed package works in TypeScript and JavaScript consumer apps', () => {
  const consumer = mkdtempSync(path.join(tmpdir(), 'country-list-consumer-'))
  try {
    const packed = JSON.parse(run(npm, [
      'pack', '--json', '--ignore-scripts', '--pack-destination', consumer,
    ], root))
    writeFileSync(path.join(consumer, 'package.json'), '{"private":true}')
    run(npm, [
      'install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund',
      '--package-lock=false', path.join(consumer, packed[0].filename),
    ], consumer)

    // Resolve the installed tarball by package name, not the source directory.
    const fixture = readFileSync(path.join(root, 'test/types/country-list.ts'), 'utf8')
      .replaceAll("'../..'", "'react-select-country-list'")
    writeFileSync(path.join(consumer, 'consumer.ts'), fixture)
    writeFileSync(path.join(consumer, 'commonjs.cts'),
      "import countryList = require('react-select-country-list');\n" +
      "import deep = require('react-select-country-list/country-list');\n" +
      "const label: string = countryList().getLabel('AU');\n" +
      "const map: Record<string, string> = deep().getValueList();\n")
    writeFileSync(path.join(consumer, 'esm.mts'),
      "import countryList from 'react-select-country-list';\n" +
      "const label: string = countryList().getLabel('AU');\n")

    const compiler = path.join(path.dirname(require.resolve('typescript/package.json')), 'bin/tsc')
    const flags = ['--strict', '--noEmit', '--module', 'node16', '--target', 'es2020']
    run(process.execPath, [compiler, ...flags, '--esModuleInterop', 'consumer.ts'], consumer)
    run(process.execPath, [compiler, ...flags, 'commonjs.cts', 'esm.mts'], consumer)
    run(process.execPath, ['-e',
      "const c = require('react-select-country-list')();" +
      "require('node:assert/strict').equal(c.getLabel('AU'), 'Australia')",
    ], consumer)
    run(process.execPath, ['--input-type=module', '-e',
      "import countryList from 'react-select-country-list';" +
      "import assert from 'node:assert/strict';" +
      "assert.equal(countryList().native().getLabel('TW'), '臺灣')",
    ], consumer)
  } finally {
    rmSync(consumer, { recursive: true, force: true })
  }
})
