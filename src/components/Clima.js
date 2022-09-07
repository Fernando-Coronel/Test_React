import React from 'react'

const Clima = ({resultado}) => {
    
    const {name, cityid} = resultado;

    return ( 
        <div>
          <h1>El nombre de la ciudad es: {name}</h1>
          <p>El id de la ciudad es: {cityid}</p>  
        </div>
     );
}
 
export default Clima;