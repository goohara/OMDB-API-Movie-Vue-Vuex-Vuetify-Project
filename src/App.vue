<template>
  <v-app>
    <router-view>
      <Home />
    </router-view>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>
