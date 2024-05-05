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
            DeactivateOpacity()
        })
    })


            /* if a user writes manually a number<1 the value changes automatically to 1 */
    Array.from(productQuantity).forEach(e => {
        e.addEventListener("change",()=>{if (e.value<1){e.value=1}})
    })

    Array.from(productImg).forEach(e => {
        e.addEventListener("click", () => {
            for (let i = 0; i<productImg.length; i++){
                if (productImg[i] == e){
                    productDescriptionDiv[i].style.display = "flex"
                    document.body.style.overflow = "hidden"
                    document.body.style.pointerEvents = "none"
                    SpecificEnable(productImg[i].parentElement.parentElement.parentElement.classList[0], productImg[i].parentElement.parentElement, productDescriptionDiv[i].className)
                    ActivateOpacity(productImg[i].parentElement.parentElement.parentElement.classList[0], productImg[i].parentElement.parentElement, productDescriptionDiv[i].className, 0.75)
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
    


            /* automate current products */
    for (let b = 0; b<addToOrderButton.length; b++) { // change the let variables to Array
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
                        currentOrderProduct[b].quantity++
                        CurrentOrderProductUpdate(currentOrderProduct[b])
                        CurrentOrderPriceFunction()
                    })
                currentOrderProduct[b].structure.delete.addEventListener("click", () =>
                    {
                        currentOrderProduct[b].structure.delete.parentElement.remove()
                        currentOrderProduct[b].existence = false
                        CurrentOrderPriceFunction()
                        EmptyOrder()
                    }
            ) // current added product deletion
                
                
            } 
            else 
            {
                currentOrderProduct[b].quantity += Number.parseInt(addToOrderButton[b].parentElement.children[0].value)
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
        for (let e = 0; e<productsDiv.parentElement.childElementCount; e++){
            productsDiv.parentElement.children[e].style.display = "none"
        }
        productsDiv.parentElement.children[0].style.display = "block"
    }
    else {
        for (let e = 0; e<productsDiv.parentElement.childElementCount; e++){
            productsDiv.parentElement.children[e].style.display = "flex"
        }
        productsDiv.parentElement.children[0].style.display = "none"
    }
}

CurrentOrderPriceFunction = () => {
    currentOrderPrice = 0

    let currentOrderProductExist = currentOrderProduct.filter((e) => e.existence == true)

    for (let e = 0; e<currentOrderProductExist.length; e++)
        {
            currentOrderPrice += currentOrderProductExist[e].totalPrice
        }

        currentOrderPriceText.textContent = currentOrderPrice.toFixed(2)+"€"
}

CurrentOrderProductUpdate = (e) => {
    e.totalPrice = e.unitPrice*e.quantity
    e.structure.nameSpan.textContent = e.name
    e.structure.priceSpan.textContent = e.totalPrice+"€"
    e.structure.quantitySpan.textContent = e.quantity
}



SpecificEnable = (categoryClassName, productElement, className) => {
    for(let be = 0; be<document.body.children.length; be++){
        if (document.body.children[be].className == "main") {
            for(let ce = 0; ce<document.body.children[be].children.length; ce++)
                {
                    if (document.body.children[be].children[ce].className == "order-div") 
                    {
                        for (let de = 0; de<document.body.children[be].children[ce].children.length; de++)
                            {
                                if (document.body.children[be].children[ce].children[de].className == "product-categories-divs") 
                                    {
                                        for (let ee = 0; ee<document.body.children[be].children[ce].children[de].children.length; ee++) 
                                            {
                                                if (document.body.children[be].children[ce].children[de].children[ee].classList[0] == categoryClassName) 
                                                {
                                                    for (let fe = 0; fe<document.body.children[be].children[ce].children[de].children[ee].children.length; fe++) 
                                                        {
                                                            if (document.body.children[be].children[ce].children[de].children[ee].children[fe] == productElement)
                                                                {
                                                                    for (let e = 0;e<document.body.children[be].children[ce].children[de].children[ee].children[fe].children.length; e++) 
                                                                        {
                                                                            if (document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].className == className) 
                                                                                {
                                                                                    document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].style.pointerEvents = "all"
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                            }
                                    } else if(document.body.children[be].children[ce].children[de].className == "allergies-info-div") {document.body.children[be].children[ce].children[de].style.pointerEvents = "all"}
                            }
                    }
                }
        }
    }
}

ActivateOpacity = (categoryClassName, productElement, className, opacityNum) => {
    for(let be = 0; be<document.body.children.length; be++)
        {
        if (document.body.children[be].className == "main") 
            {
            for(let ce = 0; ce<document.body.children[be].children.length; ce++)
                {
                    if (document.body.children[be].children[ce].className == "order-div") 
                    {
                        for (let de = 0; de<document.body.children[be].children[ce].children.length; de++)
                            {
                                if (document.body.children[be].children[ce].children[de].className == "product-categories-divs") 
                                    {
                                        for (let ee = 0; ee<document.body.children[be].children[ce].children[de].children.length; ee++) 
                                            {
                                                if (document.body.children[be].children[ce].children[de].children[ee].classList[0] == categoryClassName) 
                                                {
                                                    for (let fe = 0; fe<document.body.children[be].children[ce].children[de].children[ee].children.length; fe++) 
                                                        {
                                                            if (document.body.children[be].children[ce].children[de].children[ee].children[fe] == productElement)
                                                                {
                                                                    for (let e = 0;e<document.body.children[be].children[ce].children[de].children[ee].children[fe].children.length; e++) 
                                                                        {
                                                                            if (document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].className == className) 
                                                                                {
                                                                                    document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].style.opacity = 1
                                                                                } else {document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].style.opacity = opacityNum}
                                                                        }
                                                                } else {document.body.children[be].children[ce].children[de].children[ee].children[fe].style.opacity = opacityNum}
                                                        }
                                                } else {document.body.children[be].children[ce].children[de].children[ee].style.opacity = opacityNum}
                                            }
                                    } else if(document.body.children[be].children[ce].children[de].className != "allergies-info-div"){document.body.children[be].children[ce].children[de].style.opacity = opacityNum}
                            }
                    } else {document.body.children[be].children[ce].style.opacity = opacityNum}
                }
        } else {document.body.children[be].style.opacity = opacityNum}
    }
}

DeactivateOpacity = () => {
    for(let be = 0; be<document.body.children.length; be++)
        {
        if (document.body.children[be].className == "main") 
            {
            for(let ce = 0; ce<document.body.children[be].children.length; ce++)
                {
                    if (document.body.children[be].children[ce].className == "order-div") 
                    {
                        for (let de = 0; de<document.body.children[be].children[ce].children.length; de++)
                            {
                                document.body.children[be].children[ce].children[de].style.opacity = 1
                                for (let ee = 0; ee<document.body.children[be].children[ce].children[de].children.length; ee++) 
                                    {
                                        document.body.children[be].children[ce].children[de].children[ee].style.opacity = 1
                                        for (let fe = 0; fe<document.body.children[be].children[ce].children[de].children[ee].children.length; fe++) 
                                            {
                                                document.body.children[be].children[ce].children[de].children[ee].children[fe].style.opacity = 1
                                                for (let e = 0;e<document.body.children[be].children[ce].children[de].children[ee].children[fe].children.length; e++) 
                                                    {
                                                        document.body.children[be].children[ce].children[de].children[ee].children[fe].children[e].style.opacity = 1
                                                    }
                                            }
                                    }
                            }
                } else {document.body.children[be].children[ce].style.opacity = 1}
            }
        }  else {document.body.children[be].style.opacity = 1}
    }
}


/*              Other way for current product deletion:

    currentProductDelete[b].addEventListener("click",CurrentProductDeletion, false) // CurrentProductDeletion = (e)=>{CurrentProductDeletion(e)}
    function CurrentProductDeletion(e){
        e.target.parentElement.parentElement.remove()
    }
*/