export const contriesSelectorInfo = (state) => ({
  status: state.contries.status,
  error: state.contries.error,
  qty: state.contries.load,
});
export const allContriesSelect = (state) => state.contries.load;
export const selectSearchContries = (state, { search = '', region = '' }) => {
  return state.contries.load.filter(
    (st) =>
      st.name.toLowerCase().includes(search.toLowerCase()) &&
      st.region.includes(region)
  );
};
