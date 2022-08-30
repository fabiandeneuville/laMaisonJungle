import { plantList } from "../datas/plantList";
import '../styles/Categories.css'

function Categories(){

    const categories = plantList.reduce((acc, plant) => {
        return acc.includes(plant.category) ? acc : acc.concat(plant.category)
    }, [])

    return (
        <div className="lmj-categories">
            <label htmlFor="select">Choisissez une catégorie : </label>
            <select name="select" id="select">
                <option value="">---</option>
                {categories.map((category, index) => {
                    return (
                        <option key={`${category} - ${index}`} value="category">{category}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Categories;