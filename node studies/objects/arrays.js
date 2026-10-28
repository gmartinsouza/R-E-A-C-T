const hobbies = ["dormir", "comer", "estudar", "jogar"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]);

hoobbies.push("programar"); //adicionando um elemento no array
console.log(hoobbies);

hoobbies.pop(); //removendo o último elemento do array
console.log(hoobbies);

hobbies.unshift("programar"); //adicionando um elemento no início do array
console.log(hoobbies);      

const comerIndex = hoobbies.findIndex((hobby) =>{
    return hobby === "comer";
}); //retorna o índice do elemento encontrado
console.log(comerIndex);


const comerIndexArrow = hoobbies.findIndex((hobby) =>hobby === "comer"); //retorna o índice do elemento encontrado
console.log(comerIndexArrow);

hoobbies.map((hobby) => item = hobby.toUpperCase()); //retorna um novo array com os elementos modificados
console.log(hoobbies);

const edditedHobbies = hoobbies.map((item) => item + "!"); //retorna um novo array com os elementos modificados
console.log(edditedHobbies);

const edditedHobbiesObject = hoobbies.map((item) =>({text: item})); //retorna um novo array com os elementos modificados,
// nesse caso, um array de objetos
console.log(edditedHobbiesObject);


// const userNameData = ["Gabriel", 30, "Recife"];
// const name = userNameData[0];
// const age = userNameData[1];
// const city = userNameData[2];   
// // esse código pode ser substituído por uma desestruturação de array, que é mais simples e legível
// const [firstName, userAge, userCity] = ["Gabriel", 30, "Recife"];
// console.log(firstName);
// console.log(userAge);

// const user = {
//     name: "Gabriel",
//     age: 30,
// }

// const name = user.name;
// const age = user.age;


//desestruturação
const {name: userName, age} = {
    name: "Gabriel",
    age: 30,
}

console.log(userName);





function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}



function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // chamada com somente um argumento