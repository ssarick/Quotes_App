<template>
  <v-dialog
    v-model="dialogMutate"
    :width="$vuetify.display.smAndUp ? '50%' : '100%'"
    activator="parent"
    persistent
  >
    <v-card v-if="mode === 'edit'" class="rounded-xl pa-8">
      <v-text-field
        v-model="form.author"
        clearable
        label="Author"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        v-model="form.text"
        clearable
        label="Text"
        variant="outlined"
      ></v-textarea>
      <v-select
        variant="outlined"
        v-model="form.genre"
        :items="genres"
        label="Genre"
        multiple
      ></v-select>
      <v-card-actions class="d-flex justify-end">
        <v-btn color="error" @click="this.cancelQuote(false)">Cancel</v-btn>
        <v-btn color="warning" @click="this.editQuote(this.form)">
          Edit Quote
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else class="rounded-xl pa-8">
      <v-text-field
        v-model="form.author"
        clearable
        label="Author"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        v-model="form.text"
        clearable
        label="Text"
        variant="outlined"
      ></v-textarea>
      <v-select
        variant="outlined"
        v-model="form.genre"
        :items="genres"
        label="Genre"
        clearable
        multiple
      ></v-select>
      <v-card-actions class="d-flex justify-end">
        <v-btn color="error" @click="this.cancelQuote(false)"> Cancel </v-btn>
        <v-btn @click="this.addQuote(this.form)"> Add Quote </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Add-Quote",
  data: () => ({
    genres: ["Humor", "Business", "Love", "Work", "Relationship"],
    form: {
      id: "id" + Math.random().toString(16).slice(2),
      text: null,
      author: null,
      genre: [],
      dateCreate: new Date().toLocaleString(),
      dateUpdate: null,
    },
    clearForm: {
      id: "id" + Math.random().toString(16).slice(2),
      text: null,
      author: null,
      genre: [],
      dateCreate: new Date().toLocaleString(),
      dateUpdate: null,
    },
  }),
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    dialogMutate: {
      get() {
        return this.dialog;
      },
    },
  },
  methods: {
    ...mapActions(["ADD_QUOTE"]),
    cancelQuote(val) {
      this.form = { ...this.clearForm };
      this.$emit("cancel", val);
    },
    addQuote(val) {
      this.$emit("add", val);
      this.form = { ...this.clearForm };
      this.$emit("cancel", false);
    },
    editQuote(val) {
      val.dateUpdate = new Date().toLocaleString();
      this.$emit("edit", val);
      this.form = { ...this.clearForm };
      this.$emit("cancel", false);
    },
  },
  mounted() {
    if (this.data) {
      this.form = { ...this.data };
    }
  },
};
</script>

<style scoped></style>
