import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as Intl from 'react-intl';

const FormattedNumber = props => {
  const style = props.style;

  let formatOptions = {...props};
  delete formatOptions.formatStyle
  formatOptions.style=props.formatStyle

  return (
    <Intl.FormattedNumber {...formatOptions}>
      {localized => <Text style={style}>{localized}</Text>}
    </Intl.FormattedNumber>
  );
};

FormattedNumber.propTypes = {
    value: PropTypes.any.isRequired,
    format: PropTypes.string,
    children: PropTypes.func,
    localeMatcher: PropTypes.oneOf(['best fit', 'lookup']),

    style: PropTypes.any,
    formatStyle: PropTypes.oneOf(['decimal', 'currency', 'percent']),
    currency: PropTypes.string,
    currencyDisplay: PropTypes.oneOf(['symbol', 'code', 'name']),
    useGrouping: PropTypes.bool,

    minimumIntegerDigits: PropTypes.number,
    minimumFractionDigits: PropTypes.number,
    maximumFractionDigits: PropTypes.number,
    minimumSignificantDigits: PropTypes.number,
    maximumSignificantDigits: PropTypes.number,
};

export default FormattedNumber;
