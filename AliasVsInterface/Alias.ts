
// Les alias de types permettent de créer des noms plus lisibles
type MonAge = string | number;

interface Client {
  nom: string;
  age: MonAge;
}