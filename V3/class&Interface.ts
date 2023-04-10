
interface IEmploye {
      nom: string;
      prenom: string;
      age: number;
      salaire: number;
      augmenterSalaire(montant: number): void;
      getNomComplet(): string;
}

class EmployeImpl implements IEmploye {
      nom: string;
      prenom: string;
      age: number;
      salaire: number;

      constructor(nom: string, prenom: string, age: number, salaire: number) {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
            this.salaire = salaire;
      }

      augmenterSalaire(montant: number) {
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
