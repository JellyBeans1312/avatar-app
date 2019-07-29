export const characters = 'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=100'
export const character = id => `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
// 'api/v1/characters?affiliation=${Nation+Name}'
// '/api/v1/characters?enemies=${Character+Name}'
// '/api/v1/characters?allies=${Character+Name}'
// '/api/v1/characters?name=${Character+Name}'
export const randomCharacters = '/api/v1/characters/random?count=10'
export const avatars = '/api/v1/characters/avatar'
