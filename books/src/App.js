import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/Pages/Home/Home';
import Desejados from './Pages/Desejados/Desejados';
import Avaliados from './Pages/Avaliados/Avaliados';
import Favoritos from './Pages/Favoritos/Favoritos';
import Resenhas from './Pages/Resenhas/Resenhas';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/avaliados' element={<Avaliados />} />
          <Route path='/desejados' element={<Desejados />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/resenhas' element={<Resenhas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;