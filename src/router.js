import Main from "@/pages/Main"
import Install from "@/pages/InstallPage"
import Route from "@/pages/RoutePage"
import Custom from "@/pages/CustomPage"
import Dynamic from "@/pages/DynamicPage"

const router = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/dynamic',
        component: Dynamic,
    },
    {
        path: '/install',
        component: Install,
    },
    {
        path: '/Custom',
        component: Custom,
    },
    {
        path: '/route',
        component: Route,
    },
]

export default router