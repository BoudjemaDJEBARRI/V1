"use strict";
// // Déclaration d'une interface pour les personnes
// interface IPersonne {
//       nom: string;
//       age: number;
//       sePresenter(): void;
// }
// // Implémentation de l'interface IPersonne dans la classe Personne
// class Personne implements IPersonne {
//       nom: string;
//       age: number;
//       constructor(nom: string, age: number) {
//             this.nom = nom;
//             this.age = age;
//       }
//       sePresenter() {
//             console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
//       }
// }
// // Déclaration d'une interface pour les employés
// interface IEmploye {
//       poste: string;
//       travailler(): void;
// }
// // Implémentation de l'interface IEmploye dans la classe Employe en utilisant l'héritage
// class Employe extends Personne implements IEmploye {
//       poste: string;
//       constructor(nom: string, age: number, poste: string) {
//             super(nom, age); // appel du constructeur de la classe parente avec super()
//             this.poste = poste;
//       }
//       travailler() {
//             console.log(`Je travaille comme ${this.poste}.`);
//       }
// }
// // Utilisation de la classe Employe implémentant deux interfaces
// const employe1: IEmploye & IPersonne = new Employe("Jean", 30, "Ingénieur");
// employe1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
// employe1.travailler(); // affiche "Je travaille comme Ingénieur."
