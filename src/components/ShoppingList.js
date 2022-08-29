import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList({cart, updateCart}){

    const categories = plantList.reduce((acc, plant) => {
        return acc.includes(plant.category) ? acc : acc.concat(plant.category)
    }, [])

    function addToCart(name, price){
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (

        <div>
            <ul>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => {
                    return (
                        <div key={plant.id}>
                            <PlantItem
                            id={plant.id}
                            name={plant.name}
                            cover={plant.cover}
                            light={plant.light}
                            water={plant.water}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;