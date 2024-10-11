/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/


//Snack 1
const biciclette = [
    {
        nome: 'Bmx',
        peso: '50'
    },
    {
        nome: 'Bianchi',
        peso: '69'
    },
    {
        nome: 'Atala',
        peso: '1'
    },
    {
        nome: 'Olmo',
        peso: '99'
    }
]
console.log(biciclette);

let numberMin = biciclette[0];
for (let i = 0; i < biciclette.length; i++) {
    const element = biciclette[i];
    const key = 'peso'
    if( element[key] < numberMin){
        numberMin = element[key]
    }
        
}
console.log(numberMin);
