import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({id, name, cover, light, water, price}){
    return (
        <li key={id} className="lmj-plant-item">
            <span className='lmj-plant-item-price'>{price} €</span>
            <img className='lmj-plant-item-cover' src={cover} alt="plante monstera" />
            {name}
            <div>
                <CareScale careType='light' scaleValue={light}/>
                <CareScale careType='water' scaleValue={water}/>
            </div>
        </li>
    )
}

export default PlantItem;