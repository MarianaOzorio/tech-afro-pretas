import './Header.css'
import bee from '../Images/bee.png';

function Header() {
    return(
        <header>
            <img className='logo' src={bee} alt="ilustração de uma abelha"/>
            <h1>Bees Restaurante</h1>
        </header>
    )
}

export default Header;