"use strict";
// interface Animal {
//       nom: string;
//       crier(): void;
// }
// class AnimalImpl implements Animal {
//       private _nom: string;
//       constructor(nom: string) {
//             this._nom = nom;
//       }
//       get nom(): string {
//             return this._nom;
//       }
//       crier(): void {
//             console.log(`${this.nom} crie : "Je suis un animal !"`);
//       }
// }
// class Chat extends AnimalImpl {
//       constructor(nom: string) {
//             super(nom);
//       }
//       crier(): void {
//             console.log(`${this.nom} miaule : "Miaou !"`);
//       }
// }
// class Chien extends AnimalImpl {
//       constructor(nom: string) {
//             super(nom);
//       }
//       crier(): void {
//             console.log(`${this.nom} aboie : "Wouaf !"`);
//       }
// }
// const animaux: Animal[] = [new Chat("Félix"), new Chien("Médor")];
// animaux.forEach(animal => {
//       animal.crier();
// });
function bonjour(name) {
    console.log(`Bonjour, ${name} !`);
}
bonjour("Votre nom");
