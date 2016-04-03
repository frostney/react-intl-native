import React, { Text } from 'react-native';
import { RawFormattedHTMLMessage } from 'react-intl-rawformat';

const FormattedHTMLMessage = props =>
  <RawFormattedHTMLMessage component={Text} {...props} />;

export default FormattedHTMLMessage;
