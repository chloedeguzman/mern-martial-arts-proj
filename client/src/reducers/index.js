import { combineReducers } from 'redux';
import martialArtReducer from './martialArtReducer';
import signUp from './signUp'

export default combineReducers({
  martialArt: martialArtReducer,
  user: signUp
});
