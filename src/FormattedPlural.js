import React, { PropTypes } from 'react';
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
