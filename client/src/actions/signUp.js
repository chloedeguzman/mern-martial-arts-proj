import axios from 'axios';
import SIGN_UP from './types';

export const createNewUser = user => dispatch => {
  axios
    .post('/account/signup', user)
    .then(res =>
      dispatch({
        type: SIGN_UP,
        payload: res.data
      })
    )
};
