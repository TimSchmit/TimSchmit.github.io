const setup = () => {
    let items = document.getElementsByTagName("li")
    for (var i = 0; i< items.length; i++){
        items[i].setAttribute("class", "listItem")

    }
    let myPic = document.createElement('img');
    myPic.setAttribute("src", 'http://gotocon.com/d1/jaoo');
    myPic.setAttribute("alt", "mezelf");
    document.querySelector("body").appendChild(myPic);
}
window.addEventListener("load", setup);