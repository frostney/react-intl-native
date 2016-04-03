import React, { Text } from 'react-native';
import { RawFormattedMessage } from 'react-intl-rawformat';

const FormattedMessage = props =>
  <RawFormattedMessage component={Text} {...props} />;

export default FormattedMessage;
