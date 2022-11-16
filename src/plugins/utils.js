import validation from "@/mixins/validation";

export default {
  install: function (Vue) {
    Vue.config.globalProperties.$rules = validation;
  },
};
