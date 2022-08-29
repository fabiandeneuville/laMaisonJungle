import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

function ShoppingList({cart, updateCart}){

    // const categories = plantList.reduce((acc, plant) => {
    //     return acc.includes(plant.category) ? acc : acc.concat(plant.category)
    // }, [])

    function addToCart(name, price, id){
        const currentPlantAdded = cart.find((plant) => plant.id === id);
        if(currentPlantAdded){
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.id !== id);
            updateCart([...cartFilteredCurrentPlant, {name, price, id, amount: currentPlantAdded.amount + 1}])
        } else {
            updateCart([...cart, {name, price, id, amount: 1}])
        }
    }

    return (

        <div>
            {/* <ul>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ul> */}
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => {
                    return (
                        <div className='lmj-plant-list-item' key={plant.id}>
                            <PlantItem
                            id={plant.id}
                            name={plant.name}
                            cover={plant.cover}
                            light={plant.light}
                            water={plant.water}
                            />
                            <button className='lmj-plant-list-item-button' onClick={() => addToCart(plant.name, plant.price, plant.id)}>Ajouter</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;