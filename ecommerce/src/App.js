import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navegacion/navbar';
import Inicio from './components/pages/inicio/inicio';
import ContenedorProductos from './contenedorProductos';
import Contenedor from './contenedor';
function App() {
  
  
  
  
  return (
  <div className='App'>
    
    <Navbar/>
    <Inicio/>

    <Contenedor>
        <ContenedorProductos/>
    </Contenedor>
    


  </div>
  );
}

export default App;
