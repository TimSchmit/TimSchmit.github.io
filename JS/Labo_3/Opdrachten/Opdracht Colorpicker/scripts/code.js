const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0;i < sliders.length;i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();
}

const update = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;
    console.log("de waarde van de slider is momenteel : " + red);

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;
    console.log("de waarde van de slider is momenteel : " + blue);

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;
    console.log("de waarde van de slider is momenteel : " + green);

    let cube = document.getElementById("cube");
    cube.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";

}



window.addEventListener("load", setup);