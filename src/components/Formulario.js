import React, { useState } from 'react';

const Formulario = ({resultado, setResultado}) => {

    const [error, setError] = useState(false);

    const {estado, nombre} = resultado;


    //Funcion para colocar elementos en el state

    const handleChange = e => {
        //Actualizar el state
        setResultado({
            ...resultado,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(estado.trim() === '' || nombre.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

}

    return ( 
        <form
        onSubmit={handleSubmit}
        >
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <h1>Formulario</h1>
            <div>
                <label htmlFor="name">Ciudad: </label>
                <input 
                type="text" 
                name="name"
                id="cityid"
                
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="state">Estado: </label>
                <select 
                name="state" 
                id="stateabbr"
                onChange={handleChange}
                >
                    <option value="">Seleccione un estado</option>
                    <option value="AGU">Aguascalientes</option>
                    <option value="BCN">Baja california</option>
                    <option value="CHH">Chihuahua</option>
                    <option value="CAM">Campeche</option>
                    <option value="COA">Coahuila</option>
                </select>
            </div>
            <div>
                <input 
                type="submit"
                value="Buscar..."
                />
            </div>
        </form>
     );
}
 
export default Formulario;