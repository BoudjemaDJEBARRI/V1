"use strict";
// Création d'un objet  
const utilisateur = {
    nom: "Steve Wozniak",
    age: 31,
    adresse: "10 rue de la Liberté",
    saluer() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    },
};
// Appel de la méthode 
utilisateur.saluer();
// Définition d'une fonction  
function saluerUtilisateur(utilisateur) {
    console.log(`Bonjour ${utilisateur.nom} !`);
}
// Appel de la fonction  
saluerUtilisateur(utilisateur);
