export const showCharacters = characters => ({
  type: 'SHOW_CHARACTERS',
  characters
});

export const filterCharacters = filterStatus => ({
  type: 'FILTER_CHARACTERS' ,
  filterStatus
})