import { combineReducers } from 'redux';
import { characters } from './characterReducers'
export const rootReducer = combineReducers({
    characters: characters
})