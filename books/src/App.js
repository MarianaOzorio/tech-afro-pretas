import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import ContagemContext from '../src/Context/ContagemContext';

import Header from './Components/Header/Header';
import CardInfo from './Components/CardInfo/CardInfo';
import Line from './Components/Line/Line';

import Home from '../src/Pages/Home/Home';
import Desejados from './Pages/Desejados/Desejados';
import Avaliados from './Pages/Avaliados/Avaliados';
import Favoritos from './Pages/Favoritos/Favoritos';
import Resenhas from './Pages/Resenhas/Resenhas';

import avatar from '../src/Components/Header/Images/avatar-2.png';

function App() {

  const [contagemLido, setContagemLido] = useState(0);
  const [contagemVouLer, setContagemVouLer] = useState(0);

  return (
    <div>
      <ContagemContext.Provider value={{ contagemLido, setContagemLido, contagemVouLer, setContagemVouLer }}>
        <div className='headerContainer'>
          <Header
            photo={avatar}
            name='Maria Costa'
          />
          <div className='cardsInfoContainer'>
            <CardInfo
              contagem={contagemLido}
              txt='lidos'
            />
            <CardInfo
              contagem={contagemVouLer}
              txt='vou ler'
            />
          </div>
        </div>
        <Line />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/avaliados' element={<Avaliados />} />
            <Route path='/desejados' element={<Desejados />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/resenhas' element={<Resenhas />} />
          </Routes>
        </Router>
      </ContagemContext.Provider>
    </div>
  );
}

export default App;