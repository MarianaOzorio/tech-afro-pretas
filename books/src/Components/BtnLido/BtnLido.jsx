import React, { useContext, useState } from "react";
import ContagemContext from '../../Context/ContagemContext';

function BtnLido(button) {
    const { contagemLido, setContagemLido } = useContext(ContagemContext)
    const [ativo, setAtivo] = useState(false)

    function handleClick() {
        setContagemLido(contagemLido + 1);
        setAtivo(true);          
    }

    return(
        <button className='countBtn' onClick={handleClick} disabled={ativo}>
            {button.icon} &nbsp; {button.txt}
        </button>
    );
    
}

export default BtnLido;