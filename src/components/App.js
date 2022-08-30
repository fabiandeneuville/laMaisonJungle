import Banner from './Banner';
import Cart from './Cart';
import Categories from './Categories';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div>
      <Banner/>
      <Categories/>
      <div className='lmj-layout-inner'>
        <Cart
        cart={cart}
        updateCart={updateCart}
        />
        <ShoppingList
        cart={cart}
        updateCart={updateCart}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
