let userLogged

// Save Variables every 0.1 seconeds
function SaveVariables(){
    localStorage.setItem("userLogged", userLogged)
}
// Load Variables every time you refresh the page
function LoadVariables(){
    userLogged = (localStorage.getItem("userLogged"))
}



// Divs
let menuDiv
let menuBody
let loginDiv
let signupDiv
let logoutDiv
let loginRequiredDiv
let dataUsageDiv
// Icons
let closeMenu
let userIcon
let closeLogin
let closeSignup
let viewIcon
let hideIcon
let closeDataUsage
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
let orderButton
let dataUsageButton
// Others
let passwordInput
let profileMenuParagraph
let orderMenuParagraph
let innerCarouselContainer


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    LoadVariables()
    window.setInterval(SaveVariables, 100)
    window.setInterval(WindowHeight, 10)

    if (userLogged === null) {userLogged = 'null'}


    menuDiv = document.getElementsByClassName("menu-div")[0]
    menuBody = document.getElementsByClassName("menu-body")[0]
    loginDiv = document.getElementsByClassName("login-div")[0]
    signupDiv = document.getElementsByClassName("signup-div")[0]
    logoutDiv = document.getElementsByClassName("logout-div")[0]
    loginRequiredDiv = document.getElementsByClassName("login-required-div")[0]
    dataUsageDiv = document.getElementsByClassName("data-usage-div")[0]

    closeMenu = document.getElementsByClassName("close-menu")[0].getElementsByTagName("button")[0]
    userIcon = document.getElementsByClassName("header")[0].getElementsByClassName("user")[0]
    closeLogin = document.getElementById("login-cancel")
    closeSignup = document.getElementById("signup-cancel")
    viewIcon = document.getElementsByClassName("view")
    hideIcon = document.getElementsByClassName("hide")
    closeDataUsage = document.getElementsByClassName("data-usage-close")[0]
    
    menuButton = document.getElementsByClassName("menu")[0].getElementsByTagName("button")[0]
    loginButton = document.getElementById("login")
    loginAcceptButton = document.getElementById("login-accept")
    loginSignupButton = document.getElementById("login-signup")
    signupButton = document.getElementById("signup")
    signupAcceptButton = document.getElementById("signup-accept")
    signupLoginButton = document.getElementById("signup-login")
    loginRequiredSignupButton = document.getElementById("login-required-signup")
    loginRequiredCancelButton = document.getElementById("login-required-cancel")
    loginRequiredLoginButton = document.getElementById("login-required-login")
    orderButton = document.getElementsByClassName("make-order")[0]
    dataUsageButton = document.getElementsByClassName("data-usage-button")[0]

    passwordInput = document.getElementsByClassName("password-field")
    profileMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[0]
    orderMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[1]


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
        if (userLogged.toString() != 'true') {
            loginButton.style.display = "block"
            signupButton.style.display = "block"
        }
        else {
            userIcon.getElementsByTagName("a")[0].click()
        }
    })

    profileMenuParagraph.addEventListener("click",()=>{
        if (userLogged.toString() != 'true') {
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

    orderButton.addEventListener("click",()=>{
        if (userLogged.toString() != 'true')
            {
                loginRequiredDiv.style.display = "flex"
                document.body.style.overflow = "hidden"
                document.body.style.pointerEvents = "none"
                SpecificEnable(loginRequiredDiv.className)
                ActivateOpacity(loginRequiredDiv.className, 0.5)
                menuDiv.style.opacity = 0.9
            }
            else 
            {
                orderButton.getElementsByTagName("a")[0].click()
            }
    })

    orderMenuParagraph.addEventListener("click",()=>{
        if (userLogged.toString() != 'true')
            {
                loginRequiredDiv.style.display = "flex"
                document.body.style.overflow = "hidden"
                document.body.style.pointerEvents = "none"
                SpecificEnable(loginRequiredDiv.className)
                ActivateOpacity(loginRequiredDiv.className, 0.5)
                menuDiv.style.opacity = 0.9
            }
            else 
            {
                orderMenuParagraph.getElementsByTagName("a")[0].click()
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


    dataUsageButton.addEventListener("click", () => {
        dataUsageDiv.style.display = "flex"
        closeSignup.click()
        signupDiv.style.display = "flex"
        document.body.style.overflow = "hidden"
        SpecificEnable(dataUsageDiv.className)
        ActivateOpacity(dataUsageDiv.className, 0.8)
    })
    closeDataUsage.addEventListener("click", () => {
        dataUsageDiv.style.display = "none"
        signupDiv.style.opacity = 1
        signupButton.click()
    })

})


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

WindowHeight = () => {
    if (document.body.clientHeight - Number.parseInt(document.body.children[1].lastElementChild.style.paddingBottom)<900) {
        document.body.children[1].lastElementChild.style.paddingBottom = 500 + "px" // window.outerHeight-document.body.clientHeight
    } else {document.body.children[1].lastElementChild.style.paddingBottom = "0px"}
}