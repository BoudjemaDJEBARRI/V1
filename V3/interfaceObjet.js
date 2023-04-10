"use strict";
const personne5 = {
    nom: "Elon",
    age: 30,
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    },
    saluer() {
        console.log(`Bonjour ${this.nom} !`);
    }
};
personne5.sePresenter(); // affiche "Je m'appelle Elon et j'ai 30 ans."
personne5.saluer(); // affiche "Bonjour Elon!"
