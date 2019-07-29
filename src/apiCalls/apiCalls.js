import { characters, character } from './endPoints'

export const getAllCharacters = async () => {
  try {
    const res = await fetch(characters);
    const parse = await res.json();
    return parse;
  } catch (error) {
    throw Error('There was a problem getting your characters');
  }
};

export const getCharacter = async (id) => {
  try {
    const res = await fetch(character(id));
    const parse = await res.json()
    return parse;
  } catch(error) {
    throw Error('There was a problem getting your character')
  }
}