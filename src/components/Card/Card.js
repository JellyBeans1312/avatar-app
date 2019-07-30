import React from 'react';
import { Link } from 'react-router-dom';
import { getCharacter } from '../../apiCalls/apiCalls'
import './Card.css'

export const Card = ({ character }) => {

  const handleClick = async () => {
    const results = await getCharacter(character._id)
    return results
  }

  return (
    <Link to={`/${character.name}`} key={character._id} >
      <div onClick={handleClick} className='card'>
        <img
          src={character.photoUrl}
          alt={`a photo of ${character.name}`}
          />
        <h2>{character.name}</h2>
        <p>Allies: {character.allies[0]}</p>
        <p>Enemies: {character.enemies[0]}</p>
      </div>
    </Link>

  );
};
