let productCategoriesButtons = []
let productCategoriesDivs = []

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")

    productCategoriesButtons = document.getElementsByClassName("product-categories")[0].getElementsByTagName("button")
    productCategoriesDivs = document.getElementsByClassName("category-div")


    Array.from(productCategoriesButtons).forEach((e, i) => {
        e.addEventListener("click", () => {
            productCategoriesDivs[i].style.display = "flex"
            e.style.background = "rebeccapurple"
            e.style.fontWeight = "bold"
            Array.from(productCategoriesButtons).forEach(ea => {
                if (ea != e) 
                    {
                        ea.style.background = "inherit"
                        ea.style.fontWeight = "inherit"
                    }
            })
            Array.from(productCategoriesDivs).forEach(ea => {
                if (ea != productCategoriesDivs[i]) 
                    {
                        ea.style.display = "none"
                    }
            })
        })
    })

    
})