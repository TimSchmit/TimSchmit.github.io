const setup = () => {

    let element = document.createElement("p");

    element.setAttribute("class", "color")
    //element.className = "color";

    let textNode = document.createTextNode("Hello world");
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);

    document.getElementById("myDiv").innerHTML = "<p> Hello World </p>"
}







window.addEventListener("load", setup);