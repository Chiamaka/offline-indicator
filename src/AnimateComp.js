import React, { PureComponent } from 'react';
import './App.css';

class AnimateComp extends PureComponent {
  state = {
    clicked: false
  };

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    return (
      <div className="container">
        <div className="box" onClick={this.handleClick}>
          wifi
          <div className="test">Connection lost</div>
        </div>
      </div>
    );
  }
}

export default AnimateComp;
