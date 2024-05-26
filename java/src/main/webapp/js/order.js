const ORDER_STATES =
{
    in_the_making: "in the making",
    on_the_way: "on the way",
    delivered: "delivered"
}
let currentOrder = {}
/* Details structure to save each element*/
const structure =
[
    {
        mainDiv: null,
        mainP: null,
        nameSpan: null,
        priceSpan: null,
        quantityDiv: null,
        quantitySpan: null,
        quantityLess: null,
        quantityMore: null,
        delete: null
    }
]

let productClick
productClick = localStorage.getItem("productClick")

let product
let productCategoriesButtons = []
let productCategoriesHr = []
let productCategoriesDivs = []
let addToOrderButton = []
let productQuantity = []
let productImg = []
let productDescriptionDiv = []
let allergiesInfoButton = []

let productsDiv
let currentOrderPriceText
let closeProductDescription
let allergiesInfoDiv
let closeAllergiesInfoDiv
let buyDiv
let buyButton
let buyCancelButton

let productCategorySelected
let currentOrderPrice
let productSearch
let searchInput

    /* Current Order Products Info */
let currentOrderProduct = [
    {
        existence: false,
        quantity: 0,
        name: null,
        unitPrice: 0,
        totalPrice: 0,
        structure: 
        {
            mainDiv: null,
            mainP: null,
            nameSpan: null,
            priceSpan: null,
            quantityDiv: null,
            quantitySpan: null,
            quantityLess: null,
            quantityMore: null,
            delete: null
        }
    }
]


document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM fully loaded and parsed")

    product = document.getElementsByClassName("product")
    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("product-categories-divs")[0].children
    addToOrderButton = document.getElementsByClassName("add-to-order")
    productQuantity = document.getElementsByClassName("product-quantity")
    productImg = document.getElementsByClassName("product-img")
    productDescriptionDiv = document.getElementsByClassName("product-description-div")
    allergiesInfoButton = document.getElementsByClassName("allergies-info-button")

    productsDiv = document.getElementsByClassName("products-position")[0]
    currentOrderPriceText = document.getElementsByClassName("current-price")[0]
    closeProductDescription = document.getElementsByClassName("product-description-close")
    allergiesInfoDiv = document.getElementsByClassName("allergies-info-div")[0]
    closeAllergiesInfoDiv = document.getElementsByClassName("allergies-info-div-close")[0]
    buyDiv = document.getElementsByClassName("buy-div")[0]
    buyButton = document.getElementsByClassName("current-buy")[0]
    buyCancelButton = document.getElementsByClassName("card-cancel")[0]

    productCategorySelected = document.getElementById("current-category")
    productSearch = document.getElementsByClassName("product-search")[0]
    searchInput = document.getElementById("search-input")


    /* CATEGORIES BUTTONS EVENT LISTENERS */
    for (let button = 0; button<productCategoriesButtons.length; button++) {
        productCategoriesHr[button] = productCategoriesButtons[button].getElementsByTagName("hr")[0]

        productCategoriesButtons[button].addEventListener("mouseover",()=>{
            productCategoriesHr[button].style.animation = "hrWidth 1.5s"
            productCategoriesHr[button].style.visibility = "visible"
            productCategoriesHr[button].style.width = "80%"
        })
        productCategoriesButtons[button].addEventListener("mouseout",()=>{
            if (productCategoriesDivs[button].style.display != "flex"){
                productCategoriesHr[button].style.animation = "none"
                productCategoriesHr[button].style.visibility = "hidden"
            }
        })
        productCategoriesButtons[button].addEventListener("click",()=>{
            productSearch.style.visibility = "visible"
            productSearch.getElementsByTagName("input")[0].value = ""
            productCategoriesDivs[button].style.display = "flex"

            for (let e = 0; e<productCategoriesDivs[button].children.length; e++) {
                productCategoriesDivs[button].children[e].style.display = "flex"
            }
            
            for (let e = 0; e<productCategoriesHr.length; e++) {
                if (e != button) {
                    productCategoriesDivs[e].style.display = "none"
                    productCategoriesHr[e].style.animation = "none"
                    productCategoriesHr[e].style.visibility = "hidden"
                }
            }
            
        })
        productCategorySelected.addEventListener("change",()=>{
            productSearch.style.visibility = "visible"
            productSearch.getElementsByTagName("input")[0].value = ""
            productCategoriesDivs[productCategorySelected.value].style.display = "flex"

            for (let e = 0; e<productCategoriesDivs[button].children.length; e++) {
                productCategoriesDivs[button].children[e].style.display = "flex"
            }
            
            for (let e = 0; e<productCategoriesHr.length; e++) {
                if (e != productCategorySelected.value) {
                    productCategoriesDivs[e].style.display = "none"
                    productCategoriesHr[e].style.animation = "none"
                    productCategoriesHr[e].style.visibility = "hidden"
                }
            }
        })
    }


    searchInput.addEventListener("change", () => {
        Array.from(product).forEach(e => {
            if (!e.children[0].children[1].textContent.toLowerCase().includes(searchInput.value.toLowerCase()))
            {
                e.style.display = "none"
            }
            else
            {
                e.style.display = "flex"
            }
        })
    })


    closeAllergiesInfoDiv.addEventListener("click", () => {
        allergiesInfoDiv.style.display = "none"
    })



    buyButton.addEventListener("click", () => {
        buyDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.overflow = "hidden"
        SpecificEnable(buyDiv.className)
        ActivateOpacity(buyDiv.className, 0.7)
    })
    buyCancelButton.addEventListener("click", () => {
        buyDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        DeactivateOpacity()
    })
    


            /* automate current products */
    for (let b = 0; b<addToOrderButton.length; b++) {
        currentOrderProduct[b] = 
        {
            existence: false,
            quantity: 0,
            name: null,
            unitPrice: 0,
            totalPrice: 0,
            structure: 
            {
                mainDiv: null,
                mainP: null,
                nameSpan: null,
                priceSpan: null,
                quantityDiv: null,
                quantitySpan: null,
                quantityLess: null,
                quantityMore: null,
                delete: null
            }
        }

        addToOrderButton[b].addEventListener("click",()=>{

            if (!currentOrderProduct[b].existence)
            {
                
                currentOrderProduct[b].existence = true
                currentOrderProduct[b].name = addToOrderButton[b].parentElement.parentElement.children[0].children[0].textContent
                currentOrderProduct[b].quantity = Number.parseInt(addToOrderButton[b].parentElement.children[0].value)
                currentOrderProduct[b].unitPrice = Number.parseFloat(addToOrderButton[b].parentElement.parentElement.children[0].children[2].textContent.replace("€",""))
                currentOrderProduct[b].totalPrice = currentOrderProduct[b].unitPrice*currentOrderProduct[b].quantity

                currentOrderProduct[b].structure.mainDiv = productsDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.mainDiv.setAttribute("class","current-product")

                currentOrderProduct[b].structure.mainP = currentOrderProduct[b].structure.mainDiv.appendChild(document.createElement("p"))

                currentOrderProduct[b].structure.nameSpan = currentOrderProduct[b].structure.mainP.appendChild(document.createElement("span"))
                currentOrderProduct[b].structure.nameSpan.setAttribute("class","current-product-name")

                currentOrderProduct[b].structure.priceSpan = currentOrderProduct[b].structure.mainP.appendChild(document.createElement("span"))
                currentOrderProduct[b].structure.priceSpan.setAttribute("class","current-product-price")

                
                currentOrderProduct[b].structure.quantityDiv = currentOrderProduct[b].structure.mainDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.quantityDiv.setAttribute("class","current-product-quantity-div")

                currentOrderProduct[b].structure.quantityLess = currentOrderProduct[b].structure.quantityDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.quantityLess.setAttribute("class","current-product-quantity-less")
                let newQuantityLessImg = currentOrderProduct[b].structure.quantityLess.appendChild(document.createElement("img"))
                newQuantityLessImg.setAttribute("src","../Images/less.png")
                newQuantityLessImg.setAttribute("alt","less")

                currentOrderProduct[b].structure.quantitySpan = currentOrderProduct[b].structure.quantityDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.quantitySpan.setAttribute("class","current-product-quantity-info")

                currentOrderProduct[b].structure.quantityMore = currentOrderProduct[b].structure.quantityDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.quantityMore.setAttribute("class","current-product-quantity-more")
                let newQuantityMoreImg = currentOrderProduct[b].structure.quantityMore.appendChild(document.createElement("img"))
                newQuantityMoreImg.setAttribute("src","../Images/more.png")
                newQuantityMoreImg.setAttribute("alt","more")
                
                currentOrderProduct[b].structure.delete = currentOrderProduct[b].structure.mainDiv.appendChild(document.createElement("div"))
                currentOrderProduct[b].structure.delete.setAttribute("class","delete-current-product")
                let newImgDelete = currentOrderProduct[b].structure.delete.appendChild(document.createElement("img"))
                newImgDelete.setAttribute("src","../Images/delete.png")
                newImgDelete.setAttribute("alt","delete")

                currentOrderProduct[b].structure.quantityLess.addEventListener("click", () =>
                    {
                        if (currentOrderProduct[b].quantity>1)
                            {
                                currentOrderProduct[b].quantity--
                                CurrentOrderProductUpdate(currentOrderProduct[b])
                                CurrentOrderPriceFunction()
                            }
                    })
                currentOrderProduct[b].structure.quantityMore.addEventListener("click", () =>
                    {
                        if (currentOrderProduct[b].quantity<100) 
                        {
                            currentOrderProduct[b].quantity++
                            CurrentOrderProductUpdate(currentOrderProduct[b])
                            CurrentOrderPriceFunction()
                        }
                    })
                currentOrderProduct[b].structure.delete.addEventListener("click", () => // current added product deletion
                    {
                        currentOrderProduct[b].structure.delete.parentElement.remove()
                        currentOrderProduct[b].existence = false
                        CurrentOrderPriceFunction()
                        EmptyOrder()
                    }
            )} 
            else 
            {
                if (currentOrderProduct[b].quantity<100) {
                    currentOrderProduct[b].quantity += Number.parseInt(addToOrderButton[b].parentElement.children[0].value)
                }
            }

            EmptyOrder()
            CurrentOrderProductUpdate(currentOrderProduct[b])
            CurrentOrderPriceFunction()

            addToOrderButton[b].parentElement.children[0].value = 1

        })

    }

    EmptyOrder()

    if (productClick.toString() != 'null') {
        let currentClick = document.getElementById(productClick)
        currentClick.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[0].click()
        currentClick.click()
        productClick = null
        localStorage.setItem("productClick", productClick)
    }

})


EmptyOrder = () => {
    if (!productsDiv.childElementCount>0) {
        Array.from(productsDiv.parentElement.children).forEach(e => {
            e.style.display = "none"
        })
        productsDiv.parentElement.children[0].style.display = "block"
    }
    else {
        Array.from(productsDiv.parentElement.children).forEach(e => {
           e.style.display = "flex"
        })
        productsDiv.parentElement.children[0].style.display = "none"
    }
}

const CurrentOrderPriceFunction = () => {
    currentOrderPrice = 0

    const currentOrderDetails = detailsSpecificOrderFetch(currentOrder._orderID)
    Array.from(currentOrderDetails).forEach(e => {
            currentOrderPrice += e.detail_price
        })
        
    currentOrderPriceText.textContent = currentOrderPrice.toFixed(2)+"€"
}

const CurrentOrderDetailtUpdate = (detail, product, currentStructure) => {
    detail.detail_price = product._productPrice*detail.product_quantity
    currentStructure.nameSpan.textContent = product._productName
    currentStructure.priceSpan.textContent = detail.detail_price.toFixed(2)+"€"
    currentStructure.quantitySpan.textContent = detail.product_quantity
}


SpecificEnable = (className) => {
    Array.from(document.body.children).forEach(e => {
        if(e.className == "main")
        {
            Array.from(e.children).forEach(ea => {
                Array.from(ea.children).forEach(eb => {
                    if (eb.className == className) {
                        eb.style.pointerEvents = "all"
                    }
                })
            })
        }
    })
}

ActivateOpacity = (className, opacityNum) => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                Array.from(ea.children).forEach(eb => {
                    if (eb.className != className)
                    {
                        eb.style.opacity = opacityNum
                    }
                })
            })
        } else {e.style.opacity = opacityNum}
    })
}

DeactivateOpacity = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                Array.from(ea.children).forEach(eb => {
                    eb.style.opacity = "1"
                })
            })
        }
        e.style.opacity = "1"
    })
}


OrderSpecificEnable = (categoryClassName, productElement, className) => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") {
            Array.from(e.children).forEach(ea => {
                if (ea.className == "order-div") 
                {
                    Array.from(ea.children).forEach(eb => {
                        if (eb.className == "product-categories-divs") 
                        {
                            Array.from(eb.children).forEach(ec => {
                                if (ec.classList[0] == categoryClassName) 
                                {
                                    Array.from(ec.children).forEach(ed => {
                                        if (ed == productElement)
                                        {
                                            Array.from(ed.children).forEach(ee => {
                                                if (ee.className == className) 
                                                {
                                                    ee.style.pointerEvents = "all"
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        } else if(eb.className == "allergies-info-div") {eb.style.pointerEvents = "all"}
                    })
                }
            })
        }
    })
}

OrderActivateOpacity = (categoryClassName, productElement, className, opacityNum) => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") 
            {
            Array.from(e.children).forEach(ea => {
                if (ea.className == "order-div") 
                {
                    Array.from(ea.children).forEach(eb => {
                        if (eb.className == "product-categories-divs") 
                        {
                            Array.from(eb.children).forEach(ec => {
                                if (ec.classList[0] == categoryClassName) 
                                {
                                    Array.from(ec.children).forEach(ed => {
                                        if (ed == productElement)
                                        {
                                            Array.from(ed.children).forEach(ee => {
                                                if (ee.className == className) 
                                                {
                                                    ee.style.opacity = 1
                                                } else {ee.style.opacity = opacityNum}
                                            })
                                        } else {ed.style.opacity = opacityNum}
                                    })
                                } else {ec.style.opacity = opacityNum}
                            })
                        } else if(eb.className != "allergies-info-div"){eb.style.opacity = opacityNum}
                    })
                } else {ea.style.opacity = opacityNum}
            })
        } else {e.style.opacity = opacityNum}
    })
}

OrderDeactivateOpacity = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.className == "main") 
            {
            Array.from(e.children).forEach(ea => {
                    if (ea.className == "order-div") 
                    {
                    Array.from(ea.children).forEach(eb => {
                        eb.style.opacity = 1
                        Array.from(eb.children).forEach(ec => {
                            ec.style.opacity = 1
                            Array.from(ec.children).forEach(ed => {
                                ed.style.opacity = 1
                                Array.from(ed.children).forEach(ee => {
                                    ee.style.opacity = 1
                                })
                            })
                        })
                    })
                } else {ea.style.opacity = 1}
            })
        }  else {e.style.opacity = 1}
    })
}




/* FETCH */
const burgersURL = "http://localhost:8080/BurgerGo/Controller?action=products.burgers"
const kidsURL = "http://localhost:8080/BurgerGo/Controller?action=products.kids"
const dessertsURL = "http://localhost:8080/BurgerGo/Controller?action=products.desserts"
const drinksURL = "http://localhost:8080/BurgerGo/Controller?action=products.drinks"
const othersURL = "http://localhost:8080/BurgerGo/Controller?action=products.others"
const glutenFreeURL = "http://localhost:8080/BurgerGo/Controller?action=products.gluten_free"
const allergensURL = "http://localhost:8080/BurgerGo/Controller?action=allergens.find_all"
const allergiesURL = "http://localhost:8080/BurgerGo/Controller?action=allergies.find_all"

const ordersSpecificURL = "http://localhost:8080/BurgerGo/Controller?action=orders.find_specific"
const detailsSpecificURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_specific"
const detailsSpecificOrderURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_specific_order"
const ordersPostAddURL = "http://localhost:8080/BurgerGo/Controller?action=orders.add"
const detailsPostAddURL = "http://localhost:8080/BurgerGo/Controller?action=details.add"
const ordersPostDeleteURL = "http://localhost:8080/BurgerGo/Controller?action=orders.delete"
const detailsPostDeleteURL = "http://localhost:8080/BurgerGo/Controller?action=details.delete"
const detailsPostUpdateURL = "http://localhost:8080/BurgerGo/Controller?action=details.update"
const ordersPostUpdateURL = "http://localhost:8080/BurgerGo/Controller?action=orders.update"

const ordersSpecificFetch = async(order_state, customer_id) => {
    let currentURL = new URL(ordersSpecificURL)
    currentURL.searchParams.set("order_state", order_state)
    currentURL.searchParams.set("customer_id", customer_id)
    const rawRes = await fetch(currentURL)
    const rawData = await rawRes.json()
    let obj = rawData
    return obj
}

const detailsSpecificFetch = async(product_id, order_id) => {
    let currentURL = new URL(detailsSpecificURL)
    currentURL.searchParams.set("product_id", product_id)
    currentURL.searchParams.set("order_id", order_id)
    const rawRes = await fetch(currentURL)
    const rawData = await rawRes.json()
    let obj = rawData
    return obj
}

const detailsSpecificOrderFetch = async(order_id) => {
    let currentURL = new URL(detailsSpecificOrderURL)
    currentURL.searchParams.set("order_id", order_id)
    const rawRes = await fetch(currentURL)
    const rawData = await rawRes.json()
    let obj = rawData
    return obj
}

const ordersPostAddFetch = async(obj) => {
    const rawRes = await fetch(ordersPostAddURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}

const detailsPostAddFetch = async(obj) => {
    const rawRes = await fetch(detailsPostAddURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}

const ordersPostDeleteFetch = async(obj) => {
    const rawRes = await fetch(ordersPostDeleteURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}

const detailsPostDeleteFetch = async(obj) => {
    const rawRes = await fetch(detailsPostDeleteURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}

const ordersPostUpdateFetch = async(obj) => {
    const rawRes = await fetch(ordersPostUpdateURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}

const detailsPostUpdateFetch = async(obj) => {
    const rawRes = await fetch(detailsPostUpdateURL,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
    console.log(rawRes)
}


const fetchData = async () => {
    const [burgersRes, kidsRes, dessertsRes, drinksRes, othersRes, glutenFreeRes, allergensRes, allergiesRes] = await Promise.all([fetch(burgersURL), fetch(kidsURL), fetch(dessertsURL), fetch(drinksURL), fetch(othersURL), fetch(glutenFreeURL), fetch(allergensURL), fetch(allergiesURL)])

    const burgersData = await burgersRes.json()
    const kidsData = await kidsRes.json()
    const dessertsData = await dessertsRes.json()
    const drinksData = await drinksRes.json()
    const othersData = await othersRes.json()
    const glutenFreeData = await glutenFreeRes.json()
    const allergensData = await allergensRes.json()
    const allergiesData = await allergiesRes.json()

    console.log("burgersData --> ", burgersData)
    console.log("kidsData --> ", kidsData)
    console.log("dessertsData --> ", dessertsData)
    console.log("drinksData --> ", drinksData)
    console.log("othersData --> ", othersData)
    console.log("othersData --> ", glutenFreeData)
    console.log("allergensData --> ", allergensData)
    console.log("allergiesData --> ", allergiesData)

    printBurgersData(burgersData, allergensData, allergiesData)
    printKidsData(kidsData, allergensData, allergiesData)
    printDessertsData(dessertsData, allergensData, allergiesData)
    printDrinksData(drinksData, allergensData, allergiesData)
    printOthersData(othersData, allergensData, allergiesData)
    printGlutenFreeData(glutenFreeData, allergensData, allergiesData)
    printAllergensData(allergensData)
}

/* BURGERS */
const printBurgersData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        /* Structue depends on the product so we use its id-1 so it starts at 0 */
        structure[e._productID-1] =
        {
            mainDiv: null,
            mainP: null,
            nameSpan: null,
            priceSpan: null,
            quantityDiv: null,
            quantitySpan: null,
            quantityLess: null,
            quantityMore: null,
            delete: null
        }
        const burgersCategory = document.getElementById("burgers-category")

        const productDiv = document.createElement("div")
        burgersCategory.appendChild(productDiv)
        productDiv.classList.add("product")


        const productInfo = document.createElement("div")
        productDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")
        

        const productImg = document.createElement("div")
        productInfo.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.setAttribute("id", e._productName.replaceAll(" ", "-").toLowerCase())
        productImg.style.backgroundImage = "url("+e._productImg+")"
        
        const productName = document.createElement("span")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName


        const productPrice = document.createElement("span")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice.toFixed(2)+"€"


        const orderAddition = document.createElement("div")
        productDiv.appendChild(orderAddition)
        orderAddition.classList.add("order-addition-info")

        const productQuantity = document.createElement("input")
        orderAddition.appendChild(productQuantity)
        productQuantity.classList.add("product-quantity")
        productQuantity.setAttribute("type", "number")
        productQuantity.setAttribute("name", "product-quantity")
        productQuantity.setAttribute("value", 1)
        productQuantity.setAttribute("min", 1)

        const addToOrder = document.createElement("button")
        orderAddition.appendChild(addToOrder)
        addToOrder.classList.add("add-to-order")
        addToOrder.textContent = "Add to order"


        const productDescriptionDiv = document.createElement("div")
        productDiv.appendChild(productDescriptionDiv)
        productDescriptionDiv.classList.add("product-description-div")

        const productDescriptionImg = document.createElement("div")
        productDescriptionDiv.appendChild(productDescriptionImg)
        productDescriptionImg.classList.add("product-description-img")
        /* TO CHANGE */
        const img = document.createElement("img")
        productDescriptionImg.appendChild(img)
        img.setAttribute("src", e._productImg)
        /* NEXT */
        const productDescriptionText = document.createElement("div")
        productDescriptionDiv.appendChild(productDescriptionText)
        productDescriptionText.classList.add("text-description")

        const productDescriptionName = document.createElement("span")
        productDescriptionText.appendChild(productDescriptionName)
        productDescriptionName.classList.add("product-name")
        productDescriptionName.textContent = e._productName
        const productDescription = document.createElement("span")
        productDescriptionText.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productAllergies = document.createElement("div")
        productDescriptionText.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        Array.from(intermediateData.filter(a => a._productID == e._productID)).forEach(a => {
            const allergyIcon = document.createElement("div")
            productAllergies.appendChild(allergyIcon)
            allergyIcon.classList.add("allergy-icon")
            const allergyIconImg = document.createElement("img")
            allergyIcon.appendChild(allergyIconImg)
            allergyIconImg.setAttribute("src", secondData[a._allergenID-1]._allergenImg)
            allergyIconImg.setAttribute("alt", secondData[a._allergenID-1]._allergenName)
        })


        const productAllergiesSmall = document.createElement("div")
        productDescriptionDiv.appendChild(productAllergiesSmall)
        productAllergiesSmall.classList.add("product-allergies-small")
        Array.from(intermediateData.filter(a => a._productID == e._productID)).forEach(a => {
            const allergyIcon = document.createElement("div")
            productAllergiesSmall.appendChild(allergyIcon)
            allergyIcon.classList.add("allergy-icon")
            const allergyIconImg = document.createElement("img")
            allergyIcon.appendChild(allergyIconImg)
            allergyIconImg.setAttribute("src", secondData[a._allergenID-1]._allergenImg)
            allergyIconImg.setAttribute("alt", secondData[a._allergenID-1]._allergenName)
        })


        const allergiesInfoButton = document.createElement("div")
        productDescriptionDiv.appendChild(allergiesInfoButton)
        allergiesInfoButton.classList.add("allergies-info-button")
        const buttonChild = document.createElement("button")
        allergiesInfoButton.appendChild(buttonChild)
        buttonChild.textContent = "Allergens Info"


        const productDescriptionClose = document.createElement("div")
        productDescriptionDiv.appendChild(productDescriptionClose)
        productDescriptionClose.classList.add("product-description-close")
        const imgChild = document.createElement("img")
        productDescriptionClose.appendChild(imgChild)
        imgChild.setAttribute("src", "../Images/close.png")
        imgChild.setAttribute("alt", "close")



        /* SETTING UP THE EVENT LISTENERS */
        productQuantity.addEventListener("change", () => {
            if (productQuantity.value<1){productQuantity.value = 1}
            else if (productQuantity.value>100){productQuantity.value = 100}
        })


        productImg.addEventListener("click", () => {
            productDescriptionDiv.style.display = "flex"
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            OrderSpecificEnable(burgersCategory.classList[0], productDiv, productDescriptionDiv.classList[0])
            OrderActivateOpacity(burgersCategory.classList[0], productDiv, productDescriptionDiv.classList[0], 0.75)
        })


        allergiesInfoButton.addEventListener("click", () => {
            allergiesInfoDiv.style.display = "flex"
        })


        productDescriptionClose.addEventListener("click", () => {
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            productDescriptionDiv.style.display = "none"
            OrderDeactivateOpacity()
        })

        
        /* ADD DETAIL TO ORDER */
        addToOrder.addEventListener("click", async() => {
            debugger
            currentOrder = await ordersSpecificFetch(ORDER_STATES.in_the_making, localStorage.getItem("user.id")).then(order => currentOrder = order)
            if (currentOrder._orderID === 0)
            {
                currentOrder =
                {
                    order_state: ORDER_STATES.in_the_making,
                    direction: null,
                    order_price: 0,
                    order_date: new Date().toLocaleDateString().replaceAll("/", "-"),
                    employee_id: null,
                    customer_id: localStorage.getItem("user.id")
                }
                ordersPostAddFetch(currentOrder)
                currentOrder = ordersSpecificFetch(ORDER_STATES.in_the_making, localStorage.getItem("user.id")).then(order => currentOrder = order)
            }
            let currentDetail = {}

            currentDetail = await detailsSpecificFetch(e._productID, currentOrder._orderID).then(detail => currentDetail=detail)
            if (currentDetail._detailID === 0)
            {
                currentDetail =
                {
                    product_quantity: Number.parseInt(productQuantity.value),
                    detail_price: Number.parseFloat(e._productPrice)*Number.parseInt(productQuantity.value),
                    order_id: currentOrder._orderID,
                    product_id: e._productID
                }
                console.log(currentDetail)
                await detailsPostAddFetch(currentDetail)
                currentDetail = await detailsSpecificFetch(e._productID, currentOrder._orderID).then(detail => currentDetail=detail)

                /* Structue construction */
                structure[e._productID-1].mainDiv = productsDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].mainDiv.classList.add("current-product")

                structure[e._productID-1].mainP = structure[e._productID-1].mainDiv.appendChild(document.createElement("p"))

                structure[e._productID-1].nameSpan = structure[e._productID-1].mainP.appendChild(document.createElement("span"))
                structure[e._productID-1].nameSpan.classList.add("current-product-name")

                structure[e._productID-1].priceSpan = structure[e._productID-1].mainP.appendChild(document.createElement("span"))
                structure[e._productID-1].priceSpan.classList.add("current-product-price")

                
                structure[e._productID-1].quantityDiv = structure[e._productID-1].mainDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].quantityDiv.classList.add("current-product-quantity-div")

                structure[e._productID-1].quantityLess = structure[e._productID-1].quantityDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].quantityLess.classList.add("current-product-quantity-less")
                const newQuantityLessImg = structure[e._productID-1].quantityLess.appendChild(document.createElement("img"))
                newQuantityLessImg.setAttribute("src","../Images/less.png")
                newQuantityLessImg.setAttribute("alt","less")

                structure[e._productID-1].quantitySpan = structure[e._productID-1].quantityDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].quantitySpan.classList.add("current-product-quantity-info")

                structure[e._productID-1].quantityMore = structure[e._productID-1].quantityDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].quantityMore.classList.add("current-product-quantity-more")
                const newQuantityMoreImg = structure[e._productID-1].quantityMore.appendChild(document.createElement("img"))
                newQuantityMoreImg.setAttribute("src","../Images/more.png")
                newQuantityMoreImg.setAttribute("alt","more")
                
                structure[e._productID-1].delete = structure[e._productID-1].mainDiv.appendChild(document.createElement("div"))
                structure[e._productID-1].delete.classList.add("delete-current-product")
                const newImgDelete = structure[e._productID-1].delete.appendChild(document.createElement("img"))
                newImgDelete.setAttribute("src","../Images/delete.png")
                newImgDelete.setAttribute("alt","delete")

                structure[e._productID-1].quantityLess.addEventListener("click", () => {
                    if (currentDetail.product_quantity>1)
                    {
                        currentDetail.product_quantity--

                        detailsPostUpdateFetch()
                    }
                })

                structure[e._productID-1].quantityMore.addEventListener("click", () => {
                    if (currentDetail.product_quantity<100)
                    {
                        currentDetail.product_quantity++
                    }
                })
                
                structure[e._productID-1].delete.addEventListener("click", () => {
                    structure[e._productID-1].delete.parentElement.remove()
                })
            }

            CurrentOrderPriceFunction()
            CurrentOrderDetailtUpdate(currentDetail, e, structure[e._productID-1])
            EmptyOrder()
        })
    })
}

/* KIDS */
const printKidsData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        const kidsCategory = document.getElementById("kids-category")

        const menuProductDiv = document.createElement("div")
        kidsCategory.appendChild(menuProductDiv)
        menuProductDiv.classList.add("menu-product")

        const productImg = document.createElement("div")
        menuProductDiv.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.style.backgroundImage = "url("+e._productImg+")"
        const productInfo = document.createElement("div")
        menuProductDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")

        const productName = document.createElement("p")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName
        const productDescription = document.createElement("p")
        productInfo.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productPrice = document.createElement("p")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice+"$"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        /*Array.from().forEach(a => {
            const 
        })*/
    })
}

/* DESSERTS */
const printDessertsData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        const dessertsCategory = document.getElementById("desserts-category")

        const menuProductDiv = document.createElement("div")
        dessertsCategory.appendChild(menuProductDiv)
        menuProductDiv.classList.add("menu-product")

        const productImg = document.createElement("div")
        menuProductDiv.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.style.backgroundImage = "url("+e._productImg+")"
        const productInfo = document.createElement("div")
        menuProductDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")

        const productName = document.createElement("p")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName
        const productDescription = document.createElement("p")
        productInfo.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productPrice = document.createElement("p")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice+"$"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        /*Array.from().forEach(a => {
            const 
        })*/
    })
}

/* DRINKS */
const printDrinksData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        const drinksCategory = document.getElementById("drinks-category")

        const menuProductDiv = document.createElement("div")
        drinksCategory.appendChild(menuProductDiv)
        menuProductDiv.classList.add("menu-product")

        const productImg = document.createElement("div")
        menuProductDiv.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.style.backgroundImage = "url("+e._productImg+")"
        const productInfo = document.createElement("div")
        menuProductDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")

        const productName = document.createElement("p")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName
        const productDescription = document.createElement("p")
        productInfo.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productPrice = document.createElement("p")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice+"$"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        /*Array.from().forEach(a => {
            const 
        })*/
    })
}

/* OTHERS */
const printOthersData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        const othersCategory = document.getElementById("others-category")

        const menuProductDiv = document.createElement("div")
        othersCategory.appendChild(menuProductDiv)
        menuProductDiv.classList.add("menu-product")

        const productImg = document.createElement("div")
        menuProductDiv.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.style.backgroundImage = "url("+e._productImg+")"
        const productInfo = document.createElement("div")
        menuProductDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")

        const productName = document.createElement("p")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName
        const productDescription = document.createElement("p")
        productInfo.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productPrice = document.createElement("p")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice+"$"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        /*Array.from().forEach(a => {
            const 
        })*/
    })
}

/* GLUTEN FREE */
const printGlutenFreeData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
        const glutenFreeCategory = document.getElementById("gluten-free-category")

        const menuProductDiv = document.createElement("div")
        glutenFreeCategory.appendChild(menuProductDiv)
        menuProductDiv.classList.add("menu-product")

        const productImg = document.createElement("div")
        menuProductDiv.appendChild(productImg)
        productImg.classList.add("product-img")
        productImg.style.backgroundImage = "url("+e._productImg+")"
        const productInfo = document.createElement("div")
        menuProductDiv.appendChild(productInfo)
        productInfo.classList.add("product-info")

        const productName = document.createElement("p")
        productInfo.appendChild(productName)
        productName.classList.add("product-name")
        productName.textContent = e._productName
        const productDescription = document.createElement("p")
        productInfo.appendChild(productDescription)
        productDescription.classList.add("product-description")
        productDescription.textContent = e._productDescription
        const productPrice = document.createElement("p")
        productInfo.appendChild(productPrice)
        productPrice.classList.add("product-price")
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
        productAllergies.classList.add("product-allergies")
        /*Array.from().forEach(a => {
            const 
        })*/
    })
}

/* ALLERGENS INFO */
const printAllergensData = (mainData) => {
    const allergiesInfo = document.getElementsByClassName("allergies-info-div")[0]

    const allergiesColumnFirst = document.createElement("div")
    allergiesInfo.appendChild(allergiesColumnFirst)
    allergiesColumnFirst.classList.add("allergies-column")
    const allergiesColumnSecond = document.createElement("div")
    allergiesInfo.appendChild(allergiesColumnSecond)
    allergiesColumnSecond.classList.add("allergies-column")
    const allergiesDisplaySmall = document.createElement("div")
    allergiesInfo.appendChild(allergiesDisplaySmall)
    allergiesDisplaySmall.classList.add("allergies-display-small")
        
    Array.from(mainData).forEach(e => {
        if (Number.parseInt(e._allergenID)<8)
        {
            const specificAllergyDiv = document.createElement("div")
            allergiesColumnFirst.appendChild(specificAllergyDiv)
            specificAllergyDiv.classList.add("specific-allergy-div")

            const allergyInfoIcon = document.createElement("div")
            specificAllergyDiv.appendChild(allergyInfoIcon)
            allergyInfoIcon.classList.add("allergy-info-icon")
            const image = document.createElement("img")
            allergyInfoIcon.appendChild(image)
            image.setAttribute("alt", e._allergenName)
            image.setAttribute("src", e._allergenImg)
            const allergyInfoText = document.createElement("div")
            specificAllergyDiv.appendChild(allergyInfoText)
            allergyInfoText.classList.add("allergy-info-text")
            const paragraph = document.createElement("div")
            allergyInfoText.appendChild(paragraph)
            paragraph.textContent = "Contains " + e._allergenName
        }

        if (Number.parseInt(e._allergenID)>7 && Number.parseInt(e._allergenID)<15)
        {
            const specificAllergyDiv = document.createElement("div")
            allergiesColumnSecond.appendChild(specificAllergyDiv)
            specificAllergyDiv.classList.add("specific-allergy-div")

            const allergyInfoIcon = document.createElement("div")
            specificAllergyDiv.appendChild(allergyInfoIcon)
            allergyInfoIcon.classList.add("allergy-info-icon")
            const image = document.createElement("img")
            allergyInfoIcon.appendChild(image)
            image.setAttribute("alt", e._allergenName)
            image.setAttribute("src", e._allergenImg)
            const allergyInfoText = document.createElement("div")
            specificAllergyDiv.appendChild(allergyInfoText)
            allergyInfoText.classList.add("allergy-info-text")
            const paragraph = document.createElement("div")
            allergyInfoText.appendChild(paragraph)
            paragraph.textContent = "Contains " + e._allergenName
        }

        
        const specificAllergyDiv = document.createElement("div")
        allergiesDisplaySmall.appendChild(specificAllergyDiv)
        specificAllergyDiv.classList.add("specific-allergy-div")

        const allergyInfoIcon = document.createElement("div")
        specificAllergyDiv.appendChild(allergyInfoIcon)
        allergyInfoIcon.classList.add("allergy-info-icon")
        const image = document.createElement("img")
        allergyInfoIcon.appendChild(image)
        image.setAttribute("alt", e._allergenName)
        image.setAttribute("src", e._allergenImg)
        const allergyInfoText = document.createElement("div")
        specificAllergyDiv.appendChild(allergyInfoText)
        allergyInfoText.classList.add("allergy-info-text")
        const paragraph = document.createElement("div")
        allergyInfoText.appendChild(paragraph)
        paragraph.textContent = "Contains " + e._allergenName
        
    })
}

fetchData()
