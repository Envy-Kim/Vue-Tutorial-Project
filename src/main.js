import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
//import '@/assets/css/reset.css'
import '@/assets/css/normalize.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')