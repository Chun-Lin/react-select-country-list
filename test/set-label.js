'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get value from country name', function () {
  assert.equal(
    countries.setLabel('VN', 'Vietnam').getData().length,
    data.length,
    'data list should be the same lenght as data.json',
  )
  assert.equal(
    countries.setLabel('VN', 'Vietnam').getLabel('VN'),
    'Vietnam',
    'label "VN" should return "Vietnam"',
  )
  assert.equal(
    countries.setLabel('TW', 'Taiwan').getLabel('TW'),
    'Taiwan',
    'label "TW" should return "Taiwan"',
  )
})
