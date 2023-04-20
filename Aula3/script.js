let numA = 20;
let numB = 30;
let numC = 40;

let resultado = numA > numB ? "é maior" : "é menor"
console.log(resultado);

if (numA > numB && numA > numC){
    console.log(numA + " é maior")
} else if (numB > numA && numB > numC) {
    console.log(numB + " é menor")
} else {
    console.log(numC + " é o maior")
};

for(let i = 0; i <= 10; i++){
    console.log(i)
};

for(let j = 0; j <= 20; j++){
    if(j%2 == 0){
        console.log(j)
    }  
};