"use strict";

let luku1Str = prompt("Anna luku: ");
let luku2Str = prompt("Anna toinen luku: ");
let luku3Str = prompt("Anna kolmas luku: ");

let luku1 = parseInt(luku1Str);
let luku2 = parseInt(luku2Str);
let luku3 = parseInt(luku3Str);

let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;

document.querySelector("#tulokset").innerHTML =
    `Lukujen summa: ${summa}, tulo: ${tulo} ja keskiarvo: ${keskiarvo}`;