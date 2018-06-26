import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:{}
  },
  mutations: {
    add(state,OneFloor){
      state.data.OneFloor = OneFloor;
    }
  },
  actions: {

  }
})
