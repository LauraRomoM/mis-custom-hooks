import { useState } from 'react'

export const useCounter = (initialCounter = 10) => {
	const [counter, setCounter] = useState(initialCounter);

	const increment = () => {
		setCounter(counter + 1);
	}

	const decrement = () => {
		setCounter(counter - 1);
	}

	const reset = () => {
		setCounter(initialCounter);
	}

	return {	//retornar un arreglo con la logica de nuestro contador
		counter,
		increment,
		decrement,
		reset
	};
}

/* cambio dinamico de valor de incremento o decremento 
 export const useCounter = (initialCounter=1) => {
	const [counter, setCounter] = useState(initialCounter);

	const increment = (fact=1) => {
		setCounter(counter + fact);
	}

	const decrement = (fact=1) => {
		setCounter(counter - fact);
	}

	const reset = () => {
		setCounter(initialCounter);
	}

	return {	//retornar un arreglo con la logica de nuestro contador
		counter,
		increment,
		decrement,
		reset
	};
}
*/