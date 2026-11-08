/*Kirjoita ohjelma, joka kysyy kuuden koiran nimet. 
Ohjelma tulostaa koirien nimet järjestämättömään luetteloon (<ul>) käänteisessä aakkosjärjestyksessä.*/

"use strict";

let html_str = ""
let koirat = [];

for ( let i = 1; i <= 6; i++){
    let nimi = prompt("Anna koiran nimi:");
    koirat.push(nimi);
}

koirat.sort((a, b) => b.localeCompare(a, "fi"));

for ( const nimi of koirat){
    html_str = html_str + "<li>" + nimi + "</li>";
}

document.querySelector("#koirat").innerHTML = html_str