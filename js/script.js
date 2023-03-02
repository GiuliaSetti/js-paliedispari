// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/* 
- trascrivo gli elementi HTML in JS.

- chiedo all'utente una parola
al CLICK del bottone:

    ? SE la parola è palindroma
        ° stampo in pagina che la parola è palindroma.

    : ALTRIMENTI
        ° stampo in pagina che la parola non è palindroma. 

*/


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


/* 
- chiedo all'utente di scegliere un numero che vada da 1 a 5.

- chiedo se vuole scegliere pari o dispari.

- creo una funzione che mi permetta di generare un numero random da 1 a 5.
    - il pc sceglie un numero random da 1 a 5.

- creo una funzione che mi permetta di definire se un numero è pari o dispari.

al click del bottone:

? SE la somma (data da scelta user + scelta pc) è uguale alla scelta (pari/dispari) dell'utente 
        ° comunico all'utente che ha vinto
:ALTRIMENTI se la somma è differente dalla scelta 
        ° comunico all'utente che ha vinto
    

*/




const buttonCheck = document.getElementById("check_button");


// chiedo all'utente una parola

const userWord = document.getElementById("user_word");

// test
// console.log(userWord, buttonCheck);


let wordResult = document.getElementById("word_result");

let emptyWordAlert = document.getElementById("empty_word");

// al Click del bottone
buttonCheck.addEventListener("click", function(){
    
    const word = userWord.value;

    const drow = reverseString(word);


    // test

    console.log(word, drow);

    if (word == ""){

        emptyWordAlert.innerHTML = "Devi inserire la parola.";

    } else {

        emptyWordAlert.style.display = "none";

        if (word == drow){
            console.log("la parola è palindroma");
    
    
            wordResult.innerHTML = "La parola è palindroma";
    
        } else {
    
            console.log("la parola non è palindroma");
    
            wordResult.innerHTML = "la parola non è palindroma";
    
        }

    }

});



// ESERCIZIO 2

const playButton = document.getElementById("test_button");




playButton.addEventListener("click", function(){

    let userGame = document.getElementById("choice_option").value;
    
    let finalRisult = document.getElementById("risultato_finale");
    
    let userNumber = Number(document.getElementById("user_number").value);


    let cpuNumber = Number(randomNumberGenerator(1,5));

    // test
    console.log(cpuNumber, userNumber, userGame);

    console.log(userNumber + cpuNumber);

    // test:  se il numero è maggiore o uguale a 1 e minore o uguale a 5 allora esegui l'altra condizione. 

    if (userNumber >=1 && userNumber <= 5){

        if (isEverOrOdd(userNumber + cpuNumber) == userGame){
        
            finalRisult.innerHTML = "Hai vinto";
            
        } else {
    
            finalRisult.innerHTML = "Hai perso";
        }
    
        
    } else {

        // se una qualsiasi delle due è falsa allora: 
        finalRisult.innerHTML = "Deve essere un numero da 1 a 5."


    }


    
 });




















// creo la funzione 

// ESERCIZIO 1

// parola palindroma

function reverseString(word){

    let reversedWord = ""; 

    for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
    }

    return reversedWord;
    

}


// ESERCIZIO 2

// numero casuale

function randomNumberGenerator(min, max){

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;
}


// pari o dispari


function isEverOrOdd(somma){

    if(somma % 2 == 0){

        return "Pari";

    } else {

        return "Dispari";
    }

}
