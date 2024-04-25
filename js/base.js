
let userLogged = false

// Divs
let menuDiv
let menuBody
let loginDiv
let signupDiv
let logoutDiv
// Icons
let closeMenu
let userIcon
let closeLogin
let closeSignup
let viewIcon
let hideIcon
// Buttons
let menuButton
let loginButton
let loginAcceptButton
let loginSignupButton
let signupButton
let signupAcceptButton
let signupLoginButton
let logoutButton
let logoutAcceptButton
let logoutCancelButton
// Inputs
let passwordInput



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")


    menuDiv = document.getElementsByClassName("menu-div")[0]
    menuBody = document.getElementsByClassName("menu-body")[0]
    loginDiv = document.getElementsByClassName("login-div")[0]
    signupDiv = document.getElementsByClassName("signup-div")[0]
    logoutDiv = document.getElementsByClassName("logout-div")[0]

    menuButton = document.getElementsByClassName("menu")[0].getElementsByTagName("button")[0]
    closeMenu = document.getElementsByClassName("close-menu")[0].getElementsByTagName("button")[0]
    closeLogin = document.getElementById("login-cancel")
    closeSignup = document.getElementById("signup-cancel")
    viewIcon = document.getElementsByClassName("view")
    hideIcon = document.getElementsByClassName("hide")
    
    userIcon = document.getElementsByClassName("header")[0].getElementsByClassName("user")[0]
    loginButton = document.getElementById("login")
    loginAcceptButton = document.getElementById("login-accept")
    loginSignupButton = document.getElementById("login-signup")
    signupButton = document.getElementById("signup")
    signupAcceptButton = document.getElementById("signup-accept")
    signupLoginButton = document.getElementById("signup-login")
    logoutButton = document.getElementById("logout")
    logoutAcceptButton = document.getElementById("logout-accept")
    logoutCancelButton = document.getElementById("logout-cancel")

    passwordInput = document.getElementsByClassName("password-field")


    menuButton.addEventListener("click",()=>{
        menuDiv.style.transform = "translateY(0px) translateZ(0px)"
        menuDiv.style.scale = "1"
        menuDiv.style.display = "block"
        menuDiv.style.animation = "menuSlide 1s"
        menuBody.style.animation = "menuBodySlide 1s"
    })
    closeMenu.addEventListener("click",()=>{
        menuDiv.style.transform = "translateY(-800px) translateZ(-800px)"
        menuDiv.style.animation = "menuClose 1s"
        menuBody.style.animation = "none"
    })

    userIcon.addEventListener("click",()=>{
        if (!userLogged) {
            loginButton.style.display = "block"
            signupButton.style.display = "block"
        }
        else {
            userIcon.getElementsByTagName("a")[0].click()
        }
    })


    document.body.children[1].addEventListener("click",()=>{
        loginButton.style.display = "none"
        signupButton.style.display = "none"
    })
    loginButton.addEventListener("mouseover",()=>{
        loginButton.style.display = "block"
        signupButton.style.display = "block"
    })
    loginButton.addEventListener("mouseout",()=>{
        loginButton.style.display = "none"
        signupButton.style.display = "none"
    })
    signupButton.addEventListener("mouseover",()=>{
        loginButton.style.display = "block"
        signupButton.style.display = "block"
    })
    signupButton.addEventListener("mouseout",()=>{
        loginButton.style.display = "none"
        signupButton.style.display = "none"
    })


    // User Logs
    loginButton.addEventListener("click",()=>{
        loginDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        loginButton.style.display = "none"
        signupButton.style.display = "none"
        SpecificEnable(loginDiv.className)
        ActivateOpacity(loginDiv.className)
    })
    closeLogin.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })/*
    loginAcceptButton.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        userLogged = true
    })*/
    loginSignupButton.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        signupDiv.style.display = "flex"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        SpecificEnable(signupDiv.className)
        ActivateOpacity(signupDiv.className)
    })

    signupButton.addEventListener("click",()=>{
        signupDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        loginButton.style.display = "none"
        signupButton.style.display = "none"
        SpecificEnable(signupDiv.className)
        ActivateOpacity(signupDiv.className)
    })
    closeSignup.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })/*
    signupAcceptButton.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        userLogged = true
    })*/
    signupLoginButton.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        loginDiv.style.display = "flex"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        SpecificEnable(loginDiv.className)
        ActivateOpacity(loginDiv.className)
    })


    viewIcon[0].addEventListener("click",()=>{
        viewIcon[0].style.display = "none"
        hideIcon[0].style.display = "block"
        passwordInput[0].type = "password"
    })
    viewIcon[1].addEventListener("click",()=>{
        viewIcon[1].style.display = "none"
        hideIcon[1].style.display = "block"
        passwordInput[1].type = "password"
    })
    viewIcon[2].addEventListener("click",()=>{
        viewIcon[2].style.display = "none"
        hideIcon[2].style.display = "block"
        passwordInput[2].type = "password"
    })

    hideIcon[0].addEventListener("click",()=>{
        hideIcon[0].style.display = "none"
        viewIcon[0].style.display = "block"
        passwordInput[0].type = "text"
    })
    hideIcon[1].addEventListener("click",()=>{
        hideIcon[1].style.display = "none"
        viewIcon[1].style.display = "block"
        passwordInput[1].type = "text"
    })
    hideIcon[2].addEventListener("click",()=>{
        hideIcon[2].style.display = "none"
        viewIcon[2].style.display = "block"
        passwordInput[2].type = "text"
    })
})


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
