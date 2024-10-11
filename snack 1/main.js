/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


//Snack 1
const biciclette = [
    {
        nome: 'Bmx',
        peso: 50
    },
    {
        nome: 'Bianchi',
        peso: 69
    },
    {
        nome: 'Atala',
        peso: 89
    },
    {
        nome: 'Olmo',
        peso: 100
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

