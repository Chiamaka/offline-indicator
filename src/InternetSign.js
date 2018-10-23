import React, { Component, Fragment } from 'react';
import { Spring, animated, config } from 'react-spring';
import './App.css';

const color = {
  offline: 'rgba(0,0,0,0.5)',
  online: '#44804C'
};

const style = {
  container: {
    height: 100,
    width: 100,
    position: 'fixed',
    bottom: 10,
    left: 20,
    willChange: 'boxShadow, background',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 5
    // backgroundColor: 'rgba(0,0,0,0.1)'
  }
};

const pages = [
  style => <animated.p className="test">Connection lost</animated.p>,
  style => <animated.p className="test">Attempting to reconnect</animated.p>,
  style => <animated.p className="test">Reconnected!</animated.p>
];

const Content = ({ styles, connected, message }) => {
  const { shadow, width, color, toggle } = styles;
  return (
    <animated.div style={{ ...style.container, boxShadow: shadow, width }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill={color}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </g>
      </svg>
      {message ? <animated.p className="test">{message}</animated.p> : null}
      {/* <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
      >
        {styles => {
          return state.toggle && state.connecting ? pages[state.index](styles) : null;
        }}
      </Transition> */}
    </animated.div>
  );
};

class InternetSign extends Component {
  state = { toggle: false, connecting: false, index: 0, online: false, message: '' };

  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  changeText = e => this.setState(state => ({ index: state.index === 2 ? 0 : state.index + 1 }));

  render() {
    // const toggle = this.state.toggle;
    const { message, connecting, connected } = this.props;
    return (
      <Spring
        to={{
          color: connected ? color.online : color.offline,
          shadow: message ? '1px 1px 6px #333' : '0px 0px 0px #333',
          width: message ? 400 : 100
        }}
        // children={Content}
        config={config.gentle}
        onStart={() => this.setState({ connecting: false })}
        onRest={() => this.setState({ connecting: true })}
      >
        {styles => {
          return (
            <Fragment>
              <Content
                styles={styles}
                connected={connected}
                message={message}
                changeText={this.changeText}
              />
            </Fragment>
          );
        }}
      </Spring>
    );
  }
}

export default InternetSign;
