import React, { PropTypes, Text } from 'react-native';
import Intl from 'react-intl';

const FormattedNumber = props => (
  <Intl.FormattedNumber {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedNumber>
);

FormattedNumber.propTypes = {
  style: PropTypes.any,
};

export default FormattedNumber;
