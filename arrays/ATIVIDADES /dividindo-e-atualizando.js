const alunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos"];

const sala1 = alunos.slice(0, alunos.length / 2); 
const sala2 = alunos.slice(alunos.length / 2);  

console.log("Sala 1:", sala1);
console.log("Sala 2:", sala2);


const listaChamada = ["João", "Ana", "Caio", "Lara"];

listaChamada.splice(1, 2, "Rodrigo");

console.log("Lista atualizada com Splice:", listaChamada);