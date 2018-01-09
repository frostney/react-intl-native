import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedPlural = props => (
  <Intl.FormattedPlural {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedPlural>
);

FormattedPlural.propTypes = {
  style: PropTypes.any,
};

export default FormattedPlural;
