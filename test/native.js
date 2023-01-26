'use strict'

const test = require('tap').test
const countries = require('../')().native()
const data = require('../data-native.json')
const isEmpty = require('lodash.isempty')

test('get native name of a country', function (t) {
  t.equal(
    countries.getLabel('TW'),
    '臺灣',
    'return label should be 臺灣'
  )

  t.equal(
    countries.getLabel('RU'),
    'Россия',
    'return label should be Россия'
  )

  t.equal(
    countries.getLabel('SA'),
    'العربية السعودية',
    'return label should be العربية السعودية'
  )

  t.equal(
    countries.getLabel('KR'),
    '대한민국',
    'return label should be 대한민국'
  )

  t.equal(
    countries.getLabel('TH'),
    'ประเทศไทย',
    'return label should be ประเทศไทย'
  )

  t.same(
    countries.getCountryByLabel('Armenia'),
    {
      label: 'Հայաստան',
      value: 'AM'
    },
    'return country should be  { label: "Հայաստան", value: "AM" },'
  )

  t.same(
    countries.getCountryByLabel('armenia'),
    {
      label: 'Հայաստան',
      value: 'AM'
    },
    'return country should be  { label: "Հայաստան", value: "AM" },'
  )
  console.log(countries.getCountryByLabel('Taiwan'),"lol")

  t.same(
    countries.getCountryByLabel('Taiwan, Province of China'),
    {
      label: '臺灣',
      value: 'TW'
    },
    'return country should be  { label: "臺灣", value: "TW" },'
  )

  t.same(
    countries.getCountryByLabel('taiwan, province of china'),
    {
      label: '臺灣',
      value: 'TW'
    },
    'return country should be  { label: "臺灣", value: "TW" },'
  )

  t.equal(
    countries.getCountryByLabel('invalid country label'),
    undefined,
    'return value should be undefined,'
  )

  t.same(
    countries.getCountryByValue('AM'),
    {
      label: 'Հայաստան',
      value: 'AM'
    },
    'return country should be  { label: "Հայաստան", value: "AM" },'
  )

  t.same(
    countries.getCountryByValue('am'),
    {
      label: 'Հայաստան',
      value: 'AM'
    },
    'return country should be  { label: "Հայաստան", value: "AM" },'
  )

  t.same(
    countries.getCountryByValue('TW'),
    {
      label: '臺灣',
      value: 'TW'
    },
    'return country should be  { label: "臺灣", value: "TW" },'
  )

  t.same(
    countries.getCountryByValue('tw'),
    {
      label: '臺灣',
      value: 'TW'
    },
    'return country should be  { label: "臺灣", value: "TW" },'
  )

  t.equal(
    countries.getCountryByValue('invalid country value'),
    undefined,
    'return value should be undefined,'
  )

  t.end()
})
