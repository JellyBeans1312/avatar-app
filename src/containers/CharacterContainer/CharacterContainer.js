import React from 'react';
import { connect } from 'react-redux';
import { filterCharacters } from '../../actions';
import Card from '../Card/Card'

export const CharacterContainer = ({filterStatus, filterClick}) => {
  const allCharacters = () => {
    return allCharacters.map(character => {
      return <Card character={character} key={character.id} />;
    });
  };

  const waterNation = () => {
    let water = allCharacters.filter(character => character.affiliation.includes('water'));
    return water.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };

  const fireNation = () => {
    let fire = allCharacters.filter(character => character.affiliation.includes('fire'));
    return fire.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };
  const earthNation = () => {
    let earth = allCharacters.filter(character => character.affiliation.includes('earth'));
    return earth.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };
  const airNation = () => {
    let air = allCharacters.filter(character => character.affiliation.includes('air'));
    return air.map(person => {
      return <Card character={person} key={person.id} />;
    });
  };

  const handleClick = e => {
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
          <p className='button grow' id='all' onClick={e => handleClick(e)}>
            Show all
          </p>
          <p className='button grow' id='water' onClick={e => handleClick(e)}>
            water
          </p>
          <p className='button grow' id='fire' onClick={e => handleClick(e)}>
            fire
          </p>
          <p className='button grow' id='earth' onClick={e => handleClick(e)}>
            earth
          </p>
          <p className='button grow' id='air' onClick={e => handleClick(e)}>
            air
          </p>
        </div>
      </header>
      {filterStatus === 'all' && (
        <section className='allCharacters'>{allCharacters()}</section>
      )}
      {filterStatus === 'water' && (
        <section className='allCharacters'>{waterNation()}</section>
      )}
      {filterStatus=== 'fire' && (
        <section className='allCharacters'>{fireNation()}</section>
      )}
      {filterStatus === 'earth' && (
        <section className='allCharacters'>{earthNation()}</section>
      )}
      {filterStatus === 'air' && (
        <section className='allCharacters'>{airNation()}</section>
      )}
    </>
  );
};

export const mapStateToProps = ({ allCharacters, filterStatus }) => ({
  allCharacters,
  filterStatus
});

export const mapDispatchToProps = dispatch => ({
  filterClick: filter => dispatch(filterCharacters(filter))
});



export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);