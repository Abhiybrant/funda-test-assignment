import { createStore } from 'vuex';
import propertiesModule from './modules/properties/index.js';

const store = createStore({
  modules: {
    properties: propertiesModule
  }
});

export default store;