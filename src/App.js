import './000/App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Fiche from './pages/Fiche';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fiche" element={<Fiche />}/>
        {/* Tout les root non disponible */}
        <Route path="*" element={<Page404 />}/>
      </Routes>    
    </BrowserRouter>

  );
}

export default App;
