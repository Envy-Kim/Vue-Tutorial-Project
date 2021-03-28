import Main from "@/pages/main"
import About from "@/pages/about"
import Install from "@/pages/install"
import Create from "@/pages/create"
import Routing from "@/pages/routing"

const router = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/install',
        component: Install,
    },
    {
        path: '/create',
        component: Create,
    },
    {
        path: '/routing',
        component: Routing,
    },
]

export default router