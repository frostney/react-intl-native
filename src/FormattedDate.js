import React, { Text } from 'react-native';
import { RawFormattedDate } from 'react-intl-rawformat';

const FormattedDate = props =>
  <RawFormattedDate component={Text} {...props} />;

export default FormattedDate;
