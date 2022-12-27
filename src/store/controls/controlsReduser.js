import { SET_CONTROLS, SET_REGION, CLEAR_CONTROLS } from './controlsActions';
const initialState = {
  search: '',
  region: '',
};
export const controlReduser = (state = initialState, { type, playaut }) => {
  switch (type) {
    case SET_CONTROLS:
      return { ...state, search: playaut };
    case SET_REGION:
      return { ...state, region: playaut };
    case CLEAR_CONTROLS:
      return initialState;
    default:
      return state;
  }
};
