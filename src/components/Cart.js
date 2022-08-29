import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, updateCart}){

    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce((acc, plantType) => {
        return acc + plantType.amount * plantType.price
    }, 0)

    return isOpen ? (
        <div className="lmj-cart">
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount}, index) => {
                return (
                    <div key={`${name}-${index}`}>
                        {name} {price} € ({amount})
                    </div>
                )
            })}
            <h3>Total : {total} €</h3>
            <button 
                onClick={() => updateCart([])}
            >
                Vider le panier
            </button>
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