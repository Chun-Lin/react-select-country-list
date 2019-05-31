class CountryList {
  constructor() {
    this.data = require('./data.json')
    this.labelMap = {}
    this.valueMap = {}

    this.data.forEach(country => {
      this.labelMap[country.label.toLowerCase()] = country.value
      this.valueMap[country.value.toLowerCase()] = country.label
    })
  }

  getValue(label) {
    return this.labelMap[label.toLowerCase()]
  }

  getLabel(value) {
    return this.valueMap[value.toLowerCase()]
  }

  getLabels() {
    return this.data.map(country => country.label)
  }

  getValues() {
    return this.data.map(country => country.value)
  }

  getLabelList() {
    return this.labelMap
  }

  getValueList() {
    return this.valueMap
  }

  getData() {
    return this.data
  }
}

const countryList = () => {
  if (!(this instanceof CountryList)) return new CountryList()
}

module.exports = countryList
