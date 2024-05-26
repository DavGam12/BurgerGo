// Values
let userEmail = localStorage.getItem("user.email")
let userFirstName = localStorage.getItem("user.firstName")
let userLastName = localStorage.getItem("user.lastName")

// General
let optionButtons
let hr
// Options
let accountOption
let pastordersOption
// Buttons
let logoutButton
let logoutAcceptButton
let logoutCancelButton
let staffButtons
// Texts
let userFirstNameText


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    optionButtons = document.getElementsByClassName("profile-options")[0].getElementsByTagName("button")
    hr = document.getElementsByTagName("hr")

    userFirstNameText = document.getElementsByClassName("user-firstname")
    accountOption = document.getElementById("account-option")
    pastordersOption = document.getElementById("pastorders-option")

    logoutButton = document.getElementById("logout")
    logoutAcceptButton = document.getElementById("logout-accept")
    logoutCancelButton = document.getElementById("logout-cancel")
    staffButtons = document.getElementsByClassName("staff-buttons")[0].getElementsByTagName("button")

    switch (Number.parseInt(user.permission))
    {
        case 0:
        {
            staffButtons[0].style.display = "flex"
            staffButtons[2].style.display = "flex"
            break
        }
        case 1:
        {
            staffButtons[0].style.display = "flex" // employee
            staffButtons[1].style.display = "flex" // admin
            staffButtons[2].style.display = "flex" // log out
            break
        }
        default:
        {
            staffButtons[2].style.display = "flex"
        }
    }

    
    window.addEventListener("load",()=>{ // on window load
        FillUserFirstName(userFirstName)
    })

    optionButtons[0].addEventListener("mouseover",()=>{HrWidth(hr[0])})
    optionButtons[0].addEventListener("mouseout",()=>{
        if (accountOption.style.display != "flex") {
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
        accountOption.style.display = "flex"
        pastordersOption.style.display = "none"

        hr[1].style.visibility = "hidden"
        DeleteAnimation(hr[1])
    })
    optionButtons[1].addEventListener("click",()=>{
        accountOption.style.display = "none"
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
        emptyUser()
        const backToMain = document.createElement("a")
        backToMain.setAttribute("href", "../html/main.html")
        backToMain.click()
    })
    logoutCancelButton.addEventListener("click",()=>{
        logoutDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })



})


const emptyUser = () => {
    user.id = null
    user.email = null
    user.firstName = null
    user.lastName = null
    user.logged = false
    user.permission = null
    SaveVariables()
    LoadVariables()
}

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

