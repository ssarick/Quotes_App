import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      {
        id: "id" + Math.random().toString(16).slice(2),
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
        genre: ["Humor", "Love"],
        dateCreate: new Date().toLocaleString(),
        dateUpdate: null,
      },
      {
        id: "id" + Math.random().toString(16).slice(2),
        text: "People work better when they know what the goal is and why.",
        author: "Elon Musk",
        genre: ["Business"],
        dateCreate: new Date().toLocaleString(),
        dateUpdate: null,
      },
    ],
  },
  getters: {
    GET_QUOTES: (state) => state.list,
  },
  actions: {
    ADD_QUOTE: (context, data) => {
      console.log(data);
      context.commit("ADD_QUOTE", data);
    },
    DELETE_QUOTE: (context, data) => {
      context.commit("DELETE_QUOTE", data);
    },
    EDIT_QUOTE: (context, data) => {
      console.log(data);
      context.commit("EDIT_QUOTE", data);
    },
  },
  mutations: {
    ADD_QUOTE: (state, data) => {
      const newQuote = {
        id: "id" + Math.random().toString(16).slice(2),
        text: data.text,
        author: data.author,
        genre: data.genre,
        dateCreate: new Date().toLocaleString(),
        dateUpdate: data.dateUpdate,
      };
      state.list.unshift(newQuote);
    },
    DELETE_QUOTE: (state, id) => {
      state.list.splice(state.list.map((post) => post.id).indexOf(id), 1);
    },
    EDIT_QUOTE: (state, val) => {
      state.list = state.list.map((post) =>
        post.id === val.id ? { ...val } : post
      );
    },
  },
  modules: {},
});
