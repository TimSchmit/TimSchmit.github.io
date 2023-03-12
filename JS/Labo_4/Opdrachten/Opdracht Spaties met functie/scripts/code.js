const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", update)
}

const update = () => {
    let line = document.getElementById("txtVak").value;
    let result = maakMetSpaties(line);
    console.log(result);


}
const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i<inputText.length;i++){
        result += inputText.charAt(i) + " ";
    }
    return result;
}

window.addEventListener("load", setup);