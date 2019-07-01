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

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img :src="movie.Poster" aspect-ratio="2"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{ movie.Title }}-{{ movie.Year }}</h2>
              <p>{{ movie.Plot }}</p>
              <h3>Actors:</h3>
              {{ movie.Actors }}
              <h4>Awards:</h4>
              {{ movie.Awards }}
              <p>Genre: {{ movie.Genre }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-dialog v-model="dialog" width="500">
            <v-btn slot="activator" color="green" dark>View Ratings</v-btn>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title
                >Ratings</v-card-title
              >
              <v-card-text>
                <table style="width:100%" border="1">
                  <tr>
                    <th>Source</th>
                    <th>Ratings</th>
                  </tr>
                  <tr v-for="(rating, index) in movie.Ratings" :key="index">
                    <td align="center">{{ rating.Source }}</td>
                    <td align="center">{{ rating.Value }}</td>
                  </tr>
                </table>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      movie: store => store.home.movie,
      loading: store => store.home.loading,
      dialog: store => store.home.dialog
    })
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
