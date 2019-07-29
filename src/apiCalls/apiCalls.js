import { characters, avatars, char } from './endPoints'

export const getAllCharacters = async () => {
  try {
    const res = await fetch(characters);
    const parse = await res.json();
    return parse;
  } catch (error) {
    throw Error('There was a problem getting your characters');
  }
};