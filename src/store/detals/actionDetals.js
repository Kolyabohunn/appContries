export const SET_LOADING = 'detals/SET_LOADING';
export const SET_COUNTRY = 'detals/SET_COUNTRY';
export const SET_ERROR = 'detals/SET_ERROR';
export const CLEAR_DETALS = 'detals/CLEAR_DETALS';
export const SET_NEIGHBORS = 'detals/SET_NEIGHBORS';
const setLoading = () => ({ type: SET_LOADING });
const setContry = (country) => ({
  type: SET_COUNTRY,
  paylound: country,
});
const setError = (error) => ({
  type: SET_COUNTRY,
  paylound: error,
});
const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  paylound: neighbors,
});
export const clearDetals = () => ({
  type: CLEAR_DETALS,
});
export const loadCountry =
  (name) =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then((res) => dispatch(setContry(res.data[0])))
      .catch((err) => dispatch(setError(err)));
  };
export const loadNeighbors =
  (neighbors) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(neighbors))
      .then((contries) =>
        dispatch(setNeighbors(contries.data.map((contie) => contie.name)))
      )
      .catch((err) => console.error(err));
  };
