
//Création de classe 
class Animal {
      nom: string;
      age: number;

      constructor(nom: string, age: number) {
            this.nom = nom;
            this.age = age;
      }

      parler(): void {
            console.log(`${this.nom} miaule`);
      }
}

// Instanciation
const chat = new Animal('Minou', 2);

chat.parler(); // affiche "Minou miaule"