import "../styles/Categories.css"

function Categories({categories, activeCategory, setActiveCategory}) {

    return <div className='imj-categories'>
        <select className='imj-categories-select' value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
            <option value=''>---</option>
            {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
        <input type="submit" value="Réinitialiser" onClick={() => setActiveCategory("")} />
    </div>
}

export default Categories