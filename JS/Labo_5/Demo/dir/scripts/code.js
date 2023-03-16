const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change)

}

const change = () => {
    //let photo = $(imgPhoto);
    let photo = document.getElementById("imgPhoto");
    photo.src = "./Image/Lama.jpg";
    photo.alt = "Lama";
    photo.className = "sizePhoto";

    document.getElementById("txtText").innerHTML = "SupriseLama";
}

//$(setup);
window.addEventListener("load", setup);