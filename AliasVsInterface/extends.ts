// Les interfaces peuvent être étendues 

interface Animal {
      nom: string;
      age: number;
      son: string;
    }
    
    interface Chien extends Animal {
      race: string;
      aboyer(): void;
    }
    
    interface Chat extends Animal {
      race: string;
      miauler(): void;
    }
    
    const monChien: Chien = {
      nom: "Rex",
      age: 3,
      son: "Woof",
      race: "Labrador",
      aboyer() {
        console.log(this.son);
      },
    };
    
    const monChat: Chat = {
      nom: "Miaou",
      age: 2,
      son: "Miaou",
      race: "Siamois",
      miauler() {
        console.log(this.son);
      },
    };
    
    monChien.aboyer(); // affiche "Woof"
    monChat.miauler(); // affiche "Miaou"