import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:{},
      items:[],
      signInTag:true
  },
    getters:{

    },
  mutations: {
      changeTag(state){
          state.signInTag = !state.signInTag;
      },
    add(state,OneFloor){
      state.data.OneFloor = OneFloor;
    },
      addCartMsg(state,cartsMsg){
        state.items.push(cartsMsg);
      }
  },
  actions: {

  }
})
