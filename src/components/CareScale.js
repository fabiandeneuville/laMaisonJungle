import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale({scaleValue, careType}){

    const range = [1,2,3]

    const scaleType = careType === 'light' ? 
    
    <img src={sun} alt="logo sun" /> : 
    <img src={water} alt="logo water" />

    return (
        <div>
            {range.map((rangeElement) => {
                return scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            })}
        </div>
    )
}

export default CareScale;