import './App.css';

import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Panqueca from './Components/Images/gallery-img-2.jpeg';
import Pizza from './Components/Images/gallery-img-3.jpeg';
import Carne from './Components/Images/gallery-img-6.jpeg';

function App() {
  return (
    <div>
      <Header />
      <div className='cards-container'>
        <Card 
          imagem={Panqueca}
          nome='Panqueca'
          descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Card 
          imagem={Pizza}
          nome='Pizza'
          descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Card 
          imagem={Carne}
          nome='Carne'
          descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>
    </div>
  );
}

export default App;