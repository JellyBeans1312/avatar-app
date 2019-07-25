import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }


  componentDidMount() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c9')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
    <div>
      <NavBar/>
      <CharacterContainer />
    </div>
    );
  }
}

export default App;
