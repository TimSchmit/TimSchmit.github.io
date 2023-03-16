const setup = () => {
    getAllGemeenten();
}

const getAllGemeenten = () => {
    let end = false;
    let gemeenten = [];

    while (!end) {
        let input = window.prompt("Geef een gemeente. Typ end om de ingegeven lijst weer te geven.");
        if(input.localeCompare("end") === 0) {
            end = true;
        } else {
            gemeenten.push(input);
        }
    }
    gemeenten.sort(compare);
    getGemeenten(gemeenten);
}

const compare = (a,b) => {
    return a.localeCompare(b);
}

const getGemeenten = (gemeenten) => {
    let output = document.getElementById("list");
    let result = "";

    for(let i = 0;i < gemeenten.length;i++) {
        result += "<option>" + gemeenten[i] + "</option>";
    }
    output.innerHTML = "<select>" + result + "</select>";
}

window.addEventListener("load", setup);