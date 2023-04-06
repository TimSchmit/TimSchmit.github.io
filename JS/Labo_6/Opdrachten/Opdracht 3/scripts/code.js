const setup = () => {
    document.getElementById("bntCreate")

}

const create = () => {
    let para = document.createElement("p");
    let t = document.createTextNode("This is a paragraph.");

    para.appendChild(t);
    document.getElementById("myDiv").appendChild(para);
}


window.addEventListener("load", setup);