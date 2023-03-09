const setup = () => {
    let btnTry = document.getElementById("btnTry");


    //btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("mouseover", () => {document.getElementById("event").innerHTML += "Mouse Hovered!<br>"});

    //btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("click", () => {document.getElementById("event").innerHTML += "Mouse Clicked!<br>"});

    //btnTry.addEventListener("mouseout", mouseOut);
    btnTry.addEventListener("mouseout", () => {document.getElementById("event").innerHTML += "Mouse Out!<br>"});


    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"
    document.getElementById("btnContent").addEventListener("click", changeContent);


}

//const mouseHover = () => {
//    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
//}

//const onClick = () => {
//    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
//}

//const mouseOut = () => {
//    document.getElementById("event").innerHTML += "Mouse Out!<br>";
//}


const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for(let i = 0;i < listItems.length; i++){

        //1ste manier (Geen goede manier) Gebruikt CSS in Javascript
        //listItems[i].style.listStyleType="none";
        //listItems[i].style.backgroundColor="red";

        //2de manier
        //listItems[i].className = "listItemsStyleNone colorRed";

        //3de manier
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");

        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        //console.log("output" + listItems[i].className); wordt gebruikt om uit te zoeken waarom het, maar 1 keer rood wordt

        //4de manier
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li")
    for (let i = 0;i < listItems.length; i++){

        //1ste manier (Geen goede manier) Gebruikt CSS in Javascript
        //listItems[i].style.listStyleType="disc";
        //listItems[i].style.backgroundColor="white";

        //2de manier
        //listItems[i].className = "listItemStyleDisc colorWhite"

        //3de manier
        //listItems[i].classList.remove("colorRed");           Moet niet
        //listItems[i].classList.remove("listItemsStyleNone"); Moet niet

        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        //console.log("output" + listItems[i].className); wordt gebruikt om uit te zoeken waarom het, maar 1 keer rood wordt


        //4de manier
    }
}

//difference between "textcontent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>"; // alles tussen ""
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";     // ziet als HTML

}


window.addEventListener("load", setup);