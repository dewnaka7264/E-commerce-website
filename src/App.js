import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Corrected import path
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/ProductList/ProductList";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/' element={<shop/>}></Route>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/mens' element={<shopCategory category='men'/>}></Route>
                <Route path='/womens' element={<shopCategory category='women'/>}></Route>
                <Route path='/accesories' element={<shopCategory category='accesories'/>}></Route>
                <Route path='/product' element={<product/>}></Route>
                <Route path=':productId' element={<product/>}></Route>
                <Route path=':productlist' element={<ProductList/>}></Route>

                <Route path='/cart' element={<Cart/>}></Route>

            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
