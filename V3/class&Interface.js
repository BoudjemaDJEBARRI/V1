"use strict";
class EmployeImpl {
    constructor(nom, prenom, age, salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
    augmenterSalaire(montant) {
        this.salaire += montant;
    }
    getNomComplet() {
        return this.nom + " " + this.prenom;
    }
}
const employe3 = new EmployeImpl("Doe", "John", 35, 3000);
const employe4 = new EmployeImpl("Doe", "John", 35, 3000);
const employe5 = new EmployeImpl("Doe", "John", 35, 3000);
employe3.augmenterSalaire(500);
console.log(employe3.getNomComplet()); // affiche "Doe John"
