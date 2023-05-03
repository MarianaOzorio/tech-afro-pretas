import './Menu.css';

import Button from '../Button/Button';

import { AiOutlineHeart, AiOutlineGift, AiOutlineStar, AiOutlineRead } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className='menu'>
            <Link className='removeStyle' to="/Favoritos">
                <Button
                icon={ <AiOutlineHeart /> }
                txt='Favoritos'
                />
            </Link>
            <Link className='removeStyle' to="/Desejados">
                <Button
                icon={ <AiOutlineGift /> }
                txt='Desejados'
                />
            </Link>
            <Link className='removeStyle' to="/Avaliados">
                <Button
                icon={ <AiOutlineStar /> }
                txt='Avaliados'
                />
            </Link>
            <Link className='removeStyle' to="/Resenhas">
                <Button
                icon={ <AiOutlineRead /> }
                txt='Resenhas'
                />
            </Link>
        </div>
    )
};

export default Menu;