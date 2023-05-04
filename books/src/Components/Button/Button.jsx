import './Button.css';

function Button(button){
    return(
        <button className='primaryButton'>
            {button.icon} &nbsp; {button.txt}
        </button>
    )
};

export default Button;