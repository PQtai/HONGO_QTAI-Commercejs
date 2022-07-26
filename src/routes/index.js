import {Home , Search , Details, Cart , Checkout} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'

const routes = ()=>{
    const publicRoutes = [
        {path: 'HONGO_QTAI-Commercejs/',component: Home},
        {path: 'details/id=:slug',component: Details},
        {path: `shop/search=:slug&post_type=:slug`,component: Search , layout : SidebarLayout},
        {path: 'cart/',component: Cart},
        {path: 'checkout/',component: Checkout},
    ]
    const privateRoutes = []
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;