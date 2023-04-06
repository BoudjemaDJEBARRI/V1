
// Déclaration d’Alias de type
type Utilisateur = {
      nom: string;
      age: number;
      adresse?: string;
      saluer(): void;
    }

// Création d'un objet qui implémente l'alias utilisateur
const utilisateur: Utilisateur = {
      nom: "Steve Wozniak",
      age: 31,
      adresse: "10 rue de la Liberté",
      saluer() {
            console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
      },
};

// Appel de la méthode "saluer" de l'objet "utilisateur"
utilisateur.saluer(); // affiche "Bonjour, je m'appelle Steve Wozniak et j'ai 31 ans."

// Définition d'une fonction qui prend en paramètre un objet de type Personne
function saluerUtilisateur(utilisateur: Utilisateur) {
      console.log(`Bonjour ${utilisateur.nom} !`);
}

// Appel de la fonction "saluerUtilisateur" avec l'objet "Utilisateur" comme argument
saluerUtilisateur(utilisateur); // Bonjour Steve Wozniak !