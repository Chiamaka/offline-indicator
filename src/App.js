import React, { Component } from 'react';
import { connect } from 'react-redux';
import InternetSign from './InternetSign';
import { activeOnline, closeWidget, deactiveOnline } from './actions/index';

class App extends Component {
  state = { online: false };
  componentDidMount() {
    this.changeOnlineStatus(true);
  }
  changeOnlineStatus = online => {
    if (online) {
      setTimeout(() => {
        this.props.activeOnline();
      }, 1000);
    } else {
      setTimeout(() => {
        this.props.deactiveOnline();
      }, 1000);
    }

    setTimeout(() => {
      this.props.closeWidget();
    }, 5000);
  };

  render() {
    const { connecting, connected, message } = this.props;
    console.log('connecting::', connecting);
    console.log('connected::', connected);
    console.log('message::', message);
    return <InternetSign connecting={connecting} connected={connected} message={message} />;
  }
}
const mapDispatchToProps = dispatcher => {
  return {
    activeOnline: () => dispatcher(activeOnline(dispatcher)),
    closeWidget: () => dispatcher(closeWidget()),
    deactiveOnline: () => dispatcher(deactiveOnline())
  };
};

const mapStateToProps = state => {
  const { online: internetState, offline } = state;
  console.log('state:::', state);
  const { connecting, connected, message } = internetState;
  const { online } = offline;
  return {
    connecting,
    connected,
    message,
    online
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
