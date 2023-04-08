interface IPersonne {
      nom: string;
      age: number;
      sePresenter(): void;
}

class Personne implements IPersonne {
      nom: string;
      age: number;

      constructor(nom: string, age: number) {
            this.nom = nom;
            this.age = age;
      }

      sePresenter() {
            console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      }
}

const personne1: IPersonne = new Personne("Jean", 30);
personne1.sePresenter(); // affiche "Je m'appelle Jean et j'ai 30 ans."
