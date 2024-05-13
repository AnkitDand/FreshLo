import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Products from './components/Products';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item already exists in the cartItems array
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    // If the item exists, update its quantity and total price
    const updatedCartItems = [...cartItems];
    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
      // let total =
      // updatedCartItems[existingItemIndex].totalPrice = parseFloat(updatedCartItems[existingItemIndex].price.replace('$', '')) + updatedCartItems[existingItemIndex].price
      // updatedCartItems[existingItemIndex].price =
      //   '$' + updatedCartItems[existingItemIndex].totalPrice;
      updatedCartItems[existingItemIndex].totalprice +=
        updatedCartItems[existingItemIndex].price;
      setCartItems(updatedCartItems);
    } else {
      // If the item does not exist, add it to the cartItems array
      // updatedCartItems[existingItemIndex].totalprice+=updatedCartItems[existingItemIndex].price;
      const updatedItem = {
        ...item,
        quantity: 1,
        totalprice: item.price,
        // totalPrice: parseFloat(item.price.replace('$', '')),
      };
      setCartItems([...cartItems, updatedItem]);
    }
  };

  console.log(cartItems); // For debugging, to see the updated cartItems array

  return (
    <div className="app">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Banner />
      <Features />
      <Products addToCart={addToCart} />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
