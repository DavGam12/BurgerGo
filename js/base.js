let menuButton
let closeMenu
let menuDiv
let menuBody


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")


    menuButton = document.getElementsByClassName("menu")[0].getElementsByTagName("button")[0]
    closeMenu = document.getElementsByClassName("close-menu")[0].getElementsByTagName("button")[0]
    menuDiv = document.getElementsByClassName("menu-div")[0]
    menuBody = document.getElementsByClassName("menu-body")[0]

    menuButton.addEventListener("click",()=>{
        menuDiv.style.scale = "1"
        menuDiv.style.display = "block"
        menuDiv.style.animation = "menuSlide 1s"
        menuBody.style.animation = "menuBodySlide 1s"
    })
    closeMenu.addEventListener("click",()=>{
        menuDiv.style.scale = "0"
        menuDiv.style.animation = "menuClose 1s"
        menuBody.style.animation = "none"
    })
})
