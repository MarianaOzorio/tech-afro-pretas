import './Button.css';

function Button(button){
    return(
        <button>
            {button.icon} &nbsp; {button.txt}
        </button>
    )
};

export default Button;