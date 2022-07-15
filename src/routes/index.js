import {Home , Search , Detail} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'

const routes = ()=>{
    const publicRoutes = [
        {path: 'HONGO_QTAI-Commercejs/',component: Home},
        {path: 'detail/id=:slug',component: Detail},
        {path: `shop/search=:slug&post_type=:slug`,component: Search , layout : SidebarLayout},
    ]
    const privateRoutes = []
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;