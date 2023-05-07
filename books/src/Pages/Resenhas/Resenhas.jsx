import './Resenhas.css';
import { Link } from 'react-router-dom';
import { AiOutlineCheck, AiOutlineClockCircle } from 'react-icons/ai';

import Menu from '../../Components/Menu/Menu';
import CardAvaliacao from '../../Components/CardAvaliacao/CardAvaliacao';
import BtnLido from '../../Components/BtnLido/BtnLido';
import BtnVouLer from '../../Components/BtnVouLer/BtnVouLer';

import cover6 from '../../Components/Livro/Images/livro-6.png';

function Resenhas() {

    return (
        <div>
            <div className='navResenhaContainer'>
                <div className='nav'>
                    <Link className='removeStyle' to="/"><h1>Estante de Livros</h1></Link>
                    <Menu />
                </div>
                <div className='minhaAvaliacao'>
                    <h2>Resenha</h2>
                    <CardAvaliacao
                        cover={cover6}
                        title='Título da resenha'
                        txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                    />
                    <div className='resenhas-btn-row'>
                        <BtnLido
                            icon={<AiOutlineCheck />}
                            txt='Marcar como lido'
                        />
                        <BtnVouLer
                            icon={<AiOutlineClockCircle />}
                            txt='Vou ler'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resenhas;