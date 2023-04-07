"use strict";
// Implémentation de l'interface par une classe
class Voiture {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
    rouler(distance) {
        console.log(`La voiture ${this.marque} ${this.modele} a parcouru ${distance} km.`);
    }
}
// Création d'un objet de type Voiture
const maVoiture = new Voiture("Peugeot", "208");
maVoiture.rouler(100);
