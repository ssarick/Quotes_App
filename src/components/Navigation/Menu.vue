<template>
  <div class="d-flex align-end align-center w-100 justify-end">
    <Transition name="slide-fade">
      <v-text-field
        v-if="isSearch || $vuetify.display.mdAndDown"
        v-model="search"
        clearable
        label="Search"
        hide-details
        variant="outlined"
        @input="filter"
      ></v-text-field>
    </Transition>
    <v-btn
      v-if="$vuetify.display.mdAndUp"
      icon
      elevation="0"
      size="x-large"
      @click="isSearch = !isSearch"
    >
      <v-icon> mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon elevation="0" size="x-large" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
      <v-tooltip activator="parent" location="right">Add Quote</v-tooltip>
    </v-btn>
    <AddQuote :dialog="dialog" @cancel="cancelQuote" @add="addQuote" />
  </div>
</template>

<script>
import AddQuote from "@/components/Post/AddQuote";
import { mapActions } from "vuex";

export default {
  name: "Navigation-Menu",
  components: { AddQuote },

  data: () => ({
    search: null,
    searchInterval: null,
    isSearch: false,
    dialog: false,
  }),
  methods: {
    ...mapActions(["ADD_QUOTE", "FETCH_QUOTE"]),
    addQuote(val) {
      this.dialog = true;
      this.ADD_QUOTE(val);
    },
    cancelQuote(val) {
      this.dialog = val;
    },
    filter(val) {
      if (this.searchInterval) clearTimeout(this.searchInterval);
      this.searchInterval = setTimeout(() => {
        this.FETCH_QUOTE(val.target.value);
      }, 500);
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
