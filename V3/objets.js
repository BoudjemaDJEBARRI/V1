"use strict";
// Déclaration d'objet avec une méthode
const calculatrice = {
    x: 0,
    y: 0,
    ajouter: function () {
        return this.x + this.y;
    },
    soustraire: function () {
        return this.x - this.y;
    }
};
// Utilisation de l'objet calculatrice
calculatrice.x = 5;
calculatrice.y = 3;
console.log(calculatrice.ajouter()); // affiche 8
console.log(calculatrice.soustraire()); // affiche 2
