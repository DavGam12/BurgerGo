let userLogged

// Save Variables every 0.1 seconeds
function SaveVariables(){
    localStorage.setItem("userLogged", userLogged)
}
// Load Variables every time you refresh the page
function LoadVariables(){
    userLogged = (localStorage.getItem("userLogged"))
}

window.addEventListener("load", LoadVariables)
window.setInterval(SaveVariables, 100)


// Divs
let menuDiv
let menuBody
let loginDiv
let signupDiv
let logoutDiv
let loginRequiredDiv
let bookDiv
// Icons
let closeMenu
let userIcon
let closeLogin
let closeSignup
let viewIcon
let hideIcon
let closeBook
// Buttons
let menuButton
let loginButton
let loginAcceptButton
let loginSignupButton
let signupButton
let signupAcceptButton
let signupLoginButton
let loginRequiredSignupButton
let loginRequiredCancelButton
let loginRequiredLoginButton
let bookButton
let bookAccept
// Others
let passwordInput
let profileMenuParagraph
let bookMenuParagraph


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")


    menuDiv = document.getElementsByClassName("menu-div")[0]
    menuBody = document.getElementsByClassName("menu-body")[0]
    loginDiv = document.getElementsByClassName("login-div")[0]
    signupDiv = document.getElementsByClassName("signup-div")[0]
    logoutDiv = document.getElementsByClassName("logout-div")[0]
    loginRequiredDiv = document.getElementsByClassName("login-required-div")[0]
    bookDiv = document.getElementsByClassName("book-div")[0]

    menuButton = document.getElementsByClassName("menu")[0].getElementsByTagName("button")[0]
    closeMenu = document.getElementsByClassName("close-menu")[0].getElementsByTagName("button")[0]
    closeLogin = document.getElementById("login-cancel")
    closeSignup = document.getElementById("signup-cancel")
    viewIcon = document.getElementsByClassName("view")
    hideIcon = document.getElementsByClassName("hide")
    closeBook = document.getElementsByClassName("book-close")[0]
    
    userIcon = document.getElementsByClassName("header")[0].getElementsByClassName("user")[0]
    loginButton = document.getElementById("login")
    loginAcceptButton = document.getElementById("login-accept")
    loginSignupButton = document.getElementById("login-signup")
    signupButton = document.getElementById("signup")
    signupAcceptButton = document.getElementById("signup-accept")
    signupLoginButton = document.getElementById("signup-login")
    loginRequiredSignupButton = document.getElementById("login-required-signup")
    loginRequiredCancelButton = document.getElementById("login-required-cancel")
    loginRequiredLoginButton = document.getElementById("login-required-login")
    bookButton = document.getElementsByClassName("book")[0].getElementsByTagName("button")[0]
    bookAccept = document.getElementById("book-accept")

    passwordInput = document.getElementsByClassName("password-field")
    profileMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[0]
    bookMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[1]


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
        if (userLogged != 'true') {
            loginButton.style.display = "block"
            signupButton.style.display = "block"
        }
        else {
            userIcon.getElementsByTagName("a")[0].click()
        }
    })

    profileMenuParagraph.addEventListener("click",()=>{
        if (userLogged != 'true') {
            loginRequiredDiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            SpecificEnable(loginRequiredDiv.className)
            ActivateOpacity(loginRequiredDiv.className, 0.5)
            menuDiv.style.opacity = 0.9
        }
        else {
            profileMenuParagraph.getElementsByTagName("a")[0].click()
        }
    })

    loginRequiredSignupButton.addEventListener("click",()=>{
        loginRequiredDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity(loginRequiredDiv.className)
        signupButton.click()
        menuDiv.style.opacity = 0.9
    })
    loginRequiredCancelButton.addEventListener("click",()=>{
        loginRequiredDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity(loginRequiredDiv.className)
    })
    loginRequiredLoginButton.addEventListener("click",()=>{
        loginRequiredDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity(loginRequiredDiv.className)
        loginButton.click()
        menuDiv.style.opacity = 0.9
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
        ActivateOpacity(loginDiv.className, 0.5)
    })
    closeLogin.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })
    loginAcceptButton.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        userLogged = true
        SaveVariables()
    })
    loginSignupButton.addEventListener("click",()=>{
        loginDiv.style.display = "none"
        signupDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        DeactivateOpacity()
        SpecificEnable(signupDiv.className)
        ActivateOpacity(signupDiv.className, 0.5)
        menuDiv.style.opacity = 0.9
    })

    signupButton.addEventListener("click",()=>{
        signupDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        loginButton.style.display = "none"
        signupButton.style.display = "none"
        SpecificEnable(signupDiv.className)
        ActivateOpacity(signupDiv.className, 0.5)
    })
    closeSignup.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })
    signupAcceptButton.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
        userLogged = true
        SaveVariables()
        userIcon.click()
    })
    signupLoginButton.addEventListener("click",()=>{
        signupDiv.style.display = "none"
        loginDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        DeactivateOpacity()
        SpecificEnable(loginDiv.className)
        ActivateOpacity(loginDiv.className, 0.5)
        menuDiv.style.opacity = 0.9
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

    bookButton.addEventListener("click",()=>{
        bookDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.overflow = "hidden"
        SpecificEnable(bookDiv.className)
        ActivateOpacity(bookDiv.className, 0.5)
    })
    bookMenuParagraph.addEventListener("click",()=>{
        closeMenu.click()
        bookButton.click()
    })
    closeBook.addEventListener("click",()=>{
        bookDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        DeactivateOpacity()
    })
    bookAccept.addEventListener("click",()=>{
        bookDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        DeactivateOpacity()
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

ActivateOpacity = (className, opacityNum) => {
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for (let e = 0; e<document.body.children[be].children.length; e++) {
                if (document.body.children[be].children[e].className != className){
                    document.body.children[be].children[e].style.opacity = opacityNum
                }
            }
        } else {document.body.children[be].style.opacity = opacityNum}
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