import './Menu.css';

import Button from '../Button/Button';

import { AiOutlineHeart, AiOutlineGift, AiOutlineStar, AiOutlineRead } from 'react-icons/ai';

function Menu(){
    return(
        <div className='menu'>
            <Button
                icon={ <AiOutlineHeart /> }
                txt='Favoritos'
            /> 
            <Button
                icon={ <AiOutlineGift /> }
                txt='Desejados'
            /> 
            <Button
                icon={ <AiOutlineStar /> }
                txt='Avaliados'
            /> 
            <Button
                icon={ <AiOutlineRead /> }
                txt='Resenhas'
            />    
        </div>
    )
};

export default Menu;