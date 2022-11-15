<template>
  <v-row>
    <v-col class="d-flex align-center">
      <NavigationLogo />
    </v-col>
    <v-col class="d-flex align-center">
      <NavigationMenu />
    </v-col>
  </v-row>
</template>

<script>
import NavigationMenu from "@/components/Navigation/Menu";
import NavigationLogo from "@/components/Navigation/Logo";
export default {
  name: "Navigation-Bar",
  components: { NavigationMenu, NavigationLogo },
};
</script>

<style scoped></style>
