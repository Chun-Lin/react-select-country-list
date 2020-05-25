'use strict'

const test = require('tap').test
const countries = require('../')()
const data = require('../data-native.json')
const isEmpty = require('lodash.isempty')

test('get native name of a country', function (t) {
  t.equal(
    countries.native().getLabel('TW'),
    '臺灣',
    'return label should be 臺灣'
  )

  t.equal(
    countries.native().getLabel('RU'),
    'Россия',
    'return label should be Россия'
  )

  t.equal(
    countries.native().getLabel('SA'),
    'العربية السعودية',
    'return label should be العربية السعودية'
  )

  t.equal(
    countries.native().getLabel('KR'),
    '대한민국',
    'return label should be 대한민국'
  )

  t.equal(
    countries.native().getLabel('TH'),
    'ประเทศไทย',
    'return label should be ประเทศไทย'
  )

  t.end()
})
