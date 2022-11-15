<template>
  <v-card
    width="100%"
    variant="outlined"
    class="rounded-xl d-flex flex-column justify-space-between"
  >
    <v-card-text class="pa-6">
      <div class="text-h6 d-flex justify-space-between align-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179z"
            fill="currentColor"
          ></path>
        </svg>
        <p class="font-weight-regular" style="font-size: 12px">
          {{ quote.dateUpdate != null ? quote.dateUpdate : quote.dateCreate }}
        </p>
      </div>
      <p class="text-h6 mt-2 text--primary">
        {{ quote.text }}
      </p>
      <div class="text-h6 text--primary mt-5 font-weight-light">
        ― {{ quote.author }}
      </div>
    </v-card-text>
    <v-card-actions class="px-6 pb-6 justify-space-between">
      <div class="d-flex">
        <v-btn
          v-for="(g, index) in quote.genre"
          :key="index + quote.genre"
          size="small"
          class="text--primary d-flex"
          variant="plain"
          >#{{ g }}</v-btn
        >
      </div>
      <div>
        <v-btn size="small" icon color="error">
          <v-icon> mdi-heart </v-icon>
          <v-tooltip activator="parent" location="top">Like</v-tooltip>
        </v-btn>
        <v-btn @click="this.editQuote(quote)" size="small" icon color="black">
          <v-icon> mdi-pencil </v-icon>
          <v-tooltip activator="parent" location="top">Edit</v-tooltip>
        </v-btn>
        <v-btn
          @click="$emit('deleteQuote', quote.id)"
          size="small"
          icon
          color="black"
        >
          <v-icon> mdi-delete </v-icon>
          <v-tooltip activator="parent" location="top">Delete</v-tooltip>
        </v-btn>
      </div>
    </v-card-actions>
    <AddQuote
      :mode="'edit'"
      :data="quote"
      :dialog="dialog"
      @cancel="this.cancelQuote"
      @edit="this.editQuote"
    />
  </v-card>
</template>

<script>
import AddQuote from "@/components/Post/AddQuote";

export default {
  name: "Post-Index",
  components: { AddQuote },
  data: () => ({
    search: false,
    dialog: false,
  }),
  props: {
    quote: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    editQuote(val) {
      this.dialog = true;
      this.$emit("editQuote", val);
      console.log(val);
    },
    cancelQuote(val) {
      this.dialog = val;
    },
  },
};
</script>

<style scoped></style>
