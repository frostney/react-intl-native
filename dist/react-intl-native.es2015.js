import React, { PropTypes, createElement, isValidElement } from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

var FormattedDate = function (props) {
  return React.createElement(
    Intl.FormattedDate,
    props,
    function (localized) {
      return React.createElement(
        Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedDate.propTypes = {
  style: PropTypes.any
};

var FormattedHTMLMessage = function (props) {
  return React.createElement(
    Intl.FormattedHTMLMessage,
    props,
    function (localized) {
      return React.createElement(
        Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedHTMLMessage.propTypes = {
  style: PropTypes.any
};

var FormattedMessage = function (props) {
  return React.createElement(
    Intl.FormattedMessage,
    props,
    function () {
      for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      var newNodes = nodes.map(function (node) {
        if (!isValidElement(node)) {
          return React.createElement(
            Text,
            { style: props.style },
            node
          );
        }
        return node;
      });
      return createElement.apply(undefined, [Text, { style: props.style }].concat(newNodes));
    }
  );
};

FormattedMessage.propTypes = {
  style: PropTypes.any
};

var FormattedNumber = function (props) {
  var style = props.style;

  var formatOptions = {
    localeMatcher: props.localeMatcher,
    style: props.formatStyle,
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    useGrouping: props.useGrouping,
    minimumIntegerDigits: props.minimumIntegerDigits,
    minimumFractionDigits: props.minimumFractionDigits,
    maximumFractionDigits: props.maximumFractionDigits,
    minimumSignificantDigits: props.minimumSignificantDigits,
    maximumSignificantDigits: props.maximumSignificantDigits,
    value: props.value
  };

  return React.createElement(
    Intl.FormattedNumber,
    formatOptions,
    function (localized) {
      return React.createElement(
        Text,
        { style: style },
        localized
      );
    }
  );
};

FormattedNumber.propTypes = {
  style: PropTypes.any,
  localeMatcher: PropTypes.any,
  formatStyle: PropTypes.any,
  currency: PropTypes.any,
  currencyDisplay: PropTypes.any,
  useGrouping: PropTypes.any,
  minimumIntegerDigits: PropTypes.any,
  minimumFractionDigits: PropTypes.any,
  maximumFractionDigits: PropTypes.any,
  minimumSignificantDigits: PropTypes.any,
  maximumSignificantDigits: PropTypes.any,
  value: PropTypes.any
};

var FormattedPlural = function (props) {
  return React.createElement(
    Intl.FormattedPlural,
    props,
    function (localized) {
      return React.createElement(
        Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedPlural.propTypes = {
  style: PropTypes.any
};

var FormattedRelative = function (props) {
  return React.createElement(
    Intl.FormattedRelative,
    props,
    function (localized) {
      return React.createElement(
        Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedRelative.propTypes = {
  style: PropTypes.any
};

var FormattedTime = function (props) {
  return React.createElement(
    Intl.FormattedTime,
    props,
    function (localized) {
      return React.createElement(
        Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedTime.propTypes = {
  style: PropTypes.any
};

export { FormattedDate, FormattedHTMLMessage, FormattedMessage, FormattedNumber, FormattedPlural, FormattedRelative, FormattedTime };