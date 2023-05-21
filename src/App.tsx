import React, { lazy } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Router } from './business/constants/router';
import { LayoutHeader } from '@pages/layout/header-layout';


const Home = lazy(()=>import(/* webpackChunkName:'home' */ '@pages/home'))

function App() {
  return (
    <>
      <LayoutHeader>
        <BrowserRouter>
          <Routes>
            <Route  path={Router.Home} element={<Home/>} />
            <Route   path="*" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </LayoutHeader>
    </>
    
  );
}

export default App;
