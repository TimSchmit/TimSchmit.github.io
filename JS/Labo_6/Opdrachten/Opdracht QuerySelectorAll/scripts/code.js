const setup = () => {
    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let textNode = document.createTextNode("good Job");
    par.appendChild(textNode)
}
window.addEventListener("load", setup);