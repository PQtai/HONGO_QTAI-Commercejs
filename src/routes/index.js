import {Home , Search} from '../pages'
import SidebarLayout from '../components/Layout/SidebarLayout'

const routes = ()=>{
    const publicRoutes = [
        {path: 'HONGO_QTAI-Commercejs/',component: Home},
        {path: `HONGO_QTAI-Commercejs/search`,component: Search , layout : SidebarLayout},
    ]
    const privateRoutes = []
    return {
        publicRoutes,
        privateRoutes,
    }
}

export default routes;