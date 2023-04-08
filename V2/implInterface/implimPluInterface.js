"use strict";
class Employe {
    constructor(nom, age, poste, salaire) {
        this.nom = nom;
        this.age = age;
        this.poste = poste;
        this.salaire = salaire;
    }
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
    travailler() {
        console.log(`Je suis ${this.poste} et je gagne ${this.salaire}€.`);
    }
}
const employe1 = new Employe("Jean", 30, "Ingénieur", 5000);
employe1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
employe1.travailler(); // affiche "Je suis Ingénieur et je gagne 5000€."
