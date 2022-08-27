import { plantList } from '../datas/plantList'


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
            <ul>
                {plantList.map((plant) => {
                    return <li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
                })}
            </ul>
        </div>
    )
}

export default ShoppingList;