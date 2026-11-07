'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const countries = require('../')()

test('get native name of a country', function () {
  assert.equal(
    countries.native().getLabel('TW'),
    '臺灣',
    'return label should be 臺灣'
  )

  assert.equal(
    countries.native().getLabel('RU'),
    'Россия',
    'return label should be Россия'
  )

  assert.equal(
    countries.native().getLabel('SA'),
    'العربية السعودية',
    'return label should be العربية السعودية'
  )

  assert.equal(
    countries.native().getLabel('KR'),
    '대한민국',
    'return label should be 대한민국'
  )

  assert.equal(
    countries.native().getLabel('TH'),
    'ประเทศไทย',
    'return label should be ประเทศไทย'
  )

  assert.equal(
    countries.native().getLabel('BQ'),
    'Bonaire, Sint Eustatius and Saba',
    'return label should be Bonaire, Sint Eustatius and Saba'
  )
})
