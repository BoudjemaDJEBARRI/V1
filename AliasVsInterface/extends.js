"use strict";
const monChien = {
    nom: "Rex",
    age: 3,
    son: "Woof",
    race: "Labrador",
    aboyer() {
        console.log(this.son);
    },
};
const monChat = {
    nom: "Miaou",
    age: 2,
    son: "Miaou",
    race: "Siamois",
    miauler() {
        console.log(this.son);
    },
};
monChien.aboyer(); // affiche "Woof"
monChat.miauler(); // affiche "Miaou"
