let user =
{
    id: (localStorage.getItem("user.id")),
    email: (localStorage.getItem("user.email")),
    firstName: (localStorage.getItem("user.firstName")),
    lastName: (localStorage.getItem("user.lastName")),
    phoneNumber: (localStorage.getItem("user.phoneNumber")),
    permission: (localStorage.getItem("user.permission")),
    logged: (localStorage.getItem("user.logged"))
}

// Save Variables every 0.1 seconeds
function SaveVariables(){
    localStorage.setItem("user.id", user.id)
    localStorage.setItem("user.email", user.email)
    localStorage.setItem("user.firstName", user.firstName)
    localStorage.setItem("user.lastName", user.lastName)
    localStorage.setItem("user.phoneNumber", user.phoneNumber)
    localStorage.setItem("user.permission", user.permission)
    localStorage.setItem("user.logged", user.logged)
}
// Load Variables every time you refresh the page
function LoadVariables(){
    user.id = (localStorage.getItem("user.id"))
    user.email = (localStorage.getItem("user.email"))
    user.firstName = (localStorage.getItem("user.firstName"))
    user.lastName = (localStorage.getItem("user.lastName"))
    user.phoneNumber = (localStorage.getItem("user.phoneNumber")),
    user.permission = (localStorage.getItem("user.permission"))
    user.logged = (localStorage.getItem("user.logged"))
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
let signUpForm
let logInForm


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    LoadVariables()
    window.setInterval(SaveVariables, 100)
    window.setInterval(WindowHeight, 10)

    if (user.logged === null) {user.logged = 'null'}


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
    orderButton = document.getElementsByClassName("make-order")[0].getElementsByTagName("button")[0]
    dataUsageButton = document.getElementsByClassName("data-usage-button")[0]

    passwordInput = document.getElementsByClassName("password-field")
    profileMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[0]
    orderMenuParagraph = document.getElementsByClassName("other-categories")[0].getElementsByTagName("p")[1]
    signUpForm = document.getElementById("signup-form")
    logInForm = document.getElementById("login-form")

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
        if (user.logged.toString() != 'true') {
            loginButton.style.display = "block"
            signupButton.style.display = "block"
        }
        else {userIcon.getElementsByTagName("a")[0].click()}
    })

    profileMenuParagraph.addEventListener("click",()=>{
        if (user.logged.toString() != 'true')
        {
            loginRequiredDiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            SpecificEnable(loginRequiredDiv.className)
            ActivateOpacity(loginRequiredDiv.className, 0.5)
            menuDiv.style.opacity = 0.9
        }
        else {profileMenuParagraph.getElementsByTagName("a")[0].click()}
    })

    orderButton.addEventListener("click",()=>{
        if (user.logged.toString() != 'true')
        {
            loginRequiredDiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            SpecificEnable(loginRequiredDiv.className)
            ActivateOpacity(loginRequiredDiv.className, 0.5)
            menuDiv.style.opacity = 0.9
        }
        else if (user.permission != "null") {alert("Employees do not have access to the Order section")}
        else {orderButton.parentElement.getElementsByTagName("a")[0].click()}
    })

    orderMenuParagraph.addEventListener("click",()=>{
        if (user.logged.toString() != 'true')
        {
            loginRequiredDiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            SpecificEnable(loginRequiredDiv.className)
            ActivateOpacity(loginRequiredDiv.className, 0.5)
            menuDiv.style.opacity = 0.9
        }
        else if (user.permission != "null") {alert("Employees do not have access to the Order section")}
        else {orderMenuParagraph.getElementsByTagName("a")[0].click()}
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


    loginButton.addEventListener("click",()=>{
        loginDiv.style.display = "flex"
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
    logInForm.addEventListener("submit", async()=>{
        objecCurrentInputValues =
        {
            _email: document.getElementById("login-email").value,
            _password: document.getElementById("login-password").value
        }
        
        await logInFetch(objecCurrentInputValues._email, objecCurrentInputValues._password).then(userIcon.click())
        DeactivateOpacity()
        loginDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
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
        signupDiv.style.visibility = "hidden"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        DeactivateOpacity()
    })
   

    signUpForm.addEventListener("submit", async(e)=>{
        console.log(e.target)
        console.log(signupAcceptButton)

        if (document.getElementById("signup-password").value === document.getElementById("signup-repeatpassword").value)
        {
            objecCurrentInputValues =
            {
                _firstName: document.getElementById("signup-firstname").value,
                _lastName: document.getElementById("signup-lastname").value,
                _email: document.getElementById("signup-email").value,
                _phoneNumber: document.getElementById("signup-phonenumber").value,
                _password: document.getElementById("signup-password").value
            }
            await signUpFetch(objecCurrentInputValues)
            .then(userCreation(objecCurrentInputValues._email, objecCurrentInputValues._password, "customer"))
        }
        else {alert("The Password doesn't match the Repeat Password.")}

        DeactivateOpacity()
        signupDiv.style.display = "none"
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        SaveVariables()
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

DeactivateOpacity = async() => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                ea.style.opacity = "1"
            })
        }
        e.style.opacity = "1"
    })
}

const WindowHeight = () => {
    if (document.body.clientHeight - Number.parseInt(document.body.children[1].lastElementChild.style.paddingBottom)<900) {
        document.body.children[1].lastElementChild.style.paddingBottom = 500 + "px" // window.outerHeight-document.body.clientHeight
    } else {document.body.children[1].lastElementChild.style.paddingBottom = "0px"}
}

const userCreation = async(currentEmail, currentPassword, perms) => {
    if (perms === "customer")
    {
        const data = await findAllCustomersFetch()
        Array.from(data.filter(d => d._email === currentEmail && d._password === currentPassword)).forEach(e =>{
            user.id = e._customerID
            user.email = e._email
            user.firstName = e._firstName
            user.lastName = e._lastName
            user.phoneNumber = null
            user.permission = null
            user.logged = true
        })
    }
    else
    {
        const data = await findAllEmployeesFetch()
        Array.from(data.filter(d => d._email === currentEmail && d._password === currentPassword)).forEach(e =>{
            user.id = e._employeeID
            user.email = e._email
            user.firstName = e._firstName
            user.lastName = e._lastName
            user.phoneNumber = e_phoneNumber
            user.permission = e._permission
            user.logged = true
        })
    }

    SaveVariables()
    userIcon.click()
}




let objecCurrentInputValues

/* FETCH */

const baseSignUpURL = "http://localhost:8080/BurgerGo/Controller?action=customers.add"
const baseLogInURL = "http://localhost:8080/BurgerGo/Controller?action=customers.login"
const baseCustomersURL = "http://localhost:8080/BurgerGo/Controller?action=customers.find_all"
const baseEmployeesURL = "http://localhost:8080/BurgerGo/Controller?action=employees.find_all"

const findAllCustomersFetch = async() => {
    const rawRes = await fetch(baseCustomersURL)
    const rawData = await rawRes.json()
    return await rawData
}

const findAllEmployeesFetch = async() => {
    const rawRes = await fetch(baseEmployeesURL)
    const rawData = await rawRes.json()
    return await rawData
}

const signUpFetch = async(obj) => {
    await fetch(baseSignUpURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
}

const logInFetch = async(currentEmail, currentPassword) => {
    const currentURL = new URL(baseLogInURL)
    currentURL.searchParams.set("email", currentEmail)
    currentURL.searchParams.set("password", currentPassword)

    const rawRes = await fetch(currentURL)
    const rawData = await rawRes.json()
    console.log(rawData)
    switch (rawData)
    {
        case 1:
        {
            await userCreation(objecCurrentInputValues._email, objecCurrentInputValues._password, "customer")
            break
        }
        case 2:
        {
            await userCreation(objecCurrentInputValues._email, objecCurrentInputValues._password, "employee")
            break
        }
        default:
        {
            alert("The Email and the Password doesn't match")
            throw new Error("The Email and the Password doesn't match")
        }
    }
}
