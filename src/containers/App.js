import React, { Component } from 'react';
import './App.css';
import CharacterContainer from '../components/CharacterContainer'
import { getAllCharacters } from '../apiCalls/apiCalls'
import { connect } from 'react-redux'
import { showCharacters } from '../actions'

export class App extends Component {


async componentDidMount() {
  try {
    const res = await getAllCharacters()
    this.props.characters(res)
  } catch (error) {
    throw Error(error.message)
  }

}

  render() {
    return (
    <div>

      <CharacterContainer />
    </div>
    );
  }
}

const mapStateToProps = store => ({
  characters: store.characters
})

const mapDispatchToProps = dispatch => ({
  characters: characters => dispatch(showCharacters(characters))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
