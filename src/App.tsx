import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Router } from './business/constants/router';

const Home = lazy(()=>import(/* webpackChunkName:'home' */ '@pages/home'))

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path={Router.Home} element={<Home/>} />
    <Route   path="*" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
