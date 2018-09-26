import { GET_MARTIAL_ARTS, ADD_MARTIAL_ART, DELETE_MARTIAL_ART, MARTIAL_ARTS_LOADING } from '../actions/types';

const initialState = {
  martialArts: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MARTIAL_ARTS:
      return {
        ...state,
        martialArts: action.payload,
        loading: false
      };
    case DELETE_MARTIAL_ART:
      return {
        ...state,
        martialArts: state.martialArts.filter(item => item._id !== action.payload)
      };
    case ADD_MARTIAL_ART:
      return {
        ...state,
        martialArts: [action.payload, ...state.martialArts]
      };
    case MARTIAL_ARTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
