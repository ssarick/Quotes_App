<template>
  <v-app :theme="theme">
    <div>
      <v-container class="d-flex justify-space-between align-center">
        <NavigationBar />
      </v-container>
    </div>
    <v-main>
      <v-container id="content">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/Navigation/index.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { NavigationBar },
  data: () => ({
    theme: "light",
  }),
  methods: {
    ...mapActions(["ADD_QUOTE", "FETCH_QUOTE"]),
  },
  created() {
    this.FETCH_QUOTE();
  },
};
</script>
