
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div  className='app'>
      <BrowserRouter>
      <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </>
      </BrowserRouter>    
     
    </div>
  );
}

export default App;
