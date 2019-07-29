import { showCharacters, filterCharacters } from './index';


describe('Actions', () => {
  it('should have a type of SHOW_CHARACTERS and have the data as all of the characters', () => {
    const characters = ['hello', 'there', 'fellow']
    const expected = {
      type: 'SHOW_CHARACTERS',
      characters
    }

    const result = showCharacters(characters)
    expect(result).toEqual(expected)
  }); 

  it('should have a type of FILTER_CHARACTERS and have the filtered status', () => {
    const filterStatus = 'water';
    const expected = {
      type: 'FILTER_CHARACTERS',
      filterStatus
    }

    const result = filterCharacters(filterStatus)
    expect(result).toEqual(expected)
  }); 
});