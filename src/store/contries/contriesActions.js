export const SET_CONTRIES = 'conties/SET_CONTRIES';
export const SET_LOADING = 'conties/SET_LOADING';
export const SET_ERROR = 'conties/SET_ERROR';
const setContries = (contries) => ({
  type: SET_CONTRIES,
  payload: contries,
});
const setLoading = () => ({ type: SET_LOADING });
const setError = (err) => ({ type: SET_ERROR, payload: err });
export const loadContries =
  () =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then((data) => dispatch(setContries(data)))
      .catch((err) => dispatch(setError(err.message)));
  };
