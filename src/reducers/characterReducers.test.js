import { characters, filterCharacters } from './characterReducers'

describe('characters reducer', () => {
  it('should return the default state', () => {
    const state = [];
    const result = characters(undefined, {});
    expect(result).toEqual(state);
  });

  it('should return all characters', () => {
    const allCharacters = ['hello', 'there', 'fellow'];
    const action = {
      type: 'SHOW_CHARACTERS',
      characters
    };
    const expected = allCharacters;
    const result = characters(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should return default state', () => {
    const state = 'all';
    const result = filterCharacters(undefined, {});
    expect(result).toEqual(state);
  });
  it('should send the chosen filter to the store', () => {
    const filterStatus = 'water';
    const action = {
      type: 'FILTER_CHARACTERS',
      filterStatus
    };
    const expected = filterStatus;
    const result = filterCharacters(undefined, action);
    expect(result).toEqual(expected);
  });
});
