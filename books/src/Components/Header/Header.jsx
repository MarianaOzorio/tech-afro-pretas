import './Header.css';

import CardInfo from '../CardInfo/CardInfo';

function Header(user){
    return(
        <header>
            <div className='photoName'>
                <img src={user.photo} alt="foto da pessoa usuária"/>
                <p>{user.name}</p>
            </div>
            <div className='infoCards'>
                <CardInfo
                    number='130'
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