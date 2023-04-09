"use strict";
class Employee {
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
