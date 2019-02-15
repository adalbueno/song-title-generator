import Vue from 'vue'
import Vuex from 'vuex'
import idea from './modules/idea'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    idea
  }
})
