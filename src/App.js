import
React,
{
  Fragment,
  useEffect
} from 'react';
import GlobalStyles from './assets/styles/globalStyles';
import { commerce } from './lib/commerce';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setCart,
  setCategoryProducts,
  setLoading,
  setProducts,
} from './redux';


import routes from './routes';
import {DefaultLayout} from './components/Layout';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData =  () => {
      commerce.products.list({
        limit: 200,
      })
      .then((response) => {
        dispatch(setProducts(response && response.data));
        dispatch(setLoading(false));
      })
    }
    const fetchCategories =  () => {
      commerce.categories.list()
          .then((categorys) => {
            dispatch(setCategoryProducts(categorys && categorys.data));
          })
    }
    const fetchCart =  () => {
      commerce.cart.retrieve()
          .then((cart) => { 
            dispatch(setCart(cart));
          })
    }
    fetchData();
    fetchCategories();
    fetchCart();
  }, [dispatch]) 
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {routes().publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if(route.layout){
            Layout = route.layout;
          }else if(route.layout === null){
            Layout = Fragment
          }
          const Page = route.component;
          return (
          <Route 
            path={route.path} 
            key={index} 
            element={
              <Layout>
                <Page />
              </Layout>
            } 
          />
          )
        })}
      </Routes>
    </div>
  )
}

export default React.memo(App);

