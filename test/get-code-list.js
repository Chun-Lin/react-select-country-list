'use strict'

const test = require('tap').test
const countries = require('../')()
const data = require('../data.json')

test('get all country labels with code as key', function (t) {
  const list = countries.getValueList()

  t.type(list, Object, 'country list is an object')
  t.equal(Object.keys(list).length, data.length, 'country list should be as many as countries')
  t.equal(list['is'], 'Iceland', 'IS code must be equal to Iceland')
  t.end()
})
