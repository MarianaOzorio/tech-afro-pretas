import './App.css';

import Header from './Components/Header//Header';
import Line from './Components/Line/Line';
import CardAvaliacao from './Components/CardAvaliacao/CardAvaliacao';
import Catalogo from './Components/Catalogo/Catalogo';
import Menu from './Components/Menu/Menu';

import avatar from './Components/Header/Images/avatar-2.png';
import cover1 from './Components/Livro/Images/livro-1.png';
import cover2 from './Components/Livro/Images/livro-2.png';

function App() {
  return (
    <div>
      <Header
        photo={avatar}
        name='Maria Costa'
      />
      <Line />
      <div className='navEstanteContainer'>
        <div className='nav'>
          <h1>Estante de Livros</h1>
          <Menu />
        </div>
        <div className='minhaEstante'>
          <h2>Minha Estante</h2>
          <Catalogo />
        </div>
      </div>
      <h2 className='txtCenter'>Últimas Avaliações</h2>
      <div className='avaliacoesContainer'>
        <CardAvaliacao
          cover={cover1}
          title='Título da resenha 1'
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <CardAvaliacao
          cover={cover2}
          title='Título da resenha 2'
          txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
      </div>
    </div>
  );
}

export default App;