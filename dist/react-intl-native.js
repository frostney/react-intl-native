'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var Intl = _interopDefault(require('react-intl'));

var FormattedDate = function (props) {
  return React__default.createElement(
    Intl.FormattedDate,
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
    Intl.FormattedHTMLMessage,
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
    Intl.FormattedMessage,
    props,
    function () {
      for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      var newNodes = nodes.map(function (node) {
        if (!React.isValidElement(node)) {
          return React__default.createElement(
            reactNative.Text,
            { style: props.style },
            node
          );
        }
        return node;
      });
      return React.createElement.apply(undefined, [reactNative.Text, { style: props.style }].concat(newNodes));
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
    Intl.FormattedNumber,
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
    Intl.FormattedPlural,
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
    Intl.FormattedRelative,
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
    Intl.FormattedTime,
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