import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import Cookies from 'js-cookie';

import '@/common';        // 公共方法
import '@/components';     // 公共组件

import Element from 'element-ui';
import i18n from './lang';

Vue.config.productionTip = false;

console.log(i18n,123)

Vue.mixin({
  beforeRouteLeave(to, from, next) {
    console.log('总开关',to, from)
    next();
  }
});

Vue.use(Element,{
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

new Vue({
    i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
