import React from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../../actions';
import { Card } from '../Card/Card'
import water from '../../images/water-symbol.png'
import fire from '../../images/fire-symbol.png'
import earth from '../../images/earth-symbol.png'
import air from '../../images/air-symbol.png';
import { Redirect } from 'react-router-dom';



export const CharacterContainer = ({characters, filterStatus, filterClick}) => {

  const allCharacters = () => {
    return characters.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const waterNation = () => {
    let water = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else {
        return aff.includes('Water')
      }
    });
    return water.map(character => {
      return <Card character={character} key={character.id} affiliation='water'/>;
    });
  };

  const fireNation = () => {
    let fire = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else {
        return aff.includes('Fire')
      }
    });
    return fire.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const earthNation = () => {
    let earth = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else {
        return aff.includes('Earth')
      }
  });
    return earth.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const airNation = () => {
    let air = characters.filter(character => {
      const aff = character.affiliation
      if (aff === undefined) {
        return null
      } else {
        return aff.includes('Air')
      }
    });
    return air.map(character => {
      return <Card character={character} key={character.id} />;
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
          <button className=''id='all' onClick={e => handleClick(e)}>
            Show all
          </button>
          <img src={water} alt='water symbol'className='' id='water' onClick={e => handleClick(e)}/>

          <img src={fire} alt='fire symbol'className='' id='fire' onClick={e => handleClick(e)}>
            {/* fire */}
          </img >
          <img src={earth} alt='earth symbol'className='' id='earth' onClick={e => handleClick(e)}>
            {/* earth */}
          </img >
          <img src={air} alt='air symbol'className='' id='air' onClick={e => handleClick(e)}>
            {/* air */}
          </img >
        </div>
      </header>

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



export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);