import React, { Text } from 'react-native';
import { RawFormattedNumber } from 'react-intl-rawformat';

const FormattedNumber = props =>
  <RawFormattedNumber component={Text} {...props} />;

export default FormattedNumber;
