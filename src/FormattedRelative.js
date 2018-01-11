import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as Intl from 'react-intl';

const FormattedRelative = props => {
  let propsCopy = {...props}
  delete propsCopy.style

  if ("formatStyle" in props) {
      propsCopy.style = props.formatStyle
  }

  return (
      <Intl.FormattedRelative {...propsCopy}>
        {localized => <Text style={props.style}>{localized}</Text>}
      </Intl.FormattedRelative>
  )
};

FormattedRelative.propTypes = {
  style: PropTypes.any,
  formatStyle: PropTypes.oneOf(['best fit', 'numeric']),
  units: PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'month', 'year']),
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  updateInterval: PropTypes.number,
  initialNow: PropTypes.any,
  children: PropTypes.func,
};

export default FormattedRelative;
