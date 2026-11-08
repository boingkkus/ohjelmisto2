"use strict";
let luku = 0;
let lukulista = [];
for (  let i = 0; i < 5; i++ ){
    luku = parseInt(prompt("Anna luku:"));
    lukulista.push(luku);
} 
let html_str = ""
for (let i = lukulista.length -1; i >= 0; i-- ){
    luku = lukulista[i];
    html_str = html_str + "<li>" + String(luku) + "</li>";
}
document.querySelector("#luvut").innerHTML = html_str;
