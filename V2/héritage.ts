// Classe parent
class Personne {
      nom: string;
      age: number;

      constructor(nom: string, age: number) {
            this.nom = nom;
            this.age = age;
      }

      sePresenter() {
            console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      }
}

// Classe fille
class Employe extends Personne {
      poste: string;

      constructor(nom: string, age: number, poste: string) {
            super(nom, age);
            this.poste = poste;
      }

      sePresenter() {
            super.sePresenter();
            console.log(`Je travaille comme ${this.poste}.`);
      }
}

// Intstance de classe Personne
const personne1 = new Personne("John Doe", 25);
personne1.sePresenter(); // affiche "Bonjour, je m'appelle John Doe et j'ai 25 ans."

// Intstance de classe Employe
const employe1 = new Employe("Jane Smith", 30, "Développeur");
employe1.sePresenter(); // affiche "Bonjour, je m'appelle Jane Smith et j'ai 30 ans. Je travaille comme Développeur."
