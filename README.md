# country-list

Maps ISO 3166-1-alpha-2 codes to English country names and match react-select options props.

Uses data from http://data.okfn.org/data/country-list

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Example

``` js
var countries = require('country-list')();

console.log(countries.getValue('IS')); // Iceland
console.log(countries.getLabel('Iceland')); // IS
```

## Methods

Usage:

``` js
var countries = require('country-list')();
```
All input is case-insensitive.

### getValue(code)

Expects a two-digit country code.
Returns the name for that country.
If not found, it returns `undefined`.

### getLabel(name)

Expects the English country name.
Returns the code for that country.
If not found, it returns `undefined`.

### getValues()

Returns an array of all country names.

### getLabels()

Returns an array of all country codes.

### getValueList()

Returns a key-value object of all countries using the name as key.

### getLabelList()

Returns a key-value object of all countries using the code as key.

### getData()

Returns an array of all country information, in the same format as it gets imported.

### react-select

```js
import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'

class CountrySelector extends Component {
  constructor(props) {
    super(props)

    this.options = countryList().getData()

    this.state = {
      options: this.options,
      value: null,
    }
  }

  changeHandler = value => {
    this.setState({ value })
  }

  render() {
    return (
      <Select
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}
```


### Use with

## Install

``` cli
npm install react-select-country-list
```

## License

MIT
