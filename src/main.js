import Vue from "vue";
import App from "./App.vue";
import Tooltip from "./components/Tooltip.vue";

Vue.config.productionTip = false;
Vue.component("vue-tooltip", Tooltip);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

export default Tooltip
