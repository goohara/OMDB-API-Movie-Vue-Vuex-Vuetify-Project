<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green"
      ></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movies" :key="index" mb-2>
        <v-card>
          <v-img :src="item.Poster" aspect-ratio="1"></v-img>
          <v-card-title primary-title>
            <div>
              <h2>{{ item.Title }}</h2>
              <div>Year: {{ item.Year }}</div>
              <div>Type: {{ item.Type }}</div>
              <div>IMDB-id: {{ item.imdbID }}</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="getMovieFromApi(item.imdbID)"
              >View</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("home/getMoviesFromApi");
  },
  computed: {
    ...mapState({
      movie: store => store.home.movie,
      movies: store => store.home.movies,
      loading: store => store.home.loading
    })
  },
  methods: {
    ...mapActions({
      getMovieFromApi: "home/getMovieFromApi"
    })
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
