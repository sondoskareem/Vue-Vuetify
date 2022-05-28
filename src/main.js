import Vue from "vue";
import vuetify from './plugins/vuetify'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import './scss/main.scss'


Vue.config.productionTip = false;
// Vue.use(vuetify);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
