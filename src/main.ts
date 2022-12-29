import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n2 from "./plugins/vue-i18n";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(i18n2);
app.mount("#app");
