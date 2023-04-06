const setup = () => {

}




const saveWatch = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
}

const buildSwatchComponent = () => {
    let swatch = document.createElement("div");
}

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById();
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
}

window.addEventListener("load", setup);