'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get all country names', function () {
  assert.equal(countries.getData().length, data.length, 'data list should be the same lenght as data.json')
  assert.ok(Array.isArray(countries.getData()), 'data list is an array')
  assert.ok(countries.getData()[0] instanceof Object, 'first item in list should be object')
})
