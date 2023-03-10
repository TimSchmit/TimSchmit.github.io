const setup = () => {
    let button = document.getElementById("herberekenen");
    button.addEventListener("click", update)
}

const update = () => {
    let txtBTWs = document.getElementsByClassName('BTW');
    let txtAantallen = document.getElementsByClassName('aantal');
    let txtPrijzen = document.getElementsByClassName('prijs');
    let txtSubtotalen = document.getElementsByClassName('subtotaal');
    let totaal = 0.0;

    for (let i = 0;i<txtAantallen.length;i++){
        let aantal = parseFloat(txtAantallen[i].value);
        let prijs = parseFloat(txtPrijzen[i].innerHTML);
        let btw = parseFloat(txtBTWs[i].innerHTML);

        let subtotaal = (prijs + (prijs * (btw/100))) * aantal;

        subtotaal = subtotaal.toFixed(2);
        subtotaal = parseFloat(subtotaal);

        txtSubtotalen[i].innerHTML = subtotaal + " EUR";
        totaal += subtotaal;
    }

    totaal = totaal.toFixed(2);
    totaal = parseFloat(totaal);

    document.getElementById("totaal").innerHTML = totaal + " EUR"
}
window.addEventListener("load", setup);