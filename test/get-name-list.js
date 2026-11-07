'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get all country names with code as key', function () {
  const list = countries.getLabelList()

  assert.ok(list instanceof Object, 'country name list is an object')
  assert.equal(Object.keys(list).length, data.length, 'country name list should be as many as countries')
  assert.equal(list['iceland'], 'IS', 'Iceland must be equal to IS code')
})
