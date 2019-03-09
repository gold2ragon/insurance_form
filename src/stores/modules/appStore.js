const state = {
  step: 1,
  year: '',
  make: '',
  model: '',
  owndership: ''
}

const mutations = {
  SET_YEAR (state, payload) {
    state.year = payload
  },
  SET_MAKE (state, payload) {
    state.make = payload
  },
  SET_MODEL (state, payload) {
    state.model = payload
  },
  SET_OWNERSHIP (state, payload) {
    state.owndership = payload
  },
  SET_STEP (state, payload) {
    state.step = payload
  }
}

const actions = {
  setYear (context, payload) {
    context.commit('SET_YEAR', payload)
  },
  setMake (context, payload) {
    context.commit('SET_MAKE', payload)
  },
  setModel (context, payload) {
    context.commit('SET_MODEL', payload)
  },
  setOwnership (context, payload) {
    context.commit('SET_OWNERSHIP', payload)
  },
  setStep (context, payload) {
    context.commit('SET_STEP', payload)
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
