import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedHTMLMessage = props => (
  <Intl.FormattedHTMLMessage {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedHTMLMessage>
);

FormattedHTMLMessage.propTypes = {
  style: PropTypes.any,
};

export default FormattedHTMLMessage;
