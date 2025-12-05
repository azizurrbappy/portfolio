import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <section>
      <Navbar></Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </section>
  );
};

export default MainLayout;
