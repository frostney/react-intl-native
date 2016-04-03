import React, { Text } from 'react-native';
import { RawFormattedPlural } from 'react-intl-rawformat';

const FormattedPlural = props =>
  <RawFormattedPlural component={Text} {...props} />;

export default FormattedPlural;
