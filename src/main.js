function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota
}

const aluno1 = new aluno("joao", 8);
const aluno2 = new aluno("maria", 4);
const aluno3 = new aluno("carlos", 5);
const aluno4 = new aluno("eduarda", 9);

const lista = [aluno1, aluno2, aluno3, aluno4];

for (let i = 0; i < lista.length; i++) {
    if(lista[i].nota >= 6) {
        console.log(lista[i])
    }
}