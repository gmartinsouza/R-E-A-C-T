function handleTimeOut(){
    console.log("Timeout");
}

//arrow function
const handleTimeout1 = () => {
    console.log("Timeout1");
}

// ao passar uma função como parametro não se usa parentesis
setTimeout(handleTimeOut, 1000); //chama a função handleTimeOut depois de 1 segundo
setTimeout(handleTimeout1, 2000); //chama a função handleTimeout1 depois de 2 segundos
//quando tem parentesis retorna um valor 

setTimeout(() => {
    console.log("Timeout2");
}, 3000); //chama a função anônima depois de 3 segundos


//que loucura da porra por isso que eu gosto de C 
function greeter(greetingsFunction){
    greetingsFunction();
}

greeter(() => {
    console.log("Olá, tudo bem?");
});


// funções dentro de outras funções
function init(){
    function greet(){
        console.log("Olá, tudo bem?");
    }
    greet();
}

//greet(); //não funciona, pois a função greet está dentro da função init 

init(); //funciona, pois a função init chama a função greet dentro dela

let userMessage = "GMSouza";
userMessage = userMessage.concat("!!!"); //não é possível alterar o valor de uma constante, mas é possível alterar o valor de uma variável

const carros = ["Fusca", "Gol", "Civic"];
carros.push("Uno"); //é possível alterar o valor de um array, mesmo que ele seja uma constante
console.log(carros);

carros = ["Meriva"]; //não é possível alterar o valor de uma constante, mesmo que seja um array
