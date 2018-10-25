import React, { Component } from 'react';
import InternetSign from './InternetSign';
import InternetSignContainer from './InternetSignContainer';

class App extends Component {
  render() {
    return (
      <InternetSignContainer>
        <InternetSign />
      </InternetSignContainer>
    );
  }
}

export default App;
