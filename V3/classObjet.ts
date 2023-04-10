class Personne {
      nom: string;
      age: number;

      constructor(nom: string, age: number) {
            this.nom = nom;
            this.age = age;
      }

      sePresenter() {
            console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      }

      saluer() {
            console.log(`Bonjour ${this.nom} !`);
      }
}

const personne6 = new Personne("Elon", 30);
personne6.sePresenter(); // affiche "Je m'appelle Elon et j'ai 30 ans."
personne6.saluer(); // affiche "Bonjour Elon!"
