import { SET_CONTRIES, SET_ERROR, SET_LOADING } from './contriesActions';
const initialState = {
  status: 'idle',
  error: null,
  load: [],
};
export const contrieReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, status: 'loading', error: null };
    case SET_CONTRIES:
      return { ...state, status: 'resolve', load: payload.data };
    case SET_ERROR:
      return { ...state, status: 'reject', error: payload };
    default:
      return state;
  }
};
