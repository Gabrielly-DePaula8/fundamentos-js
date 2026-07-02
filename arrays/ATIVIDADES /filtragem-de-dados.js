const alunos = ["Marcos", "Aline", "Lucas", "Patricia"];
const medias = [6.5, 8.0, 5.5, 9.0];

const alunosReprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log("Alunos reprovados:", alunosReprovados); /