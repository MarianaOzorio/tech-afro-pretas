import React, { useState } from "react";
import './Favoritos.css';

function Favoritos(){

    const [classe, setClasse] = useState('light');
    const [titulo, setTitulo] = useState('Hello');
    const [favorito, setFavorito] = useState(0);

    function handleClickDarkMode(){
        if (classe === "dark")
            setClasse("light")
        else
            setClasse("dark")  
    };

    function handleChangeTitle(){
        if (titulo === "Hello")
            setTitulo("Favoritos")
        else
            setTitulo("Hello")  
    };

    function handleAdFav(){
        setFavorito(favorito+1)  
    };

    function handleRemoveFav(){
        setFavorito(favorito-1)  
    };

    return(
        <div className={classe}>
            <h2>{titulo}</h2>
            <button onClick={handleClickDarkMode}>Mudar fundo</button>
            <button onClick={handleChangeTitle}>Mudar título</button>
            <p> Tenho {favorito} livros favoritos</p>
            <button onClick={handleAdFav}>Adicionar favorito</button>
            <button onClick={handleRemoveFav}>Remover favorito</button>
        </div>
    )
}

export default Favoritos;