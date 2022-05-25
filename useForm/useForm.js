import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [val, setVal] = useState(initialState)

    //para limpiar campo cada que se entra al useForm
    const reset = () => {
        setVal(initialState)
    }

    const handleInputChange = ({ target }) => {
        setVal({
            ...val,
            [target.name]: target.value  //
        })
    }
    return [val, handleInputChange, reset];
}
