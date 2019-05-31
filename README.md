# react-select-country-list

This package take [country-list](https://github.com/fannarsh/country-list) as reference, and make it more friendly to react-select

Maps ISO 3166-1-alpha-2 codes to English country names and match react-select options props.

Uses data from http://data.okfn.org/data/country-list


## Install

``` cli
npm install react-select-country-list --save
```
or
``` cli
yarn add react-select-country-list
```

## Example

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


## Methods

All input is case-insensitive.

### getValue(label)

Expects the English country name.
Returns the code for that country.
If not found, it returns `undefined`.

### getLabel(value)

Expects a two-digit country code.
Returns the name for that country.
If not found, it returns `undefined`.

### getValues()

Returns an array of all country codes.

### getLabels()

Returns an array of all country names.

### getValueList()

Returns a key-value object of all countries using the code as key.

### getLabelList()

Returns a key-value object of all countries using the name as key.

### getData()

Returns an array of all country information, in the same format as it gets imported.

### setLabel(value, label)

Due to different perspectives among different regions, this method can help developers customize the label of specific country. What's more, it can be chained with another methods above.

#### Usage
```js
// Make 'Viet Nam' -> 'Vietnam'
countries.setLabel('VN', 'Vietnam').getLabel('VN') // 'Vietnam'
```

### setEmpty(label)

You may want an empty value option in the list, so here's the helper function for you. Again, it can be chained with another methods above.

#### Usage
```js
countries.setEmpty('Select a Country').getLabel('') // 'Select a Country'
```

We can even chain `setLabel` and `setEmpty` together to have list with an empty option and the modified label.
```js
countries.setLabel('VN', 'Vietnam').setEmpty('Select a Country').getLabel('VN') // 'Vietnam'
```


## License

MIT
