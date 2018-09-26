import { SIGN_UP} from '../actions/types';

const initialState = {
  users: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SIGN_UP:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };

    default:
      return state;
  }
}
