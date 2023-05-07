import React from "react";

const ContagemContext = React.createContext({
    contagem: 0,
    setContagemLido: () => {},

    contagemVouLer: 0,
    setContagemVouLer: () => {}
});


export default ContagemContext;