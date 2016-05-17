import React, { PropTypes, isValidElement, createElement } from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedMessage = props => (
  <Intl.FormattedMessage {...props}>
    {(...nodes) => {
      const newNodes = nodes.map((node) => {
        if (!isValidElement(node)) {
          return (<Text style={props.style}>{node}</Text>);
        }
        return node;
      });
      return createElement(Text, null, ...newNodes);
    }}
  </Intl.FormattedMessage>
);

FormattedMessage.propTypes = {
  style: PropTypes.any,
};

export default FormattedMessage;
