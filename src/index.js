import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App.vue'



import './scss/main.scss'

Vue.use(Vuelidate)

new Vue({
    Vuelidate,
    render: h => h(App)
  }).$mount("#app");
  