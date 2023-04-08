"use strict";
// Implémentation de l'interface IPersonne dans la classe Personne
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}
// Implémentation de l'interface IEmploye dans la classe Employe en utilisant l'héritage
class Employe extends Personne {
    constructor(nom, age, poste) {
        super(nom, age); // appel du constructeur de la classe parente avec super()
        this.poste = poste;
    }
    travailler() {
        console.log(`Je travaille comme ${this.poste}.`);
    }
}
// Utilisation de la classe Employe implémentant deux interfaces
const employe1 = new Employe("Jean", 30, "Ingénieur");
employe1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
employe1.travailler(); // affiche "Je travaille comme Ingénieur."
