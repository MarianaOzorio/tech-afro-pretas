// exercício aula 4: calcular 1% do peso do cachorro para a quantidade de ração

let btn = document.getElementById("calcular");
let resultadoTxt = document.getElementById("resultado");

btn.addEventListener("click", calcularResultado);

function calcularResultado() {
    let nomePet = document.getElementById("nome").value;
    let pesoPet = document.getElementById("number").value;

    let totaRacao = parseInt(pesoPet*1)/100*1000;

    resultadoTxt.innerHTML = `${nomePet} deve comer ${totaRacao}g de ração por dia.`
};