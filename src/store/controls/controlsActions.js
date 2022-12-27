export const SET_CONTROLS = 'contries/SET_CONTROLS';
export const SET_REGION = 'contries/SET_REGION';
export const CLEAR_CONTROLS = 'contries/CLEAR_CONTROLS';
export const setControls = (controls) => ({
  type: SET_CONTROLS,
  playaut: controls,
});
export const setRigions = (region) => ({
  type: SET_REGION,
  playaut: region,
});
export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});
