import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';


function ShoppingList(){

    const categories = plantList.reduce((acc, plant) => {
        return acc.includes(plant.category) ? acc : acc.concat(plant.category)
    }, [])

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
                        <PlantItem
                        id={plant.id}
                        name={plant.name}
                        cover={plant.cover}
                        light={plant.light}
                        water={plant.water}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;