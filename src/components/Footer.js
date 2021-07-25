import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	const isInputError = inputValue.includes("@")

	const handleInput = (e) => setInputValue(e.target.value)	
	const alertError = () => !isInputError && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")

	return (
		<footer className='imj-footer'>
			<div className='imj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='imj-footer-elem'>Laissez-nous votre mail :</div>
			<input type="text" placeholder="Etrez votre email" value={inputValue} onChange={handleInput} onBlur={alertError}/>
		</footer>
	)
}

export default Footer