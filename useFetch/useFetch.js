import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {
    //initial state como un objeto
    const initialState = {
        data: null,
        loading: true,
        error: null
    }
    const [state, setState] = useState(initialState);

    const isMounted = useRef(true);
    useEffect(() => {
        //cambiamos estado de es montada la pag para que no siga montandola
        return () => {
            isMounted.current = false;
        }
    },[])   //render solo una vez

    useEffect(() => {
        //mostrar un loading cada que se cambia de ruta de appi
        setState({data: null, loading: true, error: null})

        //fetch para recibir promesas y/o errores
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                //si el e stado de isMounted es true, podemo llamar al setState de datos de forma segura
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data   //data recibe valor del then asi que no le asignamos nada aqui
                    })
                    console.log('se llamo al setState')
                } else {
                    console.log('No se llamo al setState')
                }
                               
            }
        );

    }, [url])

    return state;
}
