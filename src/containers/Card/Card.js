import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export const Card = ({ character }) => {
  return (
      <section>
        <h2>{character.name}</h2>
        <img
          src={character.photoUrl}
          alt={`a photo of ${character.name}`}
          />
      </section>

  );
};
