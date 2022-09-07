import { useState} from 'react';
import './App.css';
import Tabla from './components/Tabla';
import Clima from './components/Clima';
import Formulario from './components/Formulario';

function App() {
    const [resultado, setResultado] = useState({
        estado: '',
        nombre: ''
    });

    //const {estado, nombre} = resultado;

    //useEffect(() => {
    //  console.log(estado);
    //},[estado,nombre]);

    const consultarAPI = async() => {
    const API = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

    const respuesta = await fetch(API);
    const resultado = await respuesta.json();
    console.log(resultado);

    setResultado(resultado);
  }

  setResultado();


  return (
    <div className="App">
      <h1>Aplicacion de Pronostico</h1>
      <button onClick={consultarAPI}>Buscar...</button>
      <Tabla/>
      <Clima
        resultado={resultado}
      />
      <Formulario
      resultado={resultado}
      setResultado={setResultado}
      />
    </div>
  );
}

export default App;
