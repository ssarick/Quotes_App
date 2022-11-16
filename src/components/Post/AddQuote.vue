<template>
  <v-dialog
    v-model="dialogMutate"
    :width="$vuetify.display.smAndUp ? '50%' : '100%'"
    activator="parent"
    persistent
  >
    <v-form ref="form" v-model="isValid">
      <v-card v-if="mode === 'edit'" class="rounded-xl pa-8">
        <v-text-field
          v-model="form.author"
          label="Author"
          variant="outlined"
          :rules="$rules.required"
          clearable
          required
        ></v-text-field>
        <v-textarea
          v-model="form.text"
          label="Text"
          variant="outlined"
          :rules="$rules.required"
          required
          clearable
        ></v-textarea>
        <v-select
          variant="outlined"
          v-model="form.genre"
          :items="genres"
          label="Genre"
          :rules="$rules.requiredList"
          multiple
          clearable
          required
        ></v-select>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="error" @click="cancelQuote(false)">Cancel</v-btn>
          <v-btn color="warning" @click="editQuote(this.form)">
            Edit Quote
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else class="rounded-xl pa-8">
        <v-text-field
          v-model="form.author"
          label="Author"
          variant="outlined"
          :rules="[...$rules.required, ...$rules.string]"
          validate-on="input"
          clearable
        ></v-text-field>
        <v-textarea
          v-model="form.text"
          label="Text"
          variant="outlined"
          :rules="[...$rules.required, ...$rules.string]"
          clearable
        ></v-textarea>
        <v-select
          variant="outlined"
          v-model="form.genre"
          :items="genres"
          label="Genre"
          :rules="$rules.requiredList"
          clearable
          multiple
        ></v-select>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="error" @click="cancelQuote(false)"> Cancel </v-btn>
          <v-btn @click="addQuote(this.form)"> Add Quote </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

const emptyQuote = {
  id: "id" + Math.random().toString(16).slice(2),
  text: null,
  author: null,
  genre: [],
  dateCreate: new Date().toLocaleString(),
  dateUpdate: null,
};

export default {
  name: "Add-Quote",
  data: () => ({
    isValid: false,
    genres: ["Humor", "Business", "Love", "Work", "Relationship"],
    form: {
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
      default: "add",
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
      this.form = { ...emptyQuote };
      this.$emit("cancel", val);
    },
    async addQuote(val) {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;
      this.$emit("add", val);
      this.form = { ...emptyQuote };
      this.$emit("cancel", false);
    },
    async editQuote(val) {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;
      val.dateUpdate = new Date().toLocaleString();
      this.$emit("edit", val);
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
