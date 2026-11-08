"use strict";
function concat(taulukko){
    let merkkijono = "";
    for (const nimi of taulukko){
        merkkijono = merkkijono + nimi;
    }
    return merkkijono
}

const taulukko = ["Johnny", "DeeDee", "Joey", "Marky"]
document.querySelector("#nimiset").innerHTML = concat(taulukko);
