"use strict";
class AnimalClass {
    faireDuBruit() {
        console.log('Le bruit de l\'animal');
    }
}
class Chat extends AnimalClass {
    faireDuBruit() {
        console.log('Miaou');
    }
}
class Chien extends AnimalClass {
    faireDuBruit() {
        console.log('Wouf');
    }
}
const animal = new AnimalClass();
const chat1 = new Chat();
const chien1 = new Chien();
animal.faireDuBruit(); // affiche "Le bruit de l'animal"
chat1.faireDuBruit(); // affiche "Miaou"
chien1.faireDuBruit(); // affiche "Wouf"
