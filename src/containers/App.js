import React, { Component } from 'react';
import './App.css';
import CharacterContainer from '../components/CharacterContainer'

class App extends Component {
  constructor(){
    super();

  }


  render() {
    return (
    <div>

      <CharacterContainer />
    </div>
    );
  }
}

export default App;
