'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get all country codes', function () {
  assert.equal(countries.getValues().length, data.length, 'codes should be as many as countries')
  assert.ok(countries.getValues().indexOf('IS') > -1, 'codes should include IS')
  assert.ok(countries.getValues().indexOf('is') === -1, 'codes is case-sensitive, does not include is')
  assert.ok(Array.isArray(countries.getValues()), 'code list is an array')
})
