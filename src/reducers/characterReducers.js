export const characters = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_CHARACTERS' :
      return action.characters
    default :
      return state
  }
}

export const filterCharacters = (state ='all', action) => {
  switch(action.type) {
    case 'FILTER_CHARACTERS' :
      return action.filterStatus
    default : 
      return state
  }
}