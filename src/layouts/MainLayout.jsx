import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';
import ScrollWrapper from '../components/ScrollWrapper';

const MainLayout = () => {
  return (
    <ScrollWrapper>
      <section className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <section className="flex-1">
          <Outlet></Outlet>
        </section>
        <Footer></Footer>
      </section>
    </ScrollWrapper>
  );
};

export default MainLayout;
