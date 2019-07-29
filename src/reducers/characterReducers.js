export const characters = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_CHARACTERS' :
      return action.characters
    default :
      return state
  }
}