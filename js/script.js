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

const buttonCheck = document.getElementById("check_button");


// chiedo all'utente una parola

const userWord = document.getElementById("user_word");

// test
// console.log(userWord, buttonCheck);


// al Click del bottone
buttonCheck.addEventListener("click", function(){
    
    const word = userWord.value;

    const drow = reverseString(word);

    // test

    console.log(word, drow);

    if (word == drow){
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma");
    }

  

  


});


// creo la funzione 

function reverseString(word){

    let reversedWord = ""; 

    for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
    }

    return reversedWord;
    

}


