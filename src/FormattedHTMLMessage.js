import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as Intl from 'react-intl';

const FormattedHTMLMessage = props => (
  <Intl.FormattedHTMLMessage {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedHTMLMessage>
);

FormattedHTMLMessage.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultMessage: PropTypes.string,
  style: PropTypes.any,
  values: PropTypes.object,
  tagName: PropTypes.string,
  children: PropTypes.func,
};

export default FormattedHTMLMessage;
