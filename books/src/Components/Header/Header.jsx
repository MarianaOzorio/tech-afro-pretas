import './Header.css';

import CardInfo from '../CardInfo/CardInfo';

function Header(user){
    return(
        <header>
            <div className='photoName'>
                <img src={user.photo} alt="foto da pessoa usuária"/>
                <h3>{user.name}</h3>
            </div>
            <div className='infoCards'>
                <CardInfo
                    number='70'
                    txt='lidos'
                />
                <CardInfo
                    number='60'
                    txt='vou ler'
                />
            </div>
        </header>
    )
};

export default Header;