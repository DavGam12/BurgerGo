// Values
let userFirstName = "user"

// General
let optionButtons
let hr
// Options
let offersOption
let pastordersOption
// Buttons
let logoutButton
let logoutAcceptButton
let logoutCancelButton
// Texts
let userFirstNameText

/*
const PERMISSION = [
    admin = "admin",
    moderator = "moderator",
    byDefault = "none"
]

let user = 
{
    email: null,
    password: null,
    permission: PERMISSION.byDefault,
    userLogged: userLogged
}
*/

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    optionButtons = document.getElementsByClassName("profile-options")[0].getElementsByTagName("button")
    hr = document.getElementsByTagName("hr")

    userFirstNameText = document.getElementsByClassName("user-firstname")
    offersOption = document.getElementById("offers-option")
    pastordersOption = document.getElementById("pastorders-option")

    logoutButton = document.getElementById("logout")
    logoutAcceptButton = document.getElementById("logout-accept")
    logoutCancelButton = document.getElementById("logout-cancel")

    
    window.addEventListener("load",()=>{ // on window load
        FillUserFirstName(userFirstName)
    })

    optionButtons[0].addEventListener("mouseover",()=>{HrWidth(hr[0])})
    optionButtons[0].addEventListener("mouseout",()=>{
        if (offersOption.style.display != "flex") {
            hr[0].style.visibility = "hidden"
            DeleteAnimation(hr[0])
        }
    })
    optionButtons[1].addEventListener("mouseover",()=>{HrWidth(hr[1])})
    optionButtons[1].addEventListener("mouseout",()=>{
        if (pastordersOption.style.display != "block") {
            hr[1].style.visibility = "hidden"
            DeleteAnimation(hr[1])
        }
    })

    optionButtons[0].addEventListener("click",()=>{
        offersOption.style.display = "flex"
        pastordersOption.style.display = "none"

        hr[1].style.visibility = "hidden"
        DeleteAnimation(hr[1])
    })
    optionButtons[1].addEventListener("click",()=>{
        offersOption.style.display = "none"
        pastordersOption.style.display = "block"

        hr[0].style.visibility = "hidden"
        DeleteAnimation(hr[0])
    })


    
    logoutButton.addEventListener("click",()=>{
        logoutDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        SpecificEnable(logoutDiv.className)
        ActivateOpacity(logoutDiv.className)
    })
    logoutAcceptButton.addEventListener("click",()=>{
        userLogged = false
        SaveVariables()
        let backToMain = document.createElement("a")
        backToMain.setAttribute("href", "../html/main.html")
        backToMain.click()
        document.removeChild(backToMain)
    })
    logoutCancelButton.addEventListener("click",()=>{
        logoutDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })



})


function FillUserFirstName(name){
    Array.from(userFirstNameText).forEach(e => {
        e.textContent = name
    })
}
function HrWidth(e){e.style.animation = "hrWidth 1.5s"; e.style.visibility = "visible"; e.style.width = "60%";}
function DeleteAnimation(e){e.style.animation = "none";}

SpecificEnable = (className) => {
    Array.from(document.body.children).forEach(e => {
        if(e.className == "main")
        {
            Array.from(e.children).forEach(ea => {
                if (ea.className == className) {
                    ea.style.pointerEvents = "all"
                }
            })
        }
    })
}

ActivateOpacity = (className) => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                if (ea.className != className){
                    ea.style.opacity = "0.5"
                }
            })
        } else {e.style.opacity = "0.5"}
    })
}

DeactivateOpacity = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                ea.style.opacity = "1"
            })
        }
        e.style.opacity = "1"
    })
}

