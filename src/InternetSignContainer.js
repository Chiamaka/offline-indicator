import React, { Component } from 'react';

class InternetSignContainer extends Component {
  state = { online: navigator.onLine, message: undefined };

  componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  handleOnline = online => {
    this.setState({ message: 'Attempting to connect' }, this.fakeReconnection);
  };

  handleOffline = () => {
    this.setState({ online: false, message: 'Connection lost' }, this.resetAnimation);
  };

  fakeReconnection = () => {
    setTimeout(() => {
      this.setState({ online: true, message: 'Reconnected' }, this.resetAnimation);
    }, 3000);
  };

  resetAnimation = () => {
    setTimeout(() => {
      this.setState({ message: undefined });
    }, 2000);
  };

  render() {
    return React.cloneElement(this.props.children, {
      connected: this.state.online,
      message: this.state.message
    });
  }
}

export default InternetSignContainer;
