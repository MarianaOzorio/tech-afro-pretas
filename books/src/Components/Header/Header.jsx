import './Header.css';

function Header(user){
    
    return(
        <header>
            <div className='photoName'>
                <img src={user.photo} alt="foto da pessoa usuária"/>
                <h3>{user.name}</h3>
            </div>
        </header>
    )
};

export default Header;