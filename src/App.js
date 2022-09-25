import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './cart/Cart';
import Navbarshow from './components/Navbarshow';
import Showcad from './showcard/Showcad';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbarshow />
        <div className='App'>
          <div>
            <Routes>
              <Route path='/' element={<Cart />}></Route>
              <Route path='/showcart' element={<Showcad />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App