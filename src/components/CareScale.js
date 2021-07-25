import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({careType, scaleValue}) {
    const range = [1, 2, 3]
	const scaleType = careType === 'light' ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />
    const scaleMessage = careType ==="light" ? "de lumiere" : "d'arrosage"
    const alertMessage = () => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${scaleMessage}`)

    return <div onClick={alertMessage}>
        {range.map((rangeElem) => 
            (scaleValue >= rangeElem) ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
    </div>
}

export default CareScale