import React, { Component } from 'react';
import Issues from './components/issues';
import './base.scss';

 class App extends Component {
  render() {
    return (
      <div className='container'>
      <Issues/>
      </div>
    )
  }
}

export default App