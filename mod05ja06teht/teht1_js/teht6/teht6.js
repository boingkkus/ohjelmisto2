
const vastaus = confirm("Lasketaanko neliöjuuri?");

if (vastaus === true) {

    let lukuStr = prompt("Anna luku:")
    let luku = parseFloat(lukuStr)
    
    if (luku < 0) {
        document.querySelector("#lasketaanko").innerHTML =
            "Negatiivisen luvun neliöjuurta ei ole määritelty."
    }
    else {
        let neliojuuri = Math.sqrt(luku)
        document.querySelector("#lasketaanko").innerHTML =
            `Luvun ${luku} neliöjuuri on ${neliojuuri}`
        }

} else {
    document.querySelector("#lasketaanko").innerHTML =
        "Neliöjuurta ei lasketa"
}
