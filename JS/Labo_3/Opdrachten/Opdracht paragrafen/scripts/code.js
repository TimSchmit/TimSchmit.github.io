const setup = () => {
    let listItem = document.getElementsByClassName("belangrijk");
    for (let i = 0;i<listItem.length;i++){
        listItem[i].classList.add("opvallend");
    }
}





window.addEventListener("load", setup);