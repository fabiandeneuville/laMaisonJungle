import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';


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
                    return (<li key={plant.id} className='lmj-plant-item'>{plant.name}
                    
                            {plant.isSpecialOffer ? <div className='lmj-sales'>Soldes</div> : null}
                    
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;