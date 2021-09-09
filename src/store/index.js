import Vue from 'vue';
import Vuex from 'vuex';

import sensors from './sensors';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sensors,
  },
});
