import {Home , Search , Details} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'

const routes = ()=>{
    const publicRoutes = [
        {path: 'HONGO_QTAI-Commercejs/',component: Home},
        {path: 'details/id=:slug',component: Details},
        {path: `shop/search=:slug&post_type=:slug`,component: Search , layout : SidebarLayout},
    ]
    const privateRoutes = []
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;