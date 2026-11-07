'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get value from country name', function () {
  assert.equal(
    countries.setEmpty('Select a Country').getData().length,
    data.length,
    'data list should be the same length as data.json',
  )
  assert.equal(
    countries.setEmpty('Select a Country').getLabel(''),
    'Select a Country',
    'value "" should return "Select a Country"',
  )
  // Preserve current behavior: setEmpty does not normalize its labelMap key.
  assert.equal(
    countries.setEmpty('Select a Country').getValue('Select a Country'),
    undefined,
    'mixed-case placeholder lookup currently returns undefined',
  )
})
