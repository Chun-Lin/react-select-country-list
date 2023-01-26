'use strict'

const test = require('tap').test
const countries = require('../country-list')()

test('get country object by label', function (t) {
  t.same(countries.getCountryByLabel('Iceland'), { value: 'IS', label: 'Iceland', }, 'name "Iceland" should return { label: "Iceland", value: "IS" }')
  t.same(countries.getCountryByLabel('iceland'), { value: 'IS', label: 'Iceland', }, 'name "iceland" should return { label: "Iceland", value: "IS" }')
  t.equal(countries.getCountryByLabel('invalid country label'), undefined, 'name "invalid country label" should return undefined')
  t.end()
})