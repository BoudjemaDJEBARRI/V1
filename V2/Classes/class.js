"use strict";
//Création de classe 
class Animal {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    parler() {
        console.log(`${this.nom} miaule`);
    }
}
// Instanciation
const chat = new Animal('Minou', 2);
chat.parler(); // affiche "Minou miaule"
