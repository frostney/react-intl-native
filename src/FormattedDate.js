import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as Intl from 'react-intl';

const FormattedDate = props => (
  <Intl.FormattedDate {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedDate>
);

FormattedDate.propTypes = {
  style: PropTypes.any,
  localeMatcher: PropTypes.oneOf(['best fit', 'lookup']),
  formatMatcher: PropTypes.oneOf(['basic', 'best fit']),

  timeZone: PropTypes.string,
  hour12: PropTypes.bool,

  weekday: PropTypes.oneOf(['narrow', 'short', 'long']),
  era: PropTypes.oneOf(['narrow', 'short', 'long']),
  year: PropTypes.oneOf(['numeric', '2-digit']),
  month: PropTypes.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
  day: PropTypes.oneOf(['numeric', '2-digit']),
  hour: PropTypes.oneOf(['numeric', '2-digit']),
  minute: PropTypes.oneOf(['numeric', '2-digit']),
  second: PropTypes.oneOf(['numeric', '2-digit']),
  timeZoneName: PropTypes.oneOf(['short', 'long']),
};

export default FormattedDate;
