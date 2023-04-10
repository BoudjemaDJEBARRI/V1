
// Déclaration d’une interface
interface Personne1 {
      nom: string;
      age: number;
      adresse?: string;
      saluer(): void;
}












// Création d'un objet  
const personne: Personne = {
      nom: "Steve Jobs",
      age: 30,
      adresse: "10 rue de la Liberté",
      saluer() {
            console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      },
};

// Appel de la méthode  
personne.saluer();  

// Définition d'une fonction 
function saluerPersonne(personne: Personne) {
      console.log(`Bonjour ${personne.nom} !`);
}

// Appel de la fonction 
saluerPersonne(personne); // Bonjour Steve Jobs !

