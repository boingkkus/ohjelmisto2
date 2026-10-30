
const vastaus = confirm("Lasketaanko neliöjuuri?");

if (vastaus === true) {

    let lukuStr = prompt("Anna luku:")
    let luku = parseFloat(lukuStr)
    let neliojuuri = Math.sqrt(luku)

    document.querySelector("#lasketaanko").innerHTML =
        `Luvun ${luku} neliöjuuri on ${neliojuuri}`

} else if (vastaus < 0) {
    document.querySelector("#lasketaanko").innerHTML =
        "Negatiivisen luvun neliöjuurta ei ole määritelty."

} else {
    document.querySelector("#lasketaanko").innerHTML =
        "Neliöjuurta ei lasketa"
}