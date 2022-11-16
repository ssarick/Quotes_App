<template>
  <v-row class="flex-column flex-lg-row">
    <v-col
      lg="6"
      sm="12"
      xs="12"
      class="d-flex justify-lg-start justify-center align-center"
    >
      <NavigationLogo />
    </v-col>
    <v-col lg="6" sm="12" xs="12" class="d-flex align-center">
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
