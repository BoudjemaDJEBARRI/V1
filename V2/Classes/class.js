"use strict";
class Animal {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    parler() {
        console.log(`${this.nom} parle`);
    }
}
const chat = new Animal('Minou', 2);
chat.parler(); // affiche "Minou parle"
