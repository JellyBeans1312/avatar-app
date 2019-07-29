import React from 'react';
import { Link } from 'react-router-dom';
import { getCharacter } from '../../apiCalls/apiCalls'

export const Card = ({ character }) => {
  // const handleClick = async () => {
  //   const results = await getCharacter(character._id)
  //   return results
  // }

  return (
    <Link to={`/${character.name}`} key={character.id}>
      <section>
        <img
          src={character.photoUrl}
          alt={`a photo of ${character.name}`}
          />
        <h2>{character.name}</h2>
        <p>Allies: {character.allies[0]}</p>
        <p>Enemies: {character.enemies[0]}</p>
      </section>
    </Link>

  );
};
