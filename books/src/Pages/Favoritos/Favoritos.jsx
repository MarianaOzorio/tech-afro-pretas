import React, { useState, useEffect } from "react";
import './Favoritos.css';

function Favoritos(props){

    const [classe, setClasse] = useState("");
    const [titulo, setTitulo] = useState('Hello');
    const [favorito, setFavorito] = useState(0);

    useEffect(() => {
        if(props.contagem > 0)
            setClasse("destaque")
    }, [props.contagem])

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
            <h1>Exercício</h1>
            <h2>{titulo}</h2>
            <button>Mudar fundo</button>
            <button onClick={handleChangeTitle}>Mudar título</button>
            <p> Tenho {favorito} livros favoritos</p>
            <button onClick={handleAdFav}>Adicionar favorito</button>
            <button onClick={handleRemoveFav}>Remover favorito</button>
            <span>{props.contagem}</span>
        </div>
    )
}

export default Favoritos;