const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: Valor ${numeros[i]}`);
}

console.log("---");

const notas = [8.5, 7.0, 9.0, 6.5];
let somaTotal = 0;

for (const nota of notas) {
    somaTotal += nota;
}

const media = somaTotal / notas.length;
console.log("Média das notas (usando for of):", media);

console.log("---");

const listaInversa = ["primeiro", "segundo", "terceiro", "último"];

for (let i = listaInversa.length - 1; i >= 0; i--) {
    console.log(`Índice ${i}: ${listaInversa[i]}`);
}