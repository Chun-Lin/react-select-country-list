'use strict'

const test = require('tap').test
const countries = require('../')()

test('get name from country code', function (t) {
  t.equal(countries.getLabel('IS'), 'Iceland', 'code "IS" should return Iceland')
  t.equal(countries.getLabel('is'), 'Iceland', 'code "is" should return Iceland')
  t.type(countries.getLabel('IS'), 'string', 'type of code "IS" is string')
  t.type(countries.getLabel('Iceland'), 'undefined', 'code "Iceland" should return undefined')
  t.type(countries.getLabel('XX'), 'undefined', 'code "XX" should return undefined')
  t.type(countries.getLabel(''), 'undefined', 'empty code should return undefined')
  t.end()
})
