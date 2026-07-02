const listaAlunos = ["João", "Juliana", "Caio", "Ana"];
const listaMedias = [10, 8, 7.5, 9];


function verificaPresencaENota(nomeDoAluno) {

    if (listaAlunos.includes(nomeDoAluno)) {
       
        const indice = listaAlunos.indexOf(nomeDoAluno);

        const nota = listaMedias[indice];
        return `O aluno ${nomeDoAluno} tem a nota ${nota}.`;
    } else {
        return "Aluno não encontrado na lista.";
    }
}

console.log(verificaPresencaENota("Juliana")); 
console.log(verificaPresencaENota("Marcos")); 