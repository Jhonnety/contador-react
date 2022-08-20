
import './App.css';
import burgerLogo from './imagenes/logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () =>{
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='encabezado'>
        <h1 id="tituloPrincipal">Contador de clientes</h1>
      </div>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={burgerLogo}
          alt='Logo de la empresa'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <div className='botones'>
        <Boton
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}

        />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
        </div>
        
        
      </div>

    </div>
  );
}

export default App;
