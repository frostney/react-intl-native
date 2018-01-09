# react-intl-native

[![Build Status](https://travis-ci.org/frostney/react-intl-native.svg?branch=master)](https://travis-ci.org/frostney/react-intl-native) [![Dependency Status](https://david-dm.org/frostney/react-intl-native.svg)](https://david-dm.org/frostney/react-intl-native) [![devDependency Status](https://david-dm.org/frostney/react-intl-native/dev-status.svg)](https://david-dm.org/frostney/react-intl-native#info=devDependencies) [![codecov.io](https://codecov.io/github/frostney/react-intl-native/coverage.svg?branch=master)](https://codecov.io/github/frostney/react-intl-native?branch=master)

`react-intl` convenience components for React Native

While `react-intl` allows us to use `formatMessage` or passing in a function, this becomes tiresome if you have to do this for each. This module does the latter and wraps it all in a `Text` component allowing you to pass in `style` to provide custom styling.

## Installation

```
$ npm install react-intl-native
```

## Usage

Wrap your main component inside `react-intl`s `IntlProvider` like you would in your web application:

```javascript
import IntlProvider from 'react-intl';
```

```jsx
<IntlProvider locale="en">
  <MainView />
</IntlProvider>
```

#### FormattedDate

```jsx
<FormattedDate
  weekday="long"
  value={Date.now()}
  style={{ fontWeight: 'bold' }} />
```

More information on date formatting options: https://github.com/yahoo/react-intl/wiki/Components#date-formatting-components

#### FormattedHTMLMessage

```jsx
<FormattedHTMLMessage
  id="one"
  defaultMessage="Hello there"
  style={{ fontWeight: 'bold' }} />
```

#### FormattedMessage

```jsx
<FormattedMessage
  id="two"
  defaultMessage="Hello there"
  style={{ fontWeight: 'bold' }} />
```

#### FormattedNumber
This is one of the components that differs slightly from the original component. For the formatting style you need to use 
`formatStyle` instead of `style`. `style` is reserved for the component styling.

```jsx
<FormattedNumber
  formatStyle="currency"
  currency="EUR"
  value={1000}
  style={{ fontWeight: 'bold' }} />
```

More information on number formatting options: https://github.com/yahoo/react-intl/wiki/Components#formattednumber

#### FormattedPlural
This is one of the components that differs slightly from the original component. For the formatting style you need to use 
`formatStyle` instead of `style`. `style` is reserved for the component styling.

```jsx
<FormattedPlural
  value={10}
  one="message"
  other="messages"
  formatStyle="cardinal"
  style={{ fontWeight: 'bold' }} />
```

More information on plural formatting options: https://github.com/yahoo/react-intl/wiki/Components#formattedplural

#### FormattedRelative
This is one of the components that differs slightly from the original component. For the formatting style you need to use 
`formatStyle` instead of `style`. `style` is reserved for the component styling.

```jsx
<FormattedRelative
  value={Date.now()}
  formatStyle="numeric"
  style={{ fontWeight: 'bold' }} />
```

More information on date formatting options: https://github.com/yahoo/react-intl/wiki/Components#date-formatting-components

#### FormattedTime

```jsx
<FormattedTime
  value={Date.now()}
  hour="numeric"
  style={{ fontWeight: 'bold' }} />
```

More information on date formatting options: https://github.com/yahoo/react-intl/wiki/Components#date-formatting-components



For more information, take a look the `react-intl` documentation: https://github.com/yahoo/react-intl/wiki/Components

## License

MIT
