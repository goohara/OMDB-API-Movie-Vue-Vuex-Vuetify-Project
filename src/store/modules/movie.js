import axios from "axios";

const state = {
  loading: true,
  movie: []
};

const mutations = {
  preLoading(state, preload) {
    state.loading = preload;
  },
  getMovie(state, preload) {
    state.movie = preload;
  }
};

const actions = {
  getMovieFromApi({ commit }, preload) {
    console.log(preload);
    let url = `http://www.omdbapi.com/?apikey=b76b385c&${preload}&Content-Type=application/json`;
    axios.get(url).then(res => {
      commit("preLoading", false);
      commit("getMovie", res);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
