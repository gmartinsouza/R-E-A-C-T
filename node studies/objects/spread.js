/*##### SPREAD OPERATOR #####*/
// merge arrays com outras arrays
const hobbies = ["dormir", "comer", "estudar", "jogar"];
const newHobbies = ['ler'];

const mergeHobbies = [...hobbies, newHobbies]; //spread operator, que é utilizado para espalhar os elementos de um array em outro array
console.log(mergeHobbies);

const mergeHobbies1 = [...hobbies, ...newHobbies]; //spread operator, que é utilizado para espalhar os elementos de um array em outro array
console.log(mergeHobbies1);
// os 3 pontos pega os valores do array e os separa com vírgula, para que seja possível adicionar outros elementos no array

const user = {
    name: "GMSouza",
    age: 30
};

const extendedUser = {
    isAdmin: true,
    ...user
};

console.log(extendedUser); // o spread operator também pode ser utilizado para espalhar os elementos de um objeto em outro objeto   