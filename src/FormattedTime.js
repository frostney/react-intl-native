import React, { Text } from 'react-native';
import { RawFormattedTime } from 'react-intl-rawformat';

const FormattedTime = props =>
  <RawFormattedTime component={Text} {...props} />;

export default FormattedTime;
