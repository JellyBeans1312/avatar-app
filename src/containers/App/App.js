import React, { Component } from 'react';
import './App.css';
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import { getAllCharacters } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux'
import { showCharacters } from '../../actions'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';


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
    <main>
      <Route exact path='/' component={CharacterContainer} />
    </main>
    );
  }
}

export const mapStateToProps = store => ({
  allCharacters: store.characters
})

export const mapDispatchToProps = dispatch => ({
  characters: characters => dispatch(showCharacters(characters))
})

App.propTypes = {
  allCharacters: PropTypes.array.isRequired,
  characters: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
