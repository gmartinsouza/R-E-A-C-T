const user = {
    name: "GMSouza",
    age: 30,
    city: "Recife",
    aoba() {
        console.log(`Olá`);
    },
    aobaThis(){
        console.log(`Olá ${this.name}, como está o tempo em ${this.city}?`);
        //o this faz com que seja utilizado as informações do próprio objeto
    }
};

console.log(user.name);
console.log(user.age);
user.aoba();
user.aobaThis();

//nao vai ser muito utilizada 
//precisa começar com letra maiúscula, por convenção
class User { // criando um blueprint para criar objetos
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let user1 = new User("GMSouza", 30, "Recife");
console.log(user1); // printa o objeto user1 todo 