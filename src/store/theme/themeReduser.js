import { SET_THEME } from './theneAction';
export const themeReduser = (state = 'light', { type, playaut }) => {
  switch (type) {
    case SET_THEME:
      return playaut;

    default:
      return state;
  }
};
