
// Définir la structure d'objet en utilisant une interface
interface Personnes {
      nom: string;
      age: number;
      sePresenter(): void;
      saluer(): void;  
}

const personne5: Personnes = {
      nom: "Elon",
      age: 30,
      sePresenter() {
            console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      },
      saluer() {  
            console.log(`Bonjour ${this.nom} !`);
      }
};

personne5.sePresenter(); // affiche "Je m'appelle Elon et j'ai 30 ans."
personne5.saluer(); // affiche "Bonjour Elon!"