export default {
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  setProperty(state, payload) {
    state.property = payload;
  },
  setProperties(state, payload) {
    state.propertiesList = payload;
  },
};