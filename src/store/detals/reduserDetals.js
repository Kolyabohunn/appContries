import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_DETALS,
  SET_NEIGHBORS,
} from './actionDetals';
const initialState = {
  status: 'indle',
  load: null,
  error: null,
  neighbors: [],
};
export const reduserDetails = (state = initialState, { type, paylound }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, status: 'loading', error: null };
    case SET_COUNTRY:
      return { ...state, status: 'resolve', load: paylound };
    case SET_ERROR:
      return { ...state, status: 'reject', error: paylound };
    case CLEAR_DETALS:
      return initialState;
    case SET_NEIGHBORS:
      return { ...state, neighbors: paylound };
    default:
      return state;
  }
};
