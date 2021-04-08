import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import store from './store/index'

// bootstrap 적용
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'

// To use Vuex : Vuex는 ES2015문법을 사용한다.
import 'es6-promise/auto'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')