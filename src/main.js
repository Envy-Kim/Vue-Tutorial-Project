import Vue from 'vue'
import router from './router'
import NotFound from "@/pages/error404"

const app = new Vue({
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return router[this.currentRoute] || NotFound
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
}).$mount('#app')

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})
