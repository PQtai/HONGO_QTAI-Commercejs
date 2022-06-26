import
React,
{
  Fragment,
  useEffect
} from 'react'
import GlobalStyles from './assets/styles/globalStyles';
import { commerce } from './lib/commerce'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import {
  setCategoryProducts,
  setLoading,
  setProducts,
} from './redux';


import { publicRoutes } from './routes';
import {DefaultLayout} from './components/Layout';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await commerce.products.list();
      dispatch(setLoading(false));
      dispatch(setProducts(response && response.data));
      const categorys = await commerce.categories.list();
      dispatch(setCategoryProducts(categorys && categorys.data));
    }
    fetchData();// eslint-disable-next-line
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

