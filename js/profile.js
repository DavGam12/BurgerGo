let optionButtons
let hr

let offersOption
let pastordersOption
let personalOption
// Texts
let userNameText
// Values
let userName = "test"

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    optionButtons = document.getElementsByClassName("profile-options")[0].getElementsByTagName("button")
    hr = document.getElementsByTagName("hr")
    userNameText = document.getElementsByClassName("user-name")
    offersOption = document.getElementById("offers-option")
    pastordersOption = document.getElementById("pastorders-option")
    personalOption = document.getElementById("personal-option")

    
    window.addEventListener("load",()=>{ // on window load
        FillUserName(userName)
    })

    optionButtons[0].addEventListener("mouseover",()=>{HrWidth(hr[0])})
    optionButtons[0].addEventListener("mouseout",()=>{
        if (offersOption.style.display != "block") {
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
        offersOption.style.display = "block"
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


function FillUserName(name){
    for (let e in userNameText){
        userNameText[e].innerHTML = name
    }
}
function HrWidth(e){e.style.animation = "hrWidth 1.5s"; e.style.visibility = "visible"; e.style.width = "60%"}
function DeleteAnimation(e){e.style.animation = "none";}