'use strict'

const test = require('tap').test
const countries = require('../')()
const data = require('../data.json')

test('get value from country name', function(t) {
  t.equal(
    countries.setLabel('VN', 'Vietnam').getData().length,
    data.length,
    'data list should be the same lenght as data.json',
  )
  t.equal(
    countries.setLabel('VN', 'Vietnam').getLabel('VN'),
    'Vietnam',
    'label "VN" should return "Vietnam"',
  )
  t.equal(
    countries.setLabel('TW', 'Taiwan').getLabel('TW'),
    'Taiwan',
    'label "TW" should return "Taiwan"',
  )
  t.end()
})
