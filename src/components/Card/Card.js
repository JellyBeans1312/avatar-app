import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import PropTypes from 'prop-types';

export const Card = ({ character }) => {

  // const handleClick = async () => {
  //   const results = await getCharacter(character._id)
  //   return <Character character={results} />
  // }

  return (
    <Link to={`/${character.name}`} key={character._id} >
      <div className='card'>
        <img
          src={character.photoUrl}
          alt={`this is ${character.name}`}
          />
        <h2>{character.name}</h2>
        <p>Allies: {character.allies[0]}</p>
        <p>Enemies: {character.enemies[0]}</p>
      </div>
    </Link>

  );
};

Card.propTypes = {
  character: PropTypes.object.isRequired
}
