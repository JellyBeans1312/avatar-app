import { getAllCharacters } from './apiCalls';

describe('Api calls', () => {
  let url = 'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=100';
  let mockAllCharacters = [
    { _id: 1, name: 'Aang', 
    affiliation: 'air', 
    enemies: ['bad guys'], 
    allies: ['good guys'],
    photoUrl: 'hello'},
    { _id: 2, name: 'Katara',
    affiliation: 'water', 
    enemies: ['bad guys'], 
    allies: ['good guys'],
    photoUrl: 'hello'}
  ];
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAllCharacters )
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
  });
});
