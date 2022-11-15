<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      sm="6"
      class="d-flex align-stretch"
      v-for="(quote, index) in GET_QUOTES"
      :key="'list' + index + quote.author"
    >
      <PostIndex
        :quote="quote"
        @deleteQuote="this.deleteQuote"
        @editQuote="this.editQuote"
      />
    </v-col>
  </v-row>
</template>

<script>
import PostIndex from "@/components/Post";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Main-Page",
  components: { PostIndex },
  computed: {
    ...mapGetters(["GET_QUOTES"]),
  },
  methods: {
    ...mapActions(["DELETE_QUOTE", "EDIT_QUOTE"]),
    deleteQuote(val) {
      this.DELETE_QUOTE(val);
    },
    editQuote(val) {
      this.EDIT_QUOTE(val);
    },
  },
};
</script>

<style scoped></style>
