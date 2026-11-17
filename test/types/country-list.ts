import countryList = require('../..');
import defaultCountryList from '../..';

const countries: countryList.CountryList = countryList();
const defaultCountries: countryList.CountryList = defaultCountryList();
const data: countryList.CountryData[] = countries.getData();
const values: string[] = countries.getValues();
const labels: string[] = countries.getLabels();
const value: string = countries.getValue('Australia');
const label: string = countries.getLabel('AU');
const labelMap: countryList.LabelValueMap = countries.getLabelList();
const valueMap: countryList.LabelValueMap = countries.getValueList();
const unknownValue: string = labelMap['unknown'];
const unknownLabel: string = valueMap['unknown'];
const publicData: countryList.CountryData[] = countries.data;
const publicLabelMap: countryList.LabelValueMap = countries.labelMap;
const publicValueMap: countryList.LabelValueMap = countries.valueMap;

const customized: countryList.CountryList = countries
    .setLabel('VN', 'Vietnam')
    .setEmpty('Select a Country');
const customizedLabel: string = customized.getLabel('VN');
const native: countryList.NativeCountries = countries.native();
const nativeData: countryList.CountryData[] = native.nativeData;
const chainedNativeData: countryList.CountryData[] = countries
    .native()
    .setLabel('VN', 'Vietnam')
    .setEmpty('Select a Country')
    .nativeData;
const chainedLabel: string = countries
    .setLabel('VN', 'Vietnam')
    .setEmpty('Select a Country')
    .native()
    .getLabel('VN');

// Preserve the existing DefinitelyTyped surface for strict consumer apps.
const requiredValue: string = countries.getValue('Australia');
const requiredLabel: string = countries.getLabel('AU');
const requiredMapEntry: string = countries.valueMap['au'];
// @ts-expect-error The factory is not a constructor.
new countryList();
// @ts-expect-error Country codes must be strings.
countries.getLabel(123);
// @ts-expect-error Labels must be strings.
countries.setLabel('AU', 123);
// @ts-expect-error Native data is only guaranteed after calling native().
countries.nativeData;
