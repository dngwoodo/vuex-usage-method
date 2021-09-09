import { createNamespacedHelpers } from 'vuex';

import { fetchSensorsByMinutes, fetchSensorsBySeconds } from '../services/api/sensors';

const initialState = {
  sensorsBySeconds: [],
  sensorsByMinutes: [],
  loadings: {},
  errors: {},
};

const getters = {};

const mutations = {
  startLoadSensorBySeconds(state) {
    state.loadings = {
      ...state.loadings,
      loadSensorsBySeconds: true,
    };
    state.errors = {
      ...state.loadings,
      loadSensorsBySeconds: '',
    };
  },
  startLoadSensorByMinutes(state) {
    state.loadings = {
      ...state.loadings,
      loadSensorsByMinutes: true,
    };
    state.errors = {
      ...state.loadings,
      loadSensorsByMinutes: '',
    };
  },
  completeLoadSensorBySeconds(state, data) {
    state.loadings = {
      ...state.loadings,
      loadSensorsBySeconds: false,
    };
    state.sensorsBySeconds = data;
  },
  completeLoadSensorByMinutes(state, data) {
    state.loadings = {
      ...state.loadings,
      loadSensorsByMinutes: false,
    };
    state.sensorsByMinutes = data;
  },
  failLoadSensorsBySeconds(state, error) {
    state.loadings = {
      ...state.loadings,
      loadSensorsBySeconds: false,
    };
    state.errors = {
      ...state.errors,
      loadSensorsBySeconds: error,
    };
  },
  failLoadSensorsByMinutes(state, error) {
    state.loadings = {
      ...state.loadings,
      loadSensorsByMinutes: false,
    };
    state.errors = {
      ...state.errors,
      loadSensorsByMinutes: error,
    };
  },
};

const actions = {
  async loadSensorsBySeconds({ commit }, { shipName, startDate, endDate }) {
    commit('startLoadSensorBySeconds');
    try {
      const data = await fetchSensorsBySeconds({ shipName, startDate, endDate });
      commit('completeLoadSensorBySeconds', data);
    } catch (error) {
      console.log(error);
      commit('failLoadSensorsBySeconds', error);
    }
  },
  async loadSensorsByMinutes({ commit }, { shipName, startDate, endDate }) {
    commit('startLoadSensorByMinutes');
    try {
      const data = await fetchSensorsByMinutes({ shipName, startDate, endDate });
      commit('completeLoadSensorByMinutes', data);
    } catch (error) {
      console.log(error);
      commit('failLoadSensorsByMinutes', error);
    }
  },
};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers('sensors');

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
