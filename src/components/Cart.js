import '../styles/Cart.css'

function Cart(){

    const monsteraPrice = 8;
    const lilyPrice = 10;
    const flowersPrice = 15;

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice} €</li>
                <li>Lierre : {lilyPrice} €</li>
                <li>Bouquet de fleurs : {flowersPrice} €</li>
            </ul>
            <p>Total : {monsteraPrice + lilyPrice + flowersPrice} €</p>
        </div>
        )

}

export default Cart;