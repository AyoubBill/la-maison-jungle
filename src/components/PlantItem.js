import CareScale from "./CareScale"
import "../styles/PlantItem.css"

function PlantItem({name, id, cover, water, light, price}) {
    
    const handleClick = () => alert(`Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`)

    return <li key={id} className='imj-plant-item' onClick={handleClick}>
        <span className='imj-plant-item-price'>{price}$</span>
        <img src={cover} alt={`${name} cover`} className='imj-plant-item-cover'/>
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
}

export default PlantItem

