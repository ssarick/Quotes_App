<template>
  <v-app :theme="theme">
    <v-app-bar elevation="0" class="pa-5">
      <v-container class="d-flex justify-space-between align-center">
        <NavigationBar />
      </v-container>
    </v-app-bar>
    <v-main class="mt-10">
      <v-container id="content">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/Navigation/index.vue";
export default {
  name: "App",
  components: { NavigationBar },
  data: () => ({
    theme: "light",
  }),
  methods: {},
};
</script>
