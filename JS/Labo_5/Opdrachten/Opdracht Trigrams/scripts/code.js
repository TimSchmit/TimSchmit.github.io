const setup = () => {
    let button = document.getElementById("btnButton");
    button.addEventListener("click", change);
}

const change = () => {
    let tekst = document.getElementById("txtTekst").value;
    let lists = document.getElementById("list");
    let txtTrigrams = trigrams(tekst);
    let output = "";
    for (let i = 0; i<txtTrigrams.length;i++){
        output +="<li>"+txtTrigrams[i]+"</li>";
    }
    lists.innerHTML = output;


}

const trigrams = (tekst) => {
    const resultaat = [];
    let trigram;
    for (let i = 0;i < tekst.length -2;i++){
        trigram = tekst.slice(i,i+3);
        resultaat.push(trigram);

    }
    return resultaat;
}
window.addEventListener("load", setup);