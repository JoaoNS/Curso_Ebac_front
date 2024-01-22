function animal(familia, especie) {
    this.familia = familia;
    this.especie = especie;
}

function carnivoro(familia, especie, porteDaPresas, principalPresa) {
    this.porteDaPresas = porteDaPresas;
    this.principalPresa = principalPresa;

    animal.call(familia, especie)
}

function herbivoro(familia, especie, alimentacao, principalpredador) {
    this.alimentacao = alimentacao;
    this.principalpredador = principalpredador;

    animal.call(familia, especie)
}

const gato = new carnivoro("felidae"," Felis silvestris", "pequeno", "Roedores");
const loboCinzento = new carnivoro("canidae"," Canis lupus", "medio", "veados e alçes");
const coelhoEuropeu = new herbivoro("Leporidae", "Oryctolagus cuniculus", "gramíneas", "Raposas")
