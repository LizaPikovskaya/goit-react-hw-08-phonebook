// import { useState, useEffect } from 'react';
import { lazy, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/thunk';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from './Loader/Loader';
import PrivateRoute from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ToastContainer } from 'react-toastify';


const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

// <Filter value={filter} onChangeFilter={changeFilter} />;
