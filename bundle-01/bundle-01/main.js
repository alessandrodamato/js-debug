/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log('es 1 ----',i);
}
// errore: "i" non potrà mai essere maggiore di 5, per far funzionare il ciclo deve essere < 5

// ESERCIZIO 2
function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}
console.log('Es 2-------------',addIfEven(2), addIfEven(3));
//errore: num % 2 = 0: un uguale solo è di assegnazione non di comparazione, adesso se è pari lo stampa sommato a 5 altrimenti rimane il numero inserito

// ESERCIZIO 3
function loopToFive() {
  for (let i = 0; i < 5; i++) {
    console.log('Es 3------------------',i);
  }
}
loopToFive()
//l'errore erano le virgole "," invece dei punti e virgola ";" - errore di sintassi

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    if (n % 2 === 0){
        evenNumbers.push(n);
      }
    }
    return console.log(evenNumbers);
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//errori :
// 1. i++;
//2. numbers % 2 = 0
//3.  numbers.length - 1
//4. ; dopo la condizione dell'if
//5. il return va fuori dal ciclo for
//6. va pushato il numero singolo con indice pari
//7. il return deve essere anche il log dell'array