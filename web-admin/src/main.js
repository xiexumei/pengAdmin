import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Input } from 'element-ui';
import Axios from 'axios';
import Qs from 'qs';

Vue.use(Button)
Vue.use(Input)

Axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

Vue.prototype.$qs = Qs;
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')