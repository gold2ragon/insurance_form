import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import appStore from './modules/appStore'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const state = {
  //
}

const mutations = {
  //
}

const actions = {
  //
}

const getters = {
  //
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    appStore
  },
  plugins: [
    // createPersistedState()
  ]
})
