
// Déclaration d’Alias de type
type Utilisateur = {
  nom: string;
  age: number;
  adresse?: string;
  saluer(): void;
}

// Déclaration d’une interface
interface Personne {
  nom: string;
  age: number;
  adresse?: string;
  saluer(): void;
}

// Union 
type MonUnion = string | number;

// Intersection
type MonObjet = { nom: string } & { age: number };


