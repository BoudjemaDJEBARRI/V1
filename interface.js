"use strict";
// Création d'un objet qui implémente l'interface Personne
const personne = {
    nom: "Steve Jobs",
    age: 30,
    adresse: "10 rue de la Liberté",
    saluer() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    },
};
// Appel de la méthode "saluer" de l'objet "personne"
personne.saluer(); // affiche "Bonjour, je m'appelle Steve Jobs et j'ai 30 ans."
// Définition d'une fonction qui prend en paramètre un objet de type Personne
function saluerPersonne(personne) {
    console.log(`Bonjour ${personne.nom} !`);
}
// Appel de la fonction "saluerPersonne" avec l'objet "personne" comme argument
saluerPersonne(personne); // Bonjour Steve Jobs !
