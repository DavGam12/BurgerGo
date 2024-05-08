let productCategoriesButtons = []
let productCategoriesHr = []
let productCategoriesDivs = []
let currentProductDelete = []
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
let buyAcceptButton

let productCategorySelected
let currentOrderPrice
let lastAllergiesInfoButtonClicked

    /* Current Order Products Info */
let currentOrderProduct = [ // currentOrderProduct.filter((e) => e.existence == true) to get the all current products info
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

    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("product-categories-divs")[0].children
    currentProductDelete = document.getElementsByClassName("delete-current-product")
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
    buyAcceptButton = document.getElementsByClassName("card-accept")[0]

    productCategorySelected = document.getElementById("current-category")


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


    closeAllergiesInfoDiv.addEventListener("click", () => {
        allergiesInfoDiv.style.display = "none"
        lastAllergiesInfoButtonClicked.parentElement.style.display = "flex"
    })


    Array.from(closeProductDescription).forEach(e => {
        e.addEventListener("click", () => {
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            e.parentElement.style.display = "none"
            OrderDeactivateOpacity()
        })
    })


            /* if a user writes manually a number<1 the value changes automatically to 1 */
    Array.from(productQuantity).forEach(e => {
        e.addEventListener("change",()=>
            {
                if (e.value<1){e.value = 1}
                else if (e.value>100){e.value = 100}
            })
    })

    Array.from(productImg).forEach(e => {
        e.addEventListener("click", () => {
            for (let i = 0; i<productImg.length; i++){
                if (productImg[i] == e){
                    productDescriptionDiv[i].style.display = "flex"
                    document.body.style.overflow = "hidden"
                    document.body.style.pointerEvents = "none"
                    OrderSpecificEnable(productImg[i].parentElement.parentElement.parentElement.classList[0], productImg[i].parentElement.parentElement, productDescriptionDiv[i].className)
                    OrderActivateOpacity(productImg[i].parentElement.parentElement.parentElement.classList[0], productImg[i].parentElement.parentElement, productDescriptionDiv[i].className, 0.75)
                }
            }
        })
    })

    Array.from(allergiesInfoButton).forEach(e => {
        e.addEventListener("click", () => {
            allergiesInfoDiv.style.display = "flex"
            e.parentElement.style.display = "none"
            lastAllergiesInfoButtonClicked = e
        })
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
    for (let b = 0; b<addToOrderButton.length; b++) { // preguntar a Vanessa
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

CurrentOrderPriceFunction = () => {
    currentOrderPrice = 0

    let currentOrderProductExist = currentOrderProduct.filter((e) => e.existence == true)

    Array.from(currentOrderProductExist).forEach(e => {
            currentOrderPrice += e.totalPrice
        })

        currentOrderPriceText.textContent = currentOrderPrice.toFixed(2)+"€"
}

CurrentOrderProductUpdate = (e) => {
    e.totalPrice = e.unitPrice*e.quantity
    e.structure.nameSpan.textContent = e.name
    e.structure.priceSpan.textContent = e.totalPrice.toFixed(2)+"€"
    e.structure.quantitySpan.textContent = e.quantity
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
