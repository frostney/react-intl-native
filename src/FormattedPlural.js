import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as Intl from 'react-intl';

const FormattedPlural = props => {
  let propsCopy = {...props}
  delete propsCopy.style

  if ("formatStyle" in props) {
    propsCopy.style = props.formatStyle
  }

  return (
  <Intl.FormattedPlural {...propsCopy}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedPlural>
)};

FormattedPlural.propTypes = {
  formatStyle: PropTypes.oneOf(['cardinal', 'ordinal']),
  style: PropTypes.any,
  value: PropTypes.any.isRequired,
  other: PropTypes.node.isRequired,
  zero: PropTypes.node,
  one: PropTypes.node,
  two: PropTypes.node,
  few: PropTypes.node,
  many: PropTypes.node,
  children: PropTypes.func,
};

export default FormattedPlural;
