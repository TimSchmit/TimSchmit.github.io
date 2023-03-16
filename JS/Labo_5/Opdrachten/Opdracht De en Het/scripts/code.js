const setup = () => {
    document.getElementById("btnZoek").addEventListener("click", change);
}


const change = () => {
    let input = document.getElementById("txtInput").value;
    let zoek = document.getElementById("txtZoek").value;
    let output = document.getElementById("txtVervang").value;

    let idx = input.indexOf(zoek)
    while( idx !== -1 ){
        let voor = input.slice(0,idx);
        let na = input.slice(idx+zoek.length);
        input = voor + output + na;
        idx = input.indexOf(zoek,idx + output.length);
    }

    document.getElementById("txtOutput").innerText = input;
}
window.addEventListener("load", setup);