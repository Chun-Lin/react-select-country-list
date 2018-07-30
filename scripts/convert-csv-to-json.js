var csv = require('csv-parser')
var fs = require('fs')

var countries = []

fs.createReadStream('./data.csv')
  .pipe(csv(['label', 'value']))
  .on('data', function (data) {
    if (data.label === 'label' && data.value === 'value') return
    countries.push({ value: data.value, label: data.label })
  })
  .on('end', function () {
    fs.writeFile('./data.json', JSON.stringify(countries, null, 2) + '\n', function (err) {
      if (err) throw err
      console.log('Wrote countries to data.json')
    })
  })
