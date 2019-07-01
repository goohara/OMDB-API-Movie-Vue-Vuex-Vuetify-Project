import axios from "axios";
import router from "@/router";

const state = {
  loading: true,
  movies: [],
  movie: [],
  dialog: false
};

const mutations = {
  preLoading(state, preload) {
    state.loading = preload;
  },
  getMovies(state, preload) {
    state.movies = preload.Search;
  },
  getMovie(state, preload) {
    state.movie = preload;
  }
};

const actions = {
  async getMoviesFromApi({ commit }) {
    await axios
      .get(
        "http://www.omdbapi.com/?s=captain&apikey=b76b385c&page=1&type=movie&Content-Type=application/json"
      )
      .then(res => {
        commit("preLoading", false);
        commit("getMovies", res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async getMovieFromApi({ commit }, preload) {
    let url = `http://www.omdbapi.com/?apikey=b76b385c&i=${preload}&Content-Type=application/json`;
    console.log(url);
    await axios
      .get(url)
      .then(res => {
        commit("preLoading", false);
        commit("getMovie", res.data);
        router.push(`/movie/${preload}`);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
