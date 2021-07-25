import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"
import Categories from "./Categories"
import { useState } from "react"

function ShoppingList({cart, updateCart}) {

    const [activeCategory, setActiveCategory] = useState("")
    const categories = plantList.reduce((unique, item) => unique.includes(item.category) ? unique : [...unique, item.category], [])
    
    function addTodoCard(name, price) {
        const currentPlantSaved  = cart.find(plant => plant.name === name)

        if(currentPlantSaved){
            const cartFilteredCurrentPlant = cart.filter(plant => plant.name =! name)
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1}])
        }else{
            updateCart([...cart, {name, price, amount: 1}])
        }
    }
    
    return <div className='imj-shopping-list'>
        <Categories 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
        />
        <ul className="imj-plant-list">
            {plantList.map(({name, id, cover, water, light, price, category}) => 
            (!activeCategory || activeCategory === category) ? 
                <div key={id}>
                    <PlantItem
                        name={name}
                        cover={cover}
                        water={water}
                        light={light}
                        price={price}
                    />
                    <button onClick={() => addTodoCard(name, price)}>Ajouter</button>
                </div> : null
            )}
        </ul>
    </div>
}

export default ShoppingList