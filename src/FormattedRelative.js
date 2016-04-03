import React, { Text } from 'react-native';
import { RawFormattedRelative } from 'react-intl-rawformat';

const FormattedRelative = props =>
  <RawFormattedRelative component={Text} {...props} />;

export default FormattedRelative;
