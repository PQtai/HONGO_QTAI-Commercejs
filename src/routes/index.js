import {Home , Search} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'
const publicRoutes = [
    {path: 'HONGO_QTAI-Commercejs/',component: Home},
    {path: 'HONGO_QTAI-Commercejs/search',component: Search , layout : SidebarLayout},
]
const privateRoutes = []

export {publicRoutes , privateRoutes};