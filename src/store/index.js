import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import movie from "./modules/movie";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    movie
  }
});
