import React, { useContext, useState } from "react";
import ContagemContext from '../../Context/ContagemContext';

function BtnVouLer(button) {
    const { contagemVouLer, setContagemVouLer } = useContext(ContagemContext)
    const [ativo, setAtivo] = useState(false)

    function handleClick() {
        setContagemVouLer(contagemVouLer +1);
        setAtivo(true);
    }

    return(
        <button className='countBtn' onClick={handleClick} disabled={ativo}>
            {button.icon} &nbsp; {button.txt}
        </button>
    );
    
}

export default BtnVouLer;