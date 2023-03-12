
const setup = () => {
    let tekst = document.getElementById("txtVak").value;
    let zoekTekst = document.getElementById("txtZoek").value;
    let txtAantal = document.getElementById("txtAantal");

    txtAantal.textContent = telVoorkomens(tekst, zoekTekst);
};

const telVoorkomens = (tekst, zoekTekst) => {
    let result = 0;
    let idx = tekst.indexOf(zoekTekst);
    while (idx !== -1) {
        result++;
        idx = tekst.indexOf(zoekTekst, idx+zoekTekst.length);
    }
    return result;
};

window.addEventListener("load", setup);