
// // Déclaration d’Alias de type
// type Utilisateur = {
//       nom: string;
//       age: number;
//       adresse?: string;
//       saluer(): void;
//     }
    

// Déclaration d’une interface
interface Personne {
      nom: string;
      age: number;
      adresse?: string;
      saluer(): void;
}


// Création d'un objet  
const utilisateur: Utilisateur = {
      nom: "Steve Wozniak",
      age: 31,
      adresse: "10 rue de la Liberté",
      saluer() {
            console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      },
};

// Appel de la méthode 
utilisateur.saluer();  

// Définition d'une fonction  
function saluerUtilisateur(utilisateur: Utilisateur) {
      console.log(`Bonjour ${utilisateur.nom} !`);
}

// Appel de la fonction  
saluerUtilisateur(utilisateur); 