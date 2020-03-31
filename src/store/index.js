import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    toggle(){
      if (this.state.drawer != true){
        this.state.drawer = true;
      }else {
        this.state.drawer = false;
      }
    }
  },
  actions: {},
  modules: {}
});
