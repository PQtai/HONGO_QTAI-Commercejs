import
React,
{
  Fragment,
  useEffect,
} from 'react'
import GlobalStyles from './assets/styles/globalStyles';
import { commerce } from './lib/commerce'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import {
  setProducts,
  setProductsFeatures,
} from './redux';


import { publicRoutes } from './routes';
import {DefaultLayout} from './components/Layout';
const App = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const { data } = await commerce.products.list();
    // dispatch((setProducts(data)));
    // const productsFeatures = data.filter(product =>{
    //   return product.sort_order >= 150;
    // })
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {publicRoutes.map((route, index) => {
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

export default App

