"use strict";
class Person {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}
const person1 = new Person("Jean", 30);
personne1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
