'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()

test('get value from country name', function () {
  assert.equal(countries.getValue('Iceland'), 'IS', 'name "Iceland" should return IS')
  assert.equal(countries.getValue('iceland'), 'IS', 'name "iceland" should return IS')
  assert.equal(typeof countries.getValue('iceland'), 'string', 'type of name "IS" is string')
  assert.equal(typeof countries.getValue('IS'), 'undefined', 'name "IS" should return undefined')
  assert.equal(typeof countries.getValue('XX'), 'undefined', 'name "XX" should return undefined')
  assert.equal(typeof countries.getValue(''), 'undefined', 'empty name should return undefined')
})
