// Déclaration d'une interface
interface Vehicule {
      marque: string;
      modele: string;
      rouler(distance: number): void;
}

// Implémentation de l'interface par une classe
class Voiture implements Vehicule {
      marque: string;
      modele: string;

      constructor(marque: string, modele: string) {
            this.marque = marque;
            this.modele = modele;
      }

      rouler(distance: number) {
            console.log(`La voiture ${this.marque} ${this.modele} a parcouru ${distance} km.`);
      }
}

// Création d'un objet de type Voiture
const maVoiture = new Voiture("Peugeot", "208");
maVoiture.rouler(100);