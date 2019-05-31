'use strict'

const test = require('tap').test
const countries = require('../')()
const data = require('../data.json')

test('get all country names', function (t) {
  t.equal(countries.getLabels().length, data.length, 'country names should be as many as countries')
  t.ok(countries.getLabels().indexOf('Iceland') > -1, 'country names should include Iceland')
  t.ok(countries.getLabels().indexOf('iceland') === -1, 'country names is case-sensitive, does not include iceland')
  t.type(countries.getLabels(), Array, 'name list is an array')
  t.end()
})
