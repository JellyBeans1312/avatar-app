const endPoints = [
  '/api/v1/characters?perPage=${Num}?page=${Num}',
  '/api/v1/characters/${CharacterId}',
  'api/v1/characters?affiliation=${Nation+Name}',
  '/api/v1/characters?enemies=${Character+Name}',
  '/api/v1/characters?allies=${Character+Name}',
  '/api/v1/characters?name=${Character+Name}',
  '/api/v1/characters/random',
  '/api/v1/characters/avatar'
]
export default endPoints;