import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchDataAPI } from './features/dataApi';
import { analytics } from './features/analytics';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import theme from './components/shared/themeSettings';

import Skeleton from './components/UI/Skeleton';
import Header from './components/Header/Header';
import ScrollToTop from './components/Extra/ScrollToTop';

const Landing = React.lazy(() => import('./pages/Landing'));
const Home = React.lazy(() => import('./pages/Home'));
const Men = React.lazy(() => import('./pages/Men'));
const Women = React.lazy(() => import('./pages/Women'));
const Jewelry = React.lazy(() => import('./pages/Jewelry'));
const Electronics = React.lazy(() => import('./pages/Electronics'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const CheckoutInfo = React.lazy(() => import('./pages/CheckoutInfo'));
const CheckoutReview = React.lazy(() => import('./pages/CheckoutReview'));
const CheckoutSuccess = React.lazy(() => import('./pages/CheckoutSuccess'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userCheckedOut = useSelector((state) => state.cart.isCheckedOut);
  const cartItemsExist = cartItems.length > 0;
  
  useEffect(() => {
    dispatch(fetchDataAPI());
    analytics.page({
      path: '/',
      title: 'Home Page',
      url: 'http://localhost:3000'
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ScrollToTop>
        <main>
          <Suspense fallback={<Skeleton />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="home" element={<Home />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="jewelry" element={<Jewelry />} />
              <Route path="electronics" element={<Electronics />} />

              {(cartItemsExist || userCheckedOut) && (
                <Route path="checkout/" exact element={<Checkout />}>
                  <Route path="review" element={<CheckoutReview />} />
                  <Route path="details" element={<CheckoutInfo />} />
                  <Route path="success" element={<CheckoutSuccess />} />
                </Route>
              )}

              <Route path="product-details/:id" exact element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
