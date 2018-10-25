import React, { Component } from 'react';
import { Spring, animated, config } from 'react-spring';
import './App.css';

const HEIGHT = 30;
const WIDTH = 30;
const EXPANDED_WIDTH = 200;

const color = {
  offline: 'rgba(0,0,0,0.5)',
  online: '#44804C'
};

const style = {
  container: {
    height: HEIGHT,
    width: WIDTH,
    position: 'fixed',
    bottom: 10,
    left: 20,
    willChange: 'box-shadow, width',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 2,
    padding: '3px 5px'
  }
};

const Content = ({ styles, connected, message }) => {
  const { shadow, width, color, background } = styles;
  return (
    <animated.div
      style={{
        ...style.container,
        boxShadow: shadow,
        width,
        background
      }}
      title={`You are ${connected ? 'connected' : 'not connected'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={WIDTH}
        height={HEIGHT}
        viewBox="0 0 24 24"
        fill={color}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </g>
      </svg>
      {message ? <animated.p className="test">{message}</animated.p> : null}
    </animated.div>
  );
};

class InternetSign extends Component {
  render() {
    // console.log(this.props);
    const { message, connected } = this.props;
    return (
      <Spring
        to={{
          color: connected ? color.online : color.offline,
          shadow: message ? '0px 1px 6px rgba(0, 0, 0, 0.4)' : '0px 0px 0px #333',
          width: message ? EXPANDED_WIDTH : WIDTH,
          background: message ? '#fff' : '#f7f7f7'
        }}
        config={config.gentle}
      >
        {styles => {
          return (
            <Content
              styles={styles}
              connected={connected}
              message={message}
              changeText={this.changeText}
            />
          );
        }}
      </Spring>
    );
  }
}

export default InternetSign;
