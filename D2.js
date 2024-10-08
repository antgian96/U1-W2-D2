/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1= 13
let n2 = 8
let smallest 
if(n1 < n2){smallest = n1} else {smallest = n2}

console.log (smallest)
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n3=6
if (n3!==5) 
  console.log ('not equal')

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n4=20
if (n4 % 5 === 0) 
  console.log ('divisibile per 5')

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n5 = 8
let n6 = 8
if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8)
  console.log ('il valore di uno di essi sia 8 oppure se la loro addizione sottrazione è uguale a 8')

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 49
if (totalShoppingCart > 50) {
  console.log('spedizione gratuita');
} else {
  console.log(totalShoppingCart + 10); 
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = 49
let blackFridaySale = 20
let sconto = totalShoppingCart1 * blackFridaySale / 100
if (totalShoppingCart1 > 50) {
  console.log('spedizione gratuita');
} else {
  console.log(totalShoppingCart1 - sconto + 10 ); 
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 18
let y = 21
let z = 11

if (x >= y && x >= z) {
  max = x;
  if (y >= z) {
      mid = y;
      min = z;
  } else {
      mid = z;
      min = y;
  }
} else if (y >= x && y >= z) {
  max = y;
  if (x >= z) {
      mid = x;
      min = z;
  } else {
      mid = z;
      min = x;
  }
} else {
  max = z;
  if ( x >= y) {
      mid = x;
      min = y;
  } else {
      mid = y;
      min = x;
  }
}
console.log("Valori ordinati dal più alto al più basso: " + max + ", " + mid + ", " + min)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let noNumber = 'ciao'
if (typeof noNumber === Number) {console.log ('è un numero')} else {
  console.log(noNumber + ' non è un numero'); 
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 9

if (number & 2 ===0) {console.log (number +' è un numero pari')} else {console.log(number + ' non è un numero pari')}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'
console.log('me dopo aggiunta city', me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log ('me dopo rimozione lastname', me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.pop
console.log ('me dopo rimozione skills', me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
Array = []
Array.push (1)
Array.push (2)
Array.push (3)
Array.push (4)
Array.push (5)
Array.push (6)
Array.push (7)
Array.push (8)
Array.push (9)
Array.push (10)
console.log (Array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

Array [10] = 100
console.log (Array)
