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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => auto.type === 'diesel');

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' && auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);


//////errori
//1. mancava una virgola tra gli oggetti dell'array
//2. la freccia dell'arrow function riga 67 era al contrario
//3. la funzione dieselCars non aveva il return quindi l'ho reso implicito
//4. il return di otherCars non deve essere benzina && diesel, mentre prima era benzina || diesel
//5. il tipo di alimentazione della ford kuga 'diesel' era scritto 'Diesel ' quindi non corrispondeva al tipo di alimentazione specificato nella funzione
//6. il tipo di alimentazione della golf e dell'R8 'benzina' era scritto 'Benzina ' quindi non corrispondeva al tipo di alimentazione specificato nella funzione