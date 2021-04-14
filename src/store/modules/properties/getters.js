export default {
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
  property(state) {
    return state.property;
  },
  hasProperty(state) {
    return state.property && state.property.length > 0;
  },
  propertiesList(state) {
    return state.propertiesList;
  },
  firstProperty(state) {
    return state.propertiesList.length ? state.propertiesList[0].id : null;
  },
};