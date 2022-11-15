<template>
  <div class="d-flex align-end align-center w-100 justify-end">
    <Transition name="slide-fade">
      <v-text-field
        v-if="search"
        clearable
        label="Search"
        hide-details
        variant="outlined"
      ></v-text-field>
    </Transition>
    <v-btn icon size="x-large" @click="search = !search">
      <v-icon> mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon size="x-large" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
      <v-tooltip activator="parent" location="right">Add Quote</v-tooltip>
    </v-btn>
    <AddQuote
      :mode="'add'"
      :dialog="dialog"
      @cancel="this.cancelQuote"
      @add="this.addQuote"
    />
  </div>
</template>

<script>
import AddQuote from "@/components/Post/AddQuote";
import { mapActions } from "vuex";

export default {
  name: "Navigation-Menu",
  components: { AddQuote },

  data: () => ({
    search: false,
    dialog: false,
  }),
  methods: {
    ...mapActions(["ADD_QUOTE"]),
    addQuote(val) {
      console.log(val);
      this.ADD_QUOTE(val);
    },
    cancelQuote(val) {
      this.dialog = val;
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
