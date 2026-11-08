/*Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän. 
Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet. 
Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (<ol>) aakkosjärjestyksessä.
*/

"use strict";

let nimet = [];
let O_luku = prompt("Anna osallistujien lukumäärä:");
let luku = parseInt(O_luku);
let html_str = "";

for ( let i = luku; i > 0; i--){
    let nimi = prompt("Anna osallistujien nimet:");
    nimet.push(nimi)
}

nimet.sort((a, b) => a.localeCompare(b, "fi"));

for ( const nimi of nimet){
    html_str = html_str + "<li>" + nimi + "</li>";
}

document.querySelector("#osallistujat").innerHTML = html_str