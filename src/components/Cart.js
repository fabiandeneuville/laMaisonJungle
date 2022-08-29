import '../styles/Cart.css';
import { useState } from 'react';

function Cart(){

    const monsteraPrice = 8;

    const [cart, updateCart] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="lmj-cart">
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice} €
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart} €</h3>
        </div>
        ) : (
            <div className='lmj-cart-closed'>
                <button 
                    onClick={() => setIsOpen(true)}
                    className='lmj-cart-toggle-button'
                >
                    Ouvrir le Panier
                </button>
            </div>
        )

}

export default Cart;