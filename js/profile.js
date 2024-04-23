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
    personalOption = document.getElementById("daily-option")

    
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
    optionButtons[2].addEventListener("mouseover",()=>{HrWidth(hr[2])})
    optionButtons[2].addEventListener("mouseout",()=>{
        if (personalOption.style.display != "block") {
            hr[2].style.visibility = "hidden"
            DeleteAnimation(hr[2])
        }
    })

    optionButtons[0].addEventListener("click",()=>{
        offersOption.style.display = "flex"
        pastordersOption.style.display = "none"
        personalOption.style.display = "none"

        hr[1].style.visibility = "hidden"
        DeleteAnimation(hr[1])
        hr[2].style.visibility = "hidden"
        DeleteAnimation(hr[2])
    })
    optionButtons[1].addEventListener("click",()=>{
        offersOption.style.display = "none"
        pastordersOption.style.display = "block"
        personalOption.style.display = "none"

        hr[0].style.visibility = "hidden"
        DeleteAnimation(hr[0])
        hr[2].style.visibility = "hidden"
        DeleteAnimation(hr[2])
    })
    optionButtons[2].addEventListener("click",()=>{
        offersOption.style.display = "none"
        pastordersOption.style.display = "none"
        personalOption.style.display = "block"

        hr[0].style.visibility = "hidden"
        DeleteAnimation(hr[0])
        hr[1].style.visibility = "hidden"
        DeleteAnimation(hr[1])
    })
})


function FillUserFirstName(name){
    for (let e in userFirstNameText){
        userFirstNameText[e].innerHTML = name
    }
}
function HrWidth(e){e.style.animation = "hrWidth 1.5s"; e.style.visibility = "visible"; e.style.width = "60%"}
function DeleteAnimation(e){e.style.animation = "none";}