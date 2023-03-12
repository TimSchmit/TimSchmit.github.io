const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", update)
}

const update = () => {
    let line = document.getElementById("txtVak").value;
    let result = "";
    for (let i = 0; i<line.length;i++){
        result += line.charAt(i) + " ";
    }

    console.log(result);


}

window.addEventListener("load", setup);