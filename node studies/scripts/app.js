import {apiKey} from "./util.js"

console.log(apiKey); 


/* quando há um arquivo que somente exporta uma variável, podemos 
utilizar o export default, não precisa dar um nome à variável */

import apiKey from "./util.js" // aqui pode se dar o nome que quiser à variavel, 
// pois o export default não precisa de nome, mas é uma boa prática dar o
//  mesmo nome da variável exportada

console.log(apiKey);


//Podemos importar mais de uma variável de um arquivo, mas nesse caso não podemos utilizar 
// o export default, pois só pode haver um export default por arquivo
import { userName, userEmail, apiKey} from "./util.js"

console.log(userName);
console.log(userEmail);

import * as util from "./util.js"// podemos importar todas as variáveis de um arquivo e dar
// um nome para o objeto que irá conter todas as variáveis exportadas

console.log(util.userName);
console.log(util.userEmail);
console.log(util.apiKey);


// Tambem é possível importar utilizando um alias, ou seja, podemos dar 
// um nome diferente para a variável importada

import { userName as name, userEmail as email} from "./util.js"

console.log(name);
console.log(email);



//REVISÃO ENTRE CONST E LET 
console.log(11 + 4);
console.log("Hellho" + " world");

console.log()