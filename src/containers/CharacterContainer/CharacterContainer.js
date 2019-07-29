import React from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../../actions';
import { Card } from '../Card/Card'
import water from '../../images/water-symbol.png'
import fire from '../../images/fire-symbol.png'
import earth from '../../images/earth-symbol.png'
import air from '../../images/air-symbol.png'



export const CharacterContainer = ({characters, filterStatus, filterClick}) => {

  const allCharacters = () => {
    console.log(characters)
    return characters.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const waterNation = () => {
    let water = characters.filter(character => character.affiliation.includes('Water'));
    return water.map(person => {
      return <Card character={person} key={person.id} affiliation='water'/>;
    });
  };

  const fireNation = () => {
    let fire = characters.filter(character => character.affiliation.includes('Fire'));
    return fire.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };

  const earthNation = () => {
    let earth = characters.filter(character => character.affiliation.includes('Earth'));
    return earth.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };

  const airNation = () => {
    let air = characters.filter(character => character.affiliation.includes('Air'));
    return air.map(person => {
      return <Card character={person} key={person.id} />;
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
          <img src={water} className='' id='water' onClick={e => handleClick(e)}>
            {/* water */}
          </img>
          <img src={fire} className='' id='fire' onClick={e => handleClick(e)}>
            {/* fire */}
          </img >
          <img src={earth} className='' id='earth' onClick={e => handleClick(e)}>
            {/* earth */}
          </img >
          <img src={air} className='' id='air' onClick={e => handleClick(e)}>
            {/* air */}
          </img >
        </div>
      </header>

      {filterStatus === 'all' && (
        <section className='allCharacters'>{allCharacters()}</section>
      )}
      {filterStatus === 'water' && (
        <section className='waterCharacters'>{waterNation()}</section>
      )}
      {filterStatus=== 'fire' && (
        <section className='fireCharacters'>{fireNation()}</section>
      )}
      {filterStatus === 'earth' && (
        <section className='earthCharacters'>{earthNation()}</section>
      )}
      {filterStatus === 'air' && (
        <section className='airCharacters'>{airNation()}</section>
      )}
    </>
  );
};

export const mapStateToProps = ({ characters, filterStatus }) => ({
  characters,
  filterStatus
});

export const mapDispatchToProps = dispatch => ({
  filterClick: filter => dispatch(filterCharacters(filter))
});



export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);