"use strict";
// interface Personne {
//       nom: string;
//       age: number;
//       sePresenter(): void;
// }
// interface Travailleur {
//       poste: string;
//       salaire: number;
//       travailler(): void;
// }
// class Employee implements Personne, Travailleur {
//       nom: string;
//       age: number;
//       poste: string;
//       salaire: number;
//       constructor(nom: string, age: number, poste: string, salaire: number) {
//             this.nom = nom;
//             this.age = age;
//             this.poste = poste;
//             this.salaire = salaire;
//       }
//       saluer(): void {
//             throw new Error("Method not implemented.");
//       }
//       sePresenter() {
//             console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
//       }
//       travailler() {
//             console.log(`Je suis ${this.poste} et je gagne ${this.salaire}€.`);
//       }
// }
// const employe1 = new Employee("Jean", 30, "Ingénieur", 5000);
// employe1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
// employe1.travailler(); // affiche "Je suis Ingénieur et je gagne 5000€."
