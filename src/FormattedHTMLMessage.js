import React from 'react';
import PropTypes from 'prop-types';
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
