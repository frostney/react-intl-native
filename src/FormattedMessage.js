import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedMessage = props => (
  <Intl.FormattedMessage {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedMessage>
);

FormattedMessage.propTypes = {
  style: PropTypes.any,
};

export default FormattedMessage;
