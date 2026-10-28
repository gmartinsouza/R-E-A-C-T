// //REVISÃO ENTRE CONST E LET 
// console.log(11 + 4);
// console.log("Hellho" + " world");

// console.log(5 === 10);
// //Retorna false que é um valor boolean

// console.log(5 < 10);

// console.log(5 > 10);
// console.log(5 >= 10);
// console.log(5 <= 10);

// if(10 === 10){
//     console.log("É verdadeiro");
// }



// //#FUNCTIONS#\\ 
// function aobaTche(name, city){
//     console.log(`Olá ${name}, como está o tempo em ${city}?`);
// }

// aobaTche("GMSouza", "Recife");

// function aoba(){
//     console.log(`EEEEEEE trem bão`);
// }
// aoba();


// function createAoba(name, city){
//     return `Olá ${name}, como está o tempo em ${city}?`;
// }

// console.log(createAoba("GMSouza", "Recife"));

// const aoba1 = createAoba("GMSouza", "Recife");
// console.log(aoba1);


//#ARROW FUNCTIONS#\\ () => 
/* é uma função que não tem um nome */


//Função anônima 
// export default function(){
//     console.log("Função anônima");  
// }

export default (userName, message) => {
    console.log(`${userName}: ${message}`);  
    return `${userName}: ${message}`;

};

//se só existe um parâmetro, não precisa de parênteses, nesse caso o number
number => { 
  return number * 3;
}

number => number * 3;

number => { age: number }; // retornando um objeto

number => ({ age: number }); //criando um objeto com parênteses e retornando ele