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

  setLabel(value, label) {
    this.data.forEach(country => {
      if (country.value === value) {
        country.label = label
        this.valueMap[country.value.toLowerCase()] = country.label
      }
    })

    return this
  }

  setEmpty(label) {
    this.data.unshift({
      value: '',
      label: label,
    })
    this.valueMap[''] = label
    this.labelMap[label] = ''

    return this
  }

  native() {
    this.nativeData = require('./data-native.json')
    this.nativeData.forEach(country => {
      this.labelMap[country.label.toLowerCase()] = country.value
      this.valueMap[country.value.toLowerCase()] = country.label
    })

    return this
  }
}

const countryList = () => {
  if (!(this instanceof CountryList)) return new CountryList()
}

module.exports = countryList
