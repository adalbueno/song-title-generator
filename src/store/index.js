import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import idea from './modules/idea'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'ideas',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
    idea
  }
})
