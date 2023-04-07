
// Union 
type MonUnion = string | number;

// Intersection
type MonObjet = { nom: string } & { age: number };

interface MonInterface {
      attribut: string | number;
      propriete: { nom: string } & { age: number };
    }


