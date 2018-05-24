// Adapted from https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
import React from 'react';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

export default function asyncLoader(getComponent, message) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        this.componentPromise = getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      } else if (!this.componentPromise) {
        this.componentPromise = Promise.resolve();
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props}/>;
      }
      return (
        <div className="async-loader">
          <LoadingIndicator message={message || 'Loading page...'}/>
        </div>
      );
    }
  };
}
