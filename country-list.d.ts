// Based on the DefinitelyTyped declarations for react-select-country-list:
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-select-country-list

declare function countryList(): countryList.CountryList;

declare namespace countryList {
    interface CountryData {
        label: string;
        value: string;
    }

    interface LabelValueMap {
        [key: string]: string | undefined;
    }

    interface Countries {
        data: CountryData[];
        labelMap: LabelValueMap;
        valueMap: LabelValueMap;
    }

    interface CountryList extends Countries {
        getValue(label: string): string | undefined;
        getLabel(value: string): string | undefined;
        getValues(): string[];
        getLabels(): string[];
        getLabelList(): LabelValueMap;
        getValueList(): LabelValueMap;
        getData(): CountryData[];
        setLabel(value: string, label: string): this;
        setEmpty(label: string): this;
        native(): this & NativeCountries;
    }

    interface NativeCountries extends CountryList {
        nativeData: CountryData[];
    }
}

export = countryList;
