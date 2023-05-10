
import Home from "./Home"
import './App.css';
import Header from './Header';
import Checkout from "./Checkout";
import Login from "./Login"
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import { Fragment, useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51HSmEDJT4OPZngFujJVMmdHMWtRdzGiZkQ8oCAuuiivioKbBh9nQMiM2UFalTNsgHneIewWZFf08HjbuxJiHVTH00kAVx6D4P');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is logged >>>", authUser);

      if(authUser){
        //the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  },[])
  return (
    <div className="App">
    <BrowserRouter>

     <Routes>
        <Route path="/" element={
        <Fragment>
          <Header />
          <Home/>
        </Fragment>} />
        <Route path="/login" element={<Login />}  />
        <Route path="/checkout" element={
        <Fragment>
          <Header />
          <Checkout />
        </Fragment>} />
        <Route path="/payment" element={
        <Fragment>
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Fragment>} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
