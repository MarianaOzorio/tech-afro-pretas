let btn = document.getElementById("calcular");
let resultadoTxt = document.getElementById("resultado");

btn.addEventListener("click", calcularResultado);

function calcularResultado() {
    resultadoTxt.innerHTML = "Aqui vai aparecer o resultado"
};