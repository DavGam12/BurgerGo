const ORDER_STATES =
{
    in_the_making: "in the making",
    on_the_way: "on the way",
    delivered: "delivered"
}

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

    accountOption = document.getElementById("account-option")
    pastordersOption = document.getElementById("pastorders-option")

    logoutButton = document.getElementById("logout")
    logoutAcceptButton = document.getElementById("logout-accept")
    logoutCancelButton = document.getElementById("logout-cancel")
    staffButtons = document.getElementsByClassName("staff-buttons")[0].getElementsByTagName("button")

    userFirstNameText = document.getElementsByClassName("user-firstname")[0]

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
        FillUserData()
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

function FillUserData(name){
    userFirstNameText.textContent = name
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



/* FETCH */
const pastOrdersURL = `http://localhost:8080/BurgerGo/Controller?action=orders.find_specific_past_orders&order_state=${ORDER_STATES.in_the_making}&customer_id=${user.id}`
const currentOrderDetailsURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_specific_order&order_id="
const currentProductURL = "http://localhost:8080/BurgerGo/Controller?action=products.find_specific&product_id="

const fetcData = async() => {
    const pastOrdersRes = await fetch(pastOrdersURL)
    const pastOrdersData = await pastOrdersRes.json()
    console.log("pastOrdersData --> ", pastOrdersData)
    printPastOrders(pastOrdersData)
}

const currentOrderDetailsFetch = async(id) => {
    const currentOrderDetailsRes = await fetch(currentOrderDetailsURL.concat(id))
    const currentOrderDetailsData = await currentOrderDetailsRes.json()
    console.log("currentOrderDetailsData --> ", currentOrderDetailsData)
    return currentOrderDetailsData
}

const currentProductFetch = async(id) => {
    const currentProductRes = await fetch(currentProductURL.concat(id))
    const currentProductData = await currentProductRes.json()
    console.log("currentProductData --> ", currentProductData)
    return currentProductData
}

const printPastOrders = (data) => {
    Array.from(data).forEach(order => {
        let currentOrderDetails
        currentOrderDetails = currentOrderDetailsFetch(order._orderID).then(details => currentOrderDetails = details)

        const pastOrderDiv = pastordersOption.appendChild(document.createElement("div"))
        pastOrderDiv.classList.add("pastorder")

        const pricePosition = pastOrderDiv.appendChild(document.createElement("div"))
        pricePosition.classList.add("price-position")
        pricePosition.textContent = "Price: "
        const pastOrderPriceSpan = pricePosition.appendChild(document.createElement("span"))
        pastOrderPriceSpan.classList.add("pastorder-price")
        pastOrderPriceSpan.textContent = order._orderPrice.toFixed(2)+"€"

        const productsPosition = pastOrderDiv.appendChild(document.createElement("div"))
        productsPosition.classList.add("products-position")

        Array.from(currentOrderDetails).forEach(detail => {
            let currentProduct
            currentProduct = currentProductFetch(detail._productID).then(product => currentProduct = product)

            const mainDiv = productsPosition.appendChild(document.createElement("div"))
            mainDiv.classList.add("current-product")

            const mainP = mainDiv.appendChild(document.createElement("p"))

            const nameSpan = mainP.appendChild(document.createElement("span"))
            nameSpan.classList.add("current-product-name")
            nameSpan.textContent = currentProduct._productName

            const priceSpan = mainP.appendChild(document.createElement("span"))
            priceSpan.classList.add("current-product-price")
            priceSpan.textContent = detail._detailPrice

            const quantityDiv = mainDiv.appendChild(document.createElement("div"))
            quantityDiv.classList.add("current-product-quantity-div")
            const quantitySpan = quantityDiv.appendChild(document.createElement("div"))
            quantitySpan.classList.add("current-product-quantity-info")
            quantitySpan.textContent = detail._productQuantity
        })

        const datePosition = pastOrderDiv.appendChild(document.createElement("div"))
        datePosition.classList.add("date-position")
        const dateParagraph = datePosition.appendChild(document.createElement("p"))
        dateParagraph.textContent = "Date: "
        const dateSpan = dateParagraph.appendChild(document.createElement("span"))
        dateSpan.classList.add("pastorder-date")
        dateSpan.textContent = order._orderDate

        const stateParagraph = datePosition.appendChild(document.createElement("p"))
        stateParagraph.textContent = "State: "
        const stateSpan = stateParagraph.appendChild(document.createElement("span"))
        stateSpan.classList.add("pastorder-state")
        stateSpan.textContent = order._orderState
    })
}

fetcData()
