'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()

test('get name from country code', function () {
  assert.equal(countries.getLabel('IS'), 'Iceland', 'code "IS" should return Iceland')
  assert.equal(countries.getLabel('is'), 'Iceland', 'code "is" should return Iceland')
  assert.equal(typeof countries.getLabel('IS'), 'string', 'type of code "IS" is string')
  assert.equal(typeof countries.getLabel('Iceland'), 'undefined', 'code "Iceland" should return undefined')
  assert.equal(typeof countries.getLabel('XX'), 'undefined', 'code "XX" should return undefined')
  assert.equal(typeof countries.getLabel(''), 'undefined', 'empty code should return undefined')
})
