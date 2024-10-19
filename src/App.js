
import React, { Component, Fragment, useEffect, useState } from 'react';
import './css/App.css';
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import HomePage from './container/Home/HomePage';
import ShopPage from './container/Shop/ShopPage';
import DetailProductPage from './container/DetailProduct/DetailProductPage';
import ShopCartPage from './container/ShopCart/ShopCartPage';


import HomePageAdmin from './container/System/HomePageAdmin';
import { path } from '../src/utils/constant'
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Redirect } from 'react-router';
import VerifyEmail from './container/System/Email/VerifyEmail';
import LoginWebPage from './container/Login/LoginWebPage';
import UserHomePage from './container/User/UseHomePage';
import CustomScrollbars from './component/input/CustomScrollbars';
import VoucherHomePage from './container/Voucher/VoucherHomePage';
import TopMenu from './container/Header/TopMenu';


function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Header />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <ShopPage />
            <Footer />
          </Route>
          <Route path="/detail-product/:id">
            <Header />
            <DetailProductPage />
            <Footer />
          </Route>
          <Route path="/admin/" render={() => {
            if (JSON.parse(localStorage.getItem("userData")) && (JSON.parse(localStorage.getItem("userData")).roleId === "R1" || JSON.parse(localStorage.getItem("userData")).roleId === "R4")) {
              return <HomePageAdmin />
            } else return <Redirect to={"/login"} />

          }}>
          </Route>
          <Route path="/user/" render={() => {
            return JSON.parse(localStorage.getItem("userData")) && JSON.parse(localStorage.getItem("userData")) ? <div>
              <Header />
              <UserHomePage />
              <Footer />
            </div> : <Redirect to={"/login"} />
          }}>
          </Route>
          <Route path="/shopcart">
            <Header />
            <ShopCartPage />
            <Footer />
          </Route>



          <Route path="/login">
            <Header />
            <LoginWebPage />
            <Footer />
          </Route>
          <Route path="/voucher">
            <Header />
            <VoucherHomePage />
            <Footer />
          </Route>


          <Route path="/about">
            <Header />

            <Footer />
          </Route>
          
          <Route path="/verify-email">
            <Header />
            <VerifyEmail />
            <Footer />
          </Route>
         
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
