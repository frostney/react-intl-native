import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedDate = props => (
  <Intl.FormattedDate {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedDate>
);

FormattedDate.propTypes = {
  style: PropTypes.any,
};

export default FormattedDate;
