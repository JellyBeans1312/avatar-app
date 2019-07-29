import { combineReducers } from 'redux';
import { characters, filterCharacters } from './characterReducers'

export const rootReducer = combineReducers({
    characters: characters,
    filter: filterCharacters
})