import './Header.css';
import icon from './Images/clipboard-svgrepo-com.svg';

function Header(){
    return(
        <header>
            <img className='headerIcon' src={icon} alt="ícone de uma prancheta"/>
            <h1>Meu Feed</h1>
        </header>
    )
};

export default Header;