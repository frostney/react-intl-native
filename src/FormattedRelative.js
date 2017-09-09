import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedRelative = props => (
  <Intl.FormattedRelative {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedRelative>
);

FormattedRelative.propTypes = {
  style: PropTypes.any,
};

export default FormattedRelative;
