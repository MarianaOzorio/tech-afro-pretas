import './Home.css';
import { Link } from 'react-router-dom';

import CardAvaliacao from '../../Components/CardAvaliacao/CardAvaliacao';
import Catalogo from '../../Components/Catalogo/Catalogo';
import Menu from '../../Components/Menu/Menu';

import cover1 from '../../Components/Livro/Images/livro-1.png';
import cover2 from '../../Components/Livro/Images/livro-2.png';

function Home() {

    return (
        <div>
            <div className='navEstanteContainer'>
                <div className='nav'>
                    <Link className='removeStyle' to="/"><h1>Estante de Livros</h1></Link>
                    <Menu />
                </div>
                <div className='minhaEstante'>
                    <h2>Minha Estante</h2>
                    <Catalogo />
                </div>
            </div>
            <h2 className='txtCenter'>Últimas Avaliações</h2>
            <div className='avaliacoesContainer'>
                <div>
                    <CardAvaliacao
                        cover={cover1}
                        title='Título da resenha 1'
                        txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    />
                </div>
                <div>
                    <CardAvaliacao
                        cover={cover2}
                        title='Título da resenha 2'
                        txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;