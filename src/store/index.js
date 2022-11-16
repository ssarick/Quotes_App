import { createStore } from "vuex";
import { dataCreator } from "@/mixins/helpers";

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
    filteredList: [],
  },
  getters: {
    GET_QUOTES: (state) => state.filteredList,
  },
  actions: {
    ADD_QUOTE: (context, data) => {
      context.commit("ADD_QUOTE", data);
    },
    DELETE_QUOTE: (context, data) => {
      context.commit("DELETE_QUOTE", data);
    },
    EDIT_QUOTE: (context, data) => {
      context.commit("EDIT_QUOTE", data);
    },
    FETCH_QUOTE: (context, search) => {
      let list;
      if (search) {
        list = context.state.list.filter(({ author, text }) => {
          return (
            author.toLowerCase().includes(search.toLowerCase()) ||
            text.toLowerCase().includes(search.toLowerCase())
          );
        });
      } else list = context.state.list;
      context.commit("FETCH_QUOTE", list);
    },
  },
  mutations: {
    ADD_QUOTE: (state, data) => {
      state.list.unshift(dataCreator(data));
    },
    DELETE_QUOTE: (state, id) => {
      state.list.splice(
        state.list.findIndex((post) => post.id === id),
        1
      );
    },
    EDIT_QUOTE: (state, val) => {
      state.list = state.list.map((post) =>
        post.id === val.id ? { ...val } : post
      );
    },
    FETCH_QUOTE: (state, search) => {
      state.filteredList = search;
    },
  },
});
