// Cas d'utilisation 2
interface Addition {
      (a: number, b: number): number;
}

// Fonction add  
const add: Addition = (a: number, b: number): number => {
      return a + b;
};

console.log(add(2, 5)); // affiche 7
