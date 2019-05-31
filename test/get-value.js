'use strict'

const test = require('tap').test
const countries = require('../')()

test('get value from country name', function (t) {
  t.equal(countries.getValue('Iceland'), 'IS', 'name "Iceland" should return IS')
  t.equal(countries.getValue('iceland'), 'IS', 'name "iceland" should return IS')
  t.type(countries.getValue('iceland'), 'string', 'type of name "IS" is string')
  t.type(countries.getValue('IS'), 'undefined', 'name "IS" should return undefined')
  t.type(countries.getValue('XX'), 'undefined', 'name "XX" should return undefined')
  t.type(countries.getValue(''), 'undefined', 'empty name should return undefined')
  t.end()
})
