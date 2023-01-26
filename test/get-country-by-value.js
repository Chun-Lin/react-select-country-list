'use strict'

const test = require('tap').test
const countries = require('../country-list')()

test('get country object by label', function (t) {
  t.same(countries.getCountryByValue('IS'), { value: 'IS', label: 'Iceland', }, 'name "Iceland" should return { label: "Iceland", value: "IS" }')
  t.same(countries.getCountryByValue('is'), { value: 'IS', label: 'Iceland', }, 'name "iceland" should return { label: "Iceland", value: "IS" }')
  t.equal(countries.getCountryByValue('invalid country value'), undefined, 'name "invalid country" should return undefined')
  t.end()
})