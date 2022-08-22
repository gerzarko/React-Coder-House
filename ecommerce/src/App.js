import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/navegacion/navbar';
import Inicio from './components/pages/inicio';
import Items from './components/pages/items';
import Nosotros from './components/pages/nosotros';



function App() {
  return (
  <div className='App'>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/src/components/pages/inicio.js' element={Inicio}></Route>
        <Route exact path='./src/components/pages/items.js' element={Items}></Route>
        <Route exact path='/src/components/pages/nosotros.js' element={Nosotros}></Route>
      </Routes>
      
    </Router>



  </div>
  );
}

export default App;
