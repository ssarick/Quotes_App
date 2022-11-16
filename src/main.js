import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import helpers from "@/plugins/utils";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).use(helpers).mount("#app");
