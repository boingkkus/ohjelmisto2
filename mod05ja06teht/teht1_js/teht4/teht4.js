"use strict";

let nimi = prompt("Mikä on nimesi?: ");

const tupa = Math.floor(Math.random() * 4) + 1;

if (tupa === 1); {
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Korpinkynsi";
} if (tupa === 2); {
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Rohkelikko";
} if (tupa === 3); {
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Luihunen";
} if (tupa === 4) {
    document.querySelector("#target").innerHTML =
        nimi + ", sinä olet Puuskupuh";
}