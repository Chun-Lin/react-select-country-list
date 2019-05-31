'use strict'

const test = require('tap').test
const countries = require('../')()
const data = require('../data.json')
const _ = require('lodash')

test('get value from country name', function(t) {
  t.equal(
    countries.setEmpty('Select a Country').getData().length,
    data.length,
    'data list should be the same length as data.json',
  )
  t.equal(
    countries.setEmpty('Select a Country').getLabel(''),
    'Select a Country',
    'value "" should return "Select a Country"',
  )
  t.equal(
    _.isEmpty(
      countries.setEmpty('Select a Country').getValue('Select a Country'),
    ),
    true,
    'value "Select a Country" should return a empty string',
  )
  t.end()
})
