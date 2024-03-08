/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
      return message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
      return message = 'Hai più di 18 anni!';
    }
}
console.log(checkAge());
////////// si stava cercando di modificare una const, bisognava modificarla in una let (message) - mancava anche l'opportuno return

// ESERCIZIO 2
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
///////////////length era scritto male


// ESERCIZIO 3
function addNumbers() {
  const userNumber = parseInt(prompt('Inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
////////////// senza il parseint il valore inserito era calcolato come stringa e quindi concatenato, adesso viene sommato correttamente


// ESERCIZIO 4
function checkAccess() {
  const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
  const userEmail = prompt('Inserisci il tuo indirizzo email');
  
  let grantAccess = false;
  
  if (addresses.includes(userEmail)) {
    grantAccess = true;
  }
  
  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();

////// i valori booleani erano scritti tra virgolette e quindi calcolati come stringa, di conseguenza sempre true. senza le virgolette assumono valore corretto

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
  const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
      const email = addresses[i];

      if (userEmail.length > 5) {

          if (email === userEmail) {
              grantAccess = true;
          }

      }

      if (grantAccess) {
          console.log('Accesso consentito!');
      } else {
          console.log('Accesso negato!');
      }
  }
}  
    checkAccessImproved();

    ////// mancava una graffa alla chiusura della funzione, e i valori boolean di grantAccess erano tra virgolette, per lo stesso motivo dell'esercizio 4 non funzionava





























