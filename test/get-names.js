'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get all country names', function () {
  assert.equal(countries.getLabels().length, data.length, 'country names should be as many as countries')
  assert.ok(countries.getLabels().indexOf('Iceland') > -1, 'country names should include Iceland')
  assert.ok(countries.getLabels().indexOf('iceland') === -1, 'country names is case-sensitive, does not include iceland')
  assert.ok(Array.isArray(countries.getLabels()), 'name list is an array')
})
