import axios from 'axios';
import { GET_MARTIAL_ARTS, ADD_MARTIAL_ART, DELETE_MARTIAL_ART, MARTIAL_ARTS_LOADING } from './types';

export const getMartialArts = () => dispatch => {
  dispatch(setMartialArtsLoading());
  axios
    .get('/martialarts')
    .then(res =>
      dispatch({
        type: GET_MARTIAL_ARTS,
        payload: res.data
      })
    )
};

export const addMartialArt = martialArt => dispatch => {
  axios
    .post('/martialarts', martialArt)
    .then(res =>
      dispatch({
        type: ADD_MARTIAL_ART,
        payload: res.data
      })
    )
};

export const deleteMartialArt = id => dispatch => {
  axios
    .delete(`/martialarts/${id}`).then(res =>
      dispatch({
        type: DELETE_MARTIAL_ART,
        payload: id
      })
    )
};

export const setMartialArtsLoading = () => {
  return {
    type: MARTIAL_ARTS_LOADING,
  };
};
