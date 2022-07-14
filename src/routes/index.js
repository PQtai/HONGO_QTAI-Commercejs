import {Home , Search , Details} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'

const routes = ()=>{
    const publicRoutes = [
        {path: 'HONGO_QTAI-Commercejs/',component: Home},
        {path: 'HONGO_QTAI-Commercejs/details',component: Details},
        {path: `HONGO_QTAI-Commercejs/shop/search=:slug&post_type=:slug`,component: Search , layout : SidebarLayout},

    ]
    const privateRoutes = []
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;