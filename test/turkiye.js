'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()

test('use Türkiye as the English name for TR', function () {
  assert.equal(countries.getLabel('TR'), 'Türkiye')
  assert.equal(countries.getLabel('tr'), 'Türkiye')
  assert.equal(countries.getValue('Türkiye'), 'TR')
  assert.equal(countries.getValue('türkiye'), 'TR')
  assert.equal(countries.getValue('TÜRKIYE'), 'TR')
  assert.equal(countries.getData().find(country => country.value === 'TR').label, 'Türkiye')
})
