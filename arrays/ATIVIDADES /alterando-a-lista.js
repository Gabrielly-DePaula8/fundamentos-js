const notasProfessor = [10, 6, 8];

notasProfessor.push(7);
console.log("Após o push:", notasProfessor); // [10, 6, 8, 7]

notasProfessor.pop();
console.log("Após o pop:", notasProfessor); 

const soma = notasProfessor[0] + notasProfessor[1] + notasProfessor[2];
const media = soma / notasProfessor.length;

console.log("Média final:", media);