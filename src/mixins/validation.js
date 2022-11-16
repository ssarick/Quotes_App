export default {
  required: [(v) => !!v || "Empty"],
  requiredList: [(v) => (!!v && v.length) || "Pick a genre!"],
  string: [(v) => /^[а-яА-ЯёЁa-zA-Z .,!?]+$/gm.test(v) || "Only Eng and Cyr"],
};
