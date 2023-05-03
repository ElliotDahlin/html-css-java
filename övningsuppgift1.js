class Animal {
    constructor(name, age, art) {
      this.name = name;
      this.age = age;
      this.art = art;
    }
    
    Utskrivning(){
      console.log(`Detta djur heter ${this.name}, är ${this.age},år gammal och är en ${this.art}`)
    }


  }
  const hund = new Animal("wiggo", 6, "dvärgschnauzer");
 
  
  const katt = new Animal("ronja", 24,"katt");
  

  const bäver = new Animal("berra", 5, "bäver");
  

  hund.Utskrivning();
  katt.Utskrivning();
  bäver.Utskrivning();

  const djur = [
    {namn: "Bosse", age: 7, art: "kakadua"},
    {namn: "Konny", age: 102, art: "skalpadda"},
    {namn: "gunnilla", age: 5, art: "ödla"}
  ]
  console.log(djur);


      