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



/* FETCH */
const burgersURL = "http://localhost:8080/BurgerGo/Controller?action=products.burgers"
const kidsURL = "http://localhost:8080/BurgerGo/Controller?action=products.kids"
const dessertsURL = "http://localhost:8080/BurgerGo/Controller?action=products.desserts"
const drinksURL = "http://localhost:8080/BurgerGo/Controller?action=products.drinks"
const othersURL = "http://localhost:8080/BurgerGo/Controller?action=products.others"

const fetchData = async () => {
    const burgersRes = await fetch(burgersURL)
    const kidsRes = await fetch(kidsURL)
    const dessertsRes = await fetch(dessertsURL)
    const drinksRes = await fetch(drinksURL)
    const othersRes = await fetch(othersURL)

    const burgersData = await burgersRes.json()
    const kidsData = await kidsRes.json()
    const dessertsData = await dessertsRes.json()
    const drinksData = await drinksRes.json()
    const othersData = await othersRes.json()

    console.log("burgersData --> ", burgersData)
    console.log("kidsData --> ", kidsData)
    console.log("dessertsData --> ", dessertsData)
    console.log("drinksData --> ", drinksData)
    console.log("othersData --> ", othersData)
    

    printBurgersData(burgersData)
    printKidsData(kidsData)
    printDessertsData(dessertsData)
    printDrinksData(drinksData)
    printOthersData(othersData)
}

/* BURGERS */
const printBurgersData = (data) => {
    Array.from(data).forEach(e => {
        const burgersCategory = document.getElementById("burgers-category")

        const menuProductDiv = document.createElement("div")
        burgersCategory.appendChild(menuProductDiv)
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

/* KIDS */
const printKidsData = (data) => {
    Array.from(data).forEach(e => {
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
const printDessertsData = (data) => {
    Array.from(data).forEach(e => {
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
const printDrinksData = (data) => {
    Array.from(data).forEach(e => {
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
const printOthersData = (data) => {
    Array.from(data).forEach(e => {
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

fetchData()
