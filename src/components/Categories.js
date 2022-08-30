import '../styles/Categories.css'

function Categories({categories, activeCategory, setActiveCategory}){

    return (
        <div className="lmj-categories">
            <label htmlFor="select">Choisissez une catégorie : </label>
            <select name="select" id="select"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value="">---</option>
                {categories.map((category, index) => {
                    return (
                        <option key={`${category} - ${index}`} value={category}>{category}</option>
                    )
                })}
            </select>
            <button className='lmj-categories-clear-button' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories;