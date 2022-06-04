import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ExampleTable from './components/Table/ExampleTable';

import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";
import "vue-easytable/libs/font/iconfont.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { VeLocale } from "vue-easytable";
import ptBR from "vue-easytable/libs/locale/lang/pt-BR";
import { VeIcon } from "vue-easytable";
// import { Papa } from "../node_modules/papaparse/papaparse.js";

Vue.use(VeIcon);
VeLocale.use(ptBR);
Vue.use(VueEasytable);
Vue.use(ElementUI);
// Vue.use(Papa);

Vue.config.productionTip = false;


new Vue({
  store,
  router,
  ExampleTable,
  render: (h) => h(App)
}).$mount('#app')