/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creo array squadre con diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0
const squadre = [
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Manchester city',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Rwal Madrid',
        puntiFatti: 0,
        falliSubiti: 0
    }, {
        nome: 'Bayern Monaco',
        puntiFatti: 0,
        falliSubiti: 0
    },
]
console.log(squadre);
//Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.
for (let i = 0; i < squadre.length; i++) {
    const element = squadre[i];
    element.falliSubiti = Math.floor(Math.random() * 100);
    element.puntiFatti = Math.floor(Math.random() * 100);
}
//creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e
// stampiamo tutto in console.
const contoFalli = [];
for (let i = 0; i < squadre.length; i++) {
    contoFalli.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti
    })
}
console.log(contoFalli);

