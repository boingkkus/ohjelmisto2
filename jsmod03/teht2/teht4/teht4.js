/*Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan. 
Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään.*/

"use strict";

const luvut = [];
let luku;

do {
    luku = prompt("Anna luku, tai lopeta syöttämällä luku 0:")
    if (luku != 0) {
        luvut.push(luku);
    }
} while (luku != 0);

luvut.sort((a, b) => a - b);

console.log(luvut)
