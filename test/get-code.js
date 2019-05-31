'use strict'

const test = require('tap').test
const countries = require('../')()

test('get code from country name', function (t) {
  t.equal(countries.getValue('Iceland'), 'IS', 'name "Iceland" should return IS')
  t.equal(countries.getValue('iceland'), 'IS', 'name "iceland" should return IS')
  t.equal(countries.getValue('ICELAND'), 'IS', 'name "ICELAND" should return IS')
  t.type(countries.getValue('Iceland'), 'string', 'type of name "Iceland" is string')
  t.type(countries.getValue('IS'), 'undefined', 'type of name "IS" is undefined')
  t.type(countries.getValue('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  t.type(countries.getValue(''), 'undefined', 'empty name should return undefined')
  t.end()
})
