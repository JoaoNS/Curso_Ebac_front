"use strict";

function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}
var aluno1 = new aluno("joao", 8);
var aluno2 = new aluno("maria", 4);
var aluno3 = new aluno("carlos", 5);
var aluno4 = new aluno("eduarda", 9);
var lista = [aluno1, aluno2, aluno3, aluno4];
for (var i = 0; i < lista.length; i++) {
  if (lista[i].nota >= 6) {
    console.log(lista[i]);
  }
}