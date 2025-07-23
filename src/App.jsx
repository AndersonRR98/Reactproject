import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // importaciones 
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]); // estado para al,acenar los productos 

  const addToCart = (product) => { // crea una array con los productos ya existentes mas el nuevo 
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
// barra que muestra numeor de los articulos agregados
// rutas para el home, los productos y  el carrito 
  return (
    <>
      <Navbar cartCount={cart.length} /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route 
          path="/productos" 
          element={<Products addToCart={addToCart} />} 
        />
        <Route 
          path="/carrito" 
          element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </>
  );
};

export default App;