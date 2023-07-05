import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
