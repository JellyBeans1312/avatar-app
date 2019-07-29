import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar'
import CharacterContainer from '../components/CharacterContainer'

class App extends Component {
  constructor(){
    super();

  }


  componentDidMount() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
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
