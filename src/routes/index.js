import {Home , Search} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'
const publicRoutes = [
    {path: '/',component: Home},
    {path: '/search',component: Search , layout : SidebarLayout},
]
const privateRoutes = []

export {publicRoutes , privateRoutes};