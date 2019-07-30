import { getAllCharacters, getCharacter } from './apiCalls';

describe('Api calls', () => {
  let url = 'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=50';
  let mockAllCharacters = [
    { id: 1, name: 'Aang', 
    affiliation: 'air', 
    enemies: ['bad guys'], 
    allies: ['good guys'],
    photoUrl: 'hello'},
    { id: 2, name: 'Katara',
    affiliation: 'water', 
    enemies: ['bad guys'], 
    allies: ['good guys'],
    photoUrl: 'hello'}
  ];
  let mockCharacter = [
    { id: 2, name: 'Katara',
    affiliation: 'water', 
    enemies: ['bad guys'], 
    allies: ['good guys'],
    photoUrl: 'hello'}
  ]
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAllCharacters)
      });
    });
  });

  describe('getAllCharacters', () => {
    it('should be called with the correct url', () => {
      getAllCharacters();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return the characters', async () => {
      const result = await getAllCharacters();
      expect(result).toEqual(mockAllCharacters);
    });

    it('should return an error if fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getAllCharacters()).rejects.toEqual(
        Error('There was a problem getting your characters')
      );
    });
  });
  describe('getCharacter', () => {
    it('should be called with correct url', () => {
      getCharacter(1);
      expect(window.fetch).toHaveBeenCalledWith(`https://last-airbender-api.herokuapp.com/api/v1/characters/1`)
    });

    it('should return the character', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCharacter)
        });
      });

      const result = await getCharacter(2)

      expect(result).toEqual(mockCharacter)
    });

    it('should return an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getCharacter(1)).rejects.toEqual(
        Error('There was a problem getting your character')
      )
    });
  });
});
