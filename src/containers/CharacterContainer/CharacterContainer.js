import React from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../../actions';
import { Card } from '../../components/Card/Card'
import water from '../../images/water-symbol.png'
import fire from '../../images/fire-symbol.png'
import earth from '../../images/earth-symbol.png'
import air from '../../images/air-symbol.png';
import './CharacterContainer.css'
import PropTypes from 'prop-types';



export const CharacterContainer = ({characters, filterStatus, filterClick}) => {

  const allCharacters = () => {
    return characters.map(character => {
      if (character.name.includes('(games)')) {
        return null
      } else {
        return <Card character={character} key={character._id} />;
      }
    });
  };

  const waterNation = () => {
    let water = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else if (character.name.includes('(games)')) {
        return null
      } else {
        return aff.includes('Water')
      }
    });
    return water.map(character => {
      return <Card character={character} key={character._id} affiliation='water'/>;
    });
  };

  const fireNation = () => {
    let fire = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else if (character.name.includes('(games)')) {
        return null
      } else {
        return aff.includes('Fire')
      }
    });
    return fire.map(character => {
      return <Card character={character} key={character._id} />;
    });
  };

  const earthNation = () => {
    let earth = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else if (character.name.includes('(games)')) {
        return null
      } else {
        return aff.includes('Earth')
      }
  });
    return earth.map(character => {
      return <Card character={character} key={character._id} />;
    });
  };

  const airNation = () => {
    let air = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else if (character.name.includes('(games)')) {
        return null
      } else {
        return aff.includes('Air')
      }
    });
    return air.map(character => {
      return <Card character={character} key={character._id} />;
    });
  };

  const handleClick = e => {
    e.preventDefault()
    const filter = e.target.id;
    filterClick(filter);
  };

  return (
    <>
      <header className='header'>
        <h2 className='title'>
          Pick a Nation!!
        </h2>
        <div className='categories'>
          <p className='symbols all' id='all' onClick={e => handleClick(e)}>
            Show all
          </p>
          <img src={water} alt='water symbol'className='symbols' id='water' onClick={e => handleClick(e)}/>

          <img src={fire} alt='fire symbol'className='symbols' id='fire' onClick={e => handleClick(e)}/>


          <img src={earth} alt='earth symbol'className='symbols' id='earth' onClick={e => handleClick(e)}/>

          <img src={air} alt='air symbol'className='symbols' id='air' onClick={e => handleClick(e)}/>

        </div>
      </header>

      <div className='container'>
      {filterStatus === 'all' && (
        <section className='all-characters'>{allCharacters()}</section>
      )}
      {filterStatus === 'water' && (
        <section className='water-characters'>{waterNation()}</section>
      )}
      {filterStatus === 'fire' && (
        <section className='fire-characters'>{fireNation()}</section>
      )}
      {filterStatus === 'earth' && (
        <section className='earth-characters'>{earthNation()}</section>
      )}
      {filterStatus === 'air' && (
        <section className='air-characters'>{airNation()}</section>
      )}
      </div>
    </>
  );
};

export const mapStateToProps = (store) => ({
  characters: store.characters,
  filterStatus: store.filter
});

export const mapDispatchToProps = dispatch => ({
  filterClick: filter => dispatch(filterCharacters(filter))
});

CharacterContainer.propTypes = { 
  characters: PropTypes.array.isRequired,
  filterStatus: PropTypes.string.isRequired,
  filterClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);