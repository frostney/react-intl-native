'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var Intl = require('react-intl');
var Intl__default = _interopDefault(Intl);

var FormattedDate = function (props) {
  return React__default.createElement(
    Intl__default.FormattedDate,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedDate.propTypes = {
  style: React.PropTypes.any
};

var FormattedHTMLMessage = function (props) {
  return React__default.createElement(
    Intl__default.FormattedHTMLMessage,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedHTMLMessage.propTypes = {
  style: React.PropTypes.any
};

var FormattedMessage = function (props) {
  return React__default.createElement(
    Intl__default.FormattedMessage,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedMessage.propTypes = {
  style: React.PropTypes.any
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

  return React__default.createElement(
    Intl__default.FormattedNumber,
    formatOptions,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: style },
        localized
      );
    }
  );
};

FormattedNumber.propTypes = {
  style: React.PropTypes.any,
  localeMatcher: React.PropTypes.any,
  formatStyle: React.PropTypes.any,
  currency: React.PropTypes.any,
  currencyDisplay: React.PropTypes.any,
  useGrouping: React.PropTypes.any,
  minimumIntegerDigits: React.PropTypes.any,
  minimumFractionDigits: React.PropTypes.any,
  maximumFractionDigits: React.PropTypes.any,
  minimumSignificantDigits: React.PropTypes.any,
  maximumSignificantDigits: React.PropTypes.any,
  value: React.PropTypes.any
};

var FormattedPlural = function (props) {
  return React__default.createElement(
    Intl__default.FormattedPlural,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedPlural.propTypes = {
  style: React.PropTypes.any
};

var FormattedRelative = function (props) {
  return React__default.createElement(
    Intl__default.FormattedRelative,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedRelative.propTypes = {
  style: React.PropTypes.any
};

var FormattedTime = function (props) {
  return React__default.createElement(
    Intl__default.FormattedTime,
    props,
    function (localized) {
      return React__default.createElement(
        reactNative.Text,
        { style: props.style },
        localized
      );
    }
  );
};

FormattedTime.propTypes = {
  style: React.PropTypes.any
};

exports.FormattedDate = FormattedDate;
exports.FormattedHTMLMessage = FormattedHTMLMessage;
exports.FormattedMessage = FormattedMessage;
exports.FormattedNumber = FormattedNumber;
exports.FormattedPlural = FormattedPlural;
exports.FormattedRelative = FormattedRelative;
exports.FormattedTime = FormattedTime;
exports.defineMessages = Intl.defineMessages;