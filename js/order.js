let productCategoriesButtons = []
let productCategoriesHr = []
let productCategoriesDivs = []

let currentProductDelete = []
let addToOrderButton = []
let productsDiv

let productCategorySelected


document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM fully loaded and parsed")

    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("product-categories-divs")[0].children
    
    currentProductDelete = document.getElementsByClassName("delete-current-product")
    addToOrderButton = document.getElementsByClassName("add-to-order")
    productsDiv = document.getElementsByClassName("products-position")[0]

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



    
            /* delete current product */
    for (let b = 0; b<currentProductDelete.length; b++) {

/*
        currentProductDelete[b].addEventListener("click",test=()=>{
            
            currentProductDelete[b].parentElement.remove()
            console.log(b," deleted")
            //currentProductDelete[b].removeEventListener("click",test(),true)

        },true)*/

        currentProductDelete[b].addEventListener("click",()=>{CurrentProductDeletion(b)}, false) // {once: true}
        
        // currentProductDelete[b].removeEventListener("click",()=>{CurrentProductDeletion(b)},true)

        // getEventListeners(currentProductDelete[0]).click[0].listener
        // currentProductDelete[0].removeEventListener("click", getEventListeners(currentProductDelete[0]).click[0].listener,true)
        
    }
    


            /* automate current products */
    for (let b = 0; b<addToOrderButton.length; b++) {

        addToOrderButton[b].addEventListener("click",()=>{
            
            let newDiv = productsDiv.appendChild(document.createElement("div"))
            newDiv.setAttribute("class","current-product")
            let newP = newDiv.appendChild(document.createElement("p"))
            let newQuantitySpan = newP.appendChild(document.createElement("span"))
            newQuantitySpan.setAttribute("class","current-product-quantity")
            let newNameSpan = newP.appendChild(document.createElement("span"))
            newNameSpan.setAttribute("class","current-product-name")
            let newDelete = newDiv.appendChild(document.createElement("div"))
            newDelete.setAttribute("class","delete-current-product")
            let newImg = newDelete.appendChild(document.createElement("img"))
            newImg.setAttribute("src","../Images/delete.png")
            newImg.setAttribute("alt","delete")
            newQuantitySpan.innerHTML = "quantityTest "
            newNameSpan.innerHTML = " nameTest"

        })
        
    }


})

function CurrentProductDeletion(b){
    currentProductDelete[b].parentElement.remove()
    console.log(b,"deleted")
    // currentProductDelete[b].removeEventListener("click", getEventListeners(currentProductDelete[b]).click[0].listener,true)
    // currentProductDelete[0].removeEventListener("click",()=>{CurrentProductDeletion(0)}, false)
}