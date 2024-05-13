let productCategoriesButtons = []
let productCategoriesDivs = []
let allergensInfoButton
let closeAllergensInfoButton
let allergensInfoDiv
let toTopButton


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")

    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("category-div")
    allergensInfoButton = document.getElementById("allergens-info-button")
    closeAllergensInfoButton = document.getElementsByClassName("allergies-info-div-close")[0]
    allergensInfoDiv = document.getElementsByClassName("allergies-info-div")[0]
    toTopButton = document.getElementsByClassName("to-top")[0]


    Array.from(productCategoriesButtons).forEach((e, i) => {
        if (e.id.length == 0){
            e.addEventListener("click", () => {
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

    allergensInfoButton.addEventListener("click", () => {
        allergensInfoDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.overflow = "hidden"
        allergensInfoDiv.style.pointerEvents = "all"
        AllergensOpacityEnable()
    })

    closeAllergensInfoButton.addEventListener("click", () => {
        allergensInfoDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        AllergensOpacityDisable()
    })

    toTopButton.addEventListener("click", () => {
        window.scrollTo(0, 0)
    })
    
})

AllergensOpacityEnable = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.classList[0] == "main")
            {
                Array.from(e.children).forEach(ea => {
                    console.log(ea)
                    if (ea.classList[0] == "allergies-info-div") {ea.style.opacity = 1}
                    else {ea.style.opacity = 0.9}
                })
            }
        else {e.style.opacity = 0.9}
    })
}

AllergensOpacityDisable = () => {
    Array.from(document.body.children).forEach(e => {
        if (e.classList[0] == "main")
            {
                Array.from(e.children).forEach(ea => {
                    if (ea.classList[0] == "allergies-info-div") {ea.style.opacity = 1}
                    else {ea.style.opacity = 1}
                })
            }
        else {e.style.opacity = 1}
    })
}

