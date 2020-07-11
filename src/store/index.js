import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   score:''
  },
  mutations: {
   onSelected(state,payload){
     state.score += payload + " "
   }
  },
  actions: { //非同期//
  },
  modules: {
  },
  getters: {
    score: state => {
      return state.score
    }
  }
})
