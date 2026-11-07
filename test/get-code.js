'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()

test('get code from country name', function () {
  assert.equal(countries.getValue('Iceland'), 'IS', 'name "Iceland" should return IS')
  assert.equal(countries.getValue('iceland'), 'IS', 'name "iceland" should return IS')
  assert.equal(countries.getValue('ICELAND'), 'IS', 'name "ICELAND" should return IS')
  assert.equal(typeof countries.getValue('Iceland'), 'string', 'type of name "Iceland" is string')
  assert.equal(typeof countries.getValue('IS'), 'undefined', 'type of name "IS" is undefined')
  assert.equal(typeof countries.getValue('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  assert.equal(typeof countries.getValue(''), 'undefined', 'empty name should return undefined')
})
