import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, updateCart}){

    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce((acc, plantType) => {
        return acc + plantType.amount * plantType.price
    }, 0)

    function removePlantFromCart(id){
        const filteredCart = cart.filter((plant) => plant.id !== id);
        updateCart(filteredCart)
    }

    return isOpen ? (
        <div className="lmj-cart">
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount, id}, index) => {
                return (
                    <div key={`${name}-${index}`}>
                        {name} {price} € ({amount})
                        <button className='lmj-cart-remove-item-button' onClick={() => removePlantFromCart(id)}> Retirer </button>
                    </div>
                )
            })}
            <h3>Total : {total} €</h3>
            <button className='lmj-cart-clear-button'
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
                    Ouvrir le Panier (
                        {cart.length === 1 ? `${cart.length} plante sélectionnée` : `${cart.length} plantes sélectionnées`}
                    )
                </button>
            </div>
        )

}

export default Cart;