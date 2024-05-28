const ORDER_STATES =
{
    in_the_making: "in the making",
    on_the_way: "on the way",
    delivered: "delivered"
}

// General
let optionButtons
let hr
// Divs
let accountOption
let pastordersOption
let deleteAccountDiv
let pastorderEmptyDiv
// Buttons
let logoutButton
let logoutAcceptButton
let logoutCancelButton
let staffButtons
let deleteAccountButton
let deleteAccountCancel
let deleteAccountAccept
// Texts
let userFirstNameText
let userLastNameText
let userEmailText
let userPhoneNumberText


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    optionButtons = document.getElementsByClassName("profile-options")[0].getElementsByTagName("button")
    hr = document.getElementsByTagName("hr")

    accountOption = document.getElementsByClassName("account-option")[0]
    pastordersOption = document.getElementById("pastorders-option")
    deleteAccountDiv = document.getElementsByClassName("delete-account-div")[0]
    pastorderEmptyDiv = document.getElementsByClassName("pastorders-empty-div")[0]

    logoutButton = document.getElementById("logout")
    logoutAcceptButton = document.getElementById("logout-accept")
    logoutCancelButton = document.getElementById("logout-cancel")
    staffButtons = document.getElementsByClassName("staff-buttons")[0].getElementsByTagName("button")
    deleteAccountButton = document.getElementsByClassName("delete-account")[0]
    deleteAccountCancel = document.getElementsByClassName("delete-account-cancel")[0]
    deleteAccountAccept = document.getElementsByClassName("delete-account-accept")[0]

    userFirstNameText = document.getElementsByClassName("user-first-name")[0]
    userLastNameText = document.getElementsByClassName("user-last-name")[0]
    userEmailText = document.getElementsByClassName("user-email")[0]
    userPhoneNumberText = document.getElementsByClassName("user-phone-number")[0]

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


    deleteAccountButton.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        deleteAccountDiv.style.display = "flex"
        deleteAccountDiv.style.pointerEvents = "all"
    })
    deleteAccountCancel.addEventListener("click", () => {
        document.body.style.overflow = "visible"
        document.body.style.pointerEvents = "all"
        deleteAccountDiv.style.display = "none"
    })
    deleteAccountAccept.addEventListener("click", async() => {
        const a = document.createElement("a")
        a.setAttribute("href", "./main.html")
        let currentOrders = await pastOrdersFetch()
        Array.from(await currentOrders).forEach(async order => {
            let currentDetails = await currentOrderDetailsFetch(order._orderID)
            Array.from(await currentDetails).forEach(async detail => {
                await detailDeletePostFetch(detail)
            })
            await orderDeletePostFetch(order)
        })
        const currentUser =
        {
            _customerID: user.id
        }
        await accountDeletePostFetch(currentUser)
        .then(emptyUser())
        .then(a.click())
    })


    FillUserData()
})

const pastOrderEmpty = () => {
    if (pastordersOption.childElementCount>1) {pastorderEmptyDiv.style.display = "none"}
    else {pastorderEmptyDiv.style.display = "flex "}
}

const emptyUser = () => {
    user.id = null
    user.email = null
    user.firstName = null
    user.lastName = null
    user.phoneNumber = null
    user.logged = false
    user.permission = null
    SaveVariables()
    LoadVariables()
}

function FillUserData(){
    userFirstNameText.textContent = user.firstName
    userLastNameText.textContent = user.lastName
    userEmailText.textContent = user.email
    if (user.phoneNumber === null) {userPhoneNumberText.textContent = "Not Given"}
    else {userPhoneNumberText.textContent = user.phoneNumber}
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
const currentOrderURL = `http://localhost:8080/BurgerGo/Controller?action=orders.find_specific&order_state=${ORDER_STATES.in_the_making}&customer_id=${user.id}`
const currentOrderDetailsURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_specific_order&order_id="
const currentProductURL = "http://localhost:8080/BurgerGo/Controller?action=products.find_specific&product_id="
const reorderOrderPostURL = "http://localhost:8080/BurgerGo/Controller?action=orders.add"
const reorderDetailPostURL = "http://localhost:8080/BurgerGo/Controller?action=details.add"
const accountDeletePostURL = "http://localhost:8080/BurgerGo/Controller?action=customers.delete"
const orderDeletePostURL = "http://localhost:8080/BurgerGo/Controller?action=orders.delete"
const detailDeletePostURL = "http://localhost:8080/BurgerGo/Controller?action=details.delete"

const fetchData = async() => {
    const pastOrdersRes = await fetch(pastOrdersURL)
    const pastOrdersData = await pastOrdersRes.json()
    console.log("pastOrdersData --> ", pastOrdersData)
    printPastOrders(pastOrdersData)
}

const pastOrdersFetch = async() => {
    const pastOrdersRes = await fetch(pastOrdersURL)
    const pastOrdersData = await pastOrdersRes.json()
    return pastOrdersData
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

const reorderOrderPostFetch = async(obj) => {
    await fetch(reorderOrderPostURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        }
    )
}

const reorderDetailPostFetch = async(obj) => {
    await fetch(reorderDetailPostURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        }
    )
}

const accountDeletePostFetch = async(obj) => {
    await fetch(accountDeletePostURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        }
    )
}
const orderDeletePostFetch = async(obj) => {
    await fetch(orderDeletePostURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        }
    )
}

const detailDeletePostFetch = async(obj) => { 
    await fetch(detailDeletePostURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        }
    )
}


const printPastOrders = (data) => {
    Array.from(data).forEach(async order => {
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

        Array.from(await currentOrderDetails).forEach(async detail => {
            let currentProduct
            currentProduct = await currentProductFetch(detail._productID).then(product => currentProduct = product)

            const productDiv = await productsPosition.appendChild(document.createElement("div"))
            productDiv.classList.add("pastorder-product")

            const nameSpan = productDiv.appendChild(document.createElement("span"))
            nameSpan.classList.add("pastorder-product-name")
            nameSpan.textContent = currentProduct._productName

            const priceQuantityInfoDiv = productDiv.appendChild(document.createElement("div"))
            priceQuantityInfoDiv.classList.add("pastorder-price-quantity-info")
            const priceSpan = priceQuantityInfoDiv.appendChild(document.createElement("span"))
            priceSpan.classList.add("pastorder-product-price")
            priceSpan.textContent = detail._detailPrice.toFixed(2)+"€"

            const quantitySpan = priceQuantityInfoDiv.appendChild(document.createElement("div"))
            quantitySpan.classList.add("pastorder-product-quantity")
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
    pastOrderEmpty()
}

fetchData()
