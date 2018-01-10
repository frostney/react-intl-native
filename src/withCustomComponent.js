import React, { Component } from 'react';
import { Text } from 'react-native';

const withCustomComponent = (Comp) =>
  class extends Component {
    setNativeProps = nativeProps => {
      /* eslint no-underscore-dangle: 0 */

      this._root.setNativeProps(nativeProps);
    }

    render() {
      const component = this.props.component || this.context.textComponent || Text;

      return <Comp {...this.props} component={component} />;
    }
  };

export default withCustomComponent;
