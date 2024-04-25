let optionButtons
let hr

let offersOption
let pastordersOption
let personalOption
// Texts
let userFirstNameText
// Values
let userFirstName = "user"

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    optionButtons = document.getElementsByClassName("profile-options")[0].getElementsByTagName("button")
    hr = document.getElementsByTagName("hr")
    userFirstNameText = document.getElementsByClassName("user-firstname")
    offersOption = document.getElementById("offers-option")
    pastordersOption = document.getElementById("pastorders-option")

    
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
    for (let e in userFirstNameText){
        userFirstNameText[e].innerHTML = name
    }
}
function HrWidth(e){e.style.animation = "hrWidth 1.5s"; e.style.visibility = "visible"; e.style.width = "60%";}
function DeleteAnimation(e){e.style.animation = "none";}

SpecificEnable = (className) => {
    for(let be in document.body.children){
        if(document.body.children[be].className == "main")
        {
            for(let e in document.body.children[be].children)
            {
                if (document.body.children[be].children[e].className == className) {

                    document.body.children[be].children[e].style.pointerEvents = "all"
                }
            }
        }
    }
}

ActivateOpacity = (className) => {
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for (let e = 0; e<document.body.children[be].children.length; e++) {
                if (document.body.children[be].children[e].className != className){
                    document.body.children[be].children[e].style.opacity = "0.5"
                }
            }
        } else {document.body.children[be].style.opacity = "0.5"}
    }
}

DeactivateOpacity = () => {
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for (let e = 0; e<document.body.children[be].children.length; e++) {
                document.body.children[be].children[e].style.opacity = "1"
            }
        }
        document.body.children[be].style.opacity = "1"
    }
}
