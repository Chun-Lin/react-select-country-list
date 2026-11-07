'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()
const data = require('../data.json')

test('get all country labels with code as key', function () {
  const list = countries.getValueList()

  assert.ok(list instanceof Object, 'country list is an object')
  assert.equal(Object.keys(list).length, data.length, 'country list should be as many as countries')
  assert.equal(list['is'], 'Iceland', 'IS code must be equal to Iceland')
})
