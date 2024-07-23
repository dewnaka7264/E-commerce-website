import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Corrected import path
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/ProductList/ProductList";
import ShopCategory from "./Components/ShopCategory";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import LoginSignup from "./Components/LoginSignup";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path='/' element={<Shop/>}></Route>

                    <Route path='/men' element={<ShopCategory category='men'/>}></Route>
                    <Route path='/women' element={<ShopCategory category='women'/>}></Route>
                    <Route path='/accessories' element={<ShopCategory category='accessories'/>}></Route>
                    <Route path='/Product' element={<Product/>}></Route>
                    <Route path=':productId' element={<Product/>}></Route>
                    <Route path=':productlist' element={<ProductList/>}></Route>

                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/login' element={<LoginSignup/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );

}

export default App;
