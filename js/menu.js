let productCategoriesButtons = []
let productCategoriesDivs = []
let allergensInfoButton
let closeAllergensInfoButton
let allergensInfoDiv
let toTopButton
let productSearch

let searchInput
let menuProduct = []


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")

    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("category-div")
    allergensInfoButton = document.getElementById("allergens-info-button")
    closeAllergensInfoButton = document.getElementsByClassName("allergies-info-div-close")[0]
    allergensInfoDiv = document.getElementsByClassName("allergies-info-div")[0]
    toTopButton = document.getElementsByClassName("to-top")[0]
    productSearch = document.getElementsByClassName("product-search")[0]
    
    searchInput = document.getElementById("search-input")
    menuProduct = document.getElementsByClassName("menu-product")


    Array.from(productCategoriesButtons).forEach((e, i) => {
        if (e.id.length == 0){
            e.addEventListener("click", () => {
                productSearch.style.visibility = "visible"
                productSearch.getElementsByTagName("input")[0].value = ""
                toTopButton.style.display = "block"
                productCategoriesDivs[i].style.display = "flex"
                e.style.background = "rebeccapurple"
                e.style.fontWeight = "bold"
                Array.from(productCategoriesButtons).forEach(ea => {
                    if (ea != e) {
                        ea.style.background = "inherit"
                        ea.style.fontWeight = "inherit"
                    }
                })
                Array.from(productCategoriesDivs).forEach(ea => {
                    if (ea != productCategoriesDivs[i]) {
                        ea.style.display = "none"
                    }
                })
            })
        }
    })

    searchInput.addEventListener("change", () => {
        Array.from(menuProduct).forEach(e => {
            let menuProductName = e.children[1].children[0].textContent
            if (!menuProductName.toLowerCase().includes(searchInput.value.toLowerCase()))
            {
                e.style.display = "none"
            } else {e.style.display = "flex"}
        })
    })
    

    allergensInfoButton.addEventListener("click", () => {
        allergensInfoDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.overflow = "hidden"
        allergensInfoDiv.style.pointerEvents = "all"
    })

    closeAllergensInfoButton.addEventListener("click", () => {
        allergensInfoDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
    })

    toTopButton.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })
    
})
