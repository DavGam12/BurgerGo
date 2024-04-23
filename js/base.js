let userLogged = false

// Divs
let menuDiv
let menuBody
let signoutDiv
// Icons
let closeMenu
let userIcon
// Buttons
let menuButton
let signinButton
let signupButton
let signoutButton
let signoutAcceptButton
let signoutCancelButton



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")


    menuDiv = document.getElementsByClassName("menu-div")[0]
    menuBody = document.getElementsByClassName("menu-body")[0]
    signoutDiv = document.getElementsByClassName("signout-div")[0]

    menuButton = document.getElementsByClassName("menu")[0].getElementsByTagName("button")[0]
    closeMenu = document.getElementsByClassName("close-menu")[0].getElementsByTagName("button")[0]
    
    userIcon = document.getElementsByClassName("header")[0].getElementsByClassName("user")[0]
    signinButton = document.getElementById("signin")
    signupButton = document.getElementById("signup")
    signoutButton = document.getElementById("signout")
    signoutAcceptButton = document.getElementById("signout-accept")
    signoutCancelButton = document.getElementById("signout-cancel")


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
    userIcon.addEventListener("mouseover",()=>{
        if (!userLogged) {
            signinButton.style.display = "block"
            signupButton.style.display = "block"
        }
        else {
            signoutButton.style.display = "block"
        }
    })
    userIcon.addEventListener("mouseout",()=>{
        signinButton.style.display = "none"
        signupButton.style.display = "none"
        signoutButton.style.display = "none"
        
    })
    signinButton.addEventListener("mouseover",()=>{
        signinButton.style.display = "block"
        signupButton.style.display = "block"
    })
    signinButton.addEventListener("mouseout",()=>{
        signinButton.style.display = "none"
        signupButton.style.display = "none"
    })
    signupButton.addEventListener("mouseover",()=>{
        signinButton.style.display = "block"
        signupButton.style.display = "block"
    })
    signupButton.addEventListener("mouseout",()=>{
        signinButton.style.display = "none"
        signupButton.style.display = "none"
    })
    signoutButton.addEventListener("mouseover",()=>{
        signoutButton.style.display = "block"
    })
    signoutButton.addEventListener("mouseout",()=>{
        signoutButton.style.display = "none"
    })

    // User Logs
    signinButton.addEventListener("click",()=>{userLogged = true})
    signupButton.addEventListener("click",()=>{userLogged = true})
    signoutButton.addEventListener("click",()=>{
        signoutDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        SpecificEnable(signoutDiv.className)
        ActivateOpacity(signoutDiv.className)
    })
    signoutAcceptButton.addEventListener("click",()=>{
        signoutDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        DeactivateOpacity()
        userLogged = false
    })
    signoutCancelButton.addEventListener("click",()=>{
        signoutDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        DeactivateOpacity()
    })
})


function SpecificEnable(className){
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

function ActivateOpacity(className){
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for (let e = 0; e<document.body.children[be].children.length; e++) {
                console.log(document.body.children[be].children[e])
                if (document.body.children[be].children[e].className != className){
                    document.body.children[be].children[e].style.opacity = "0.5"
                }
            }
        } else {document.body.children[be].style.opacity = "0.5"}
    }
}

function DeactivateOpacity(){
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for (let e = 0; e<document.body.children[be].children.length; e++) {
                document.body.children[be].children[e].style.opacity = "1"
            }
        }
        document.body.children[be].style.opacity = "1"
    }
}