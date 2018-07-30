'use strict'

var data = require('./data.json')

/**
 * Precompute label and value lookups.
 */
var labelMap = {}
var valueMap = {}
data.forEach(function (country) {
  labelMap[country.label.toLowerCase()] = country.value
  valueMap[country.value.toLowerCase()] = country.label
})

module.exports = CountryList
function CountryList () {
  if (!(this instanceof CountryList)) return new CountryList()
};

CountryList.prototype.getvalue = function getValue (label) {
  return labelMap[label.toLowerCase()]
}

CountryList.prototype.getlabel = function getLabel (value) {
  return valueMap[value.toLowerCase()]
}

CountryList.prototype.getlabels = function getLabels () {
  return data.map(function (country) {
    return country.label
  })
}

CountryList.prototype.getvalues = function getValues () {
  return data.map(function (country) {
    return country.value
  })
}

CountryList.prototype.getValueList = function () {
  return valueMap
}

CountryList.prototype.getLabelList = function () {
  return labelMap
}

CountryList.prototype.getData = function getData () {
  return data
}
