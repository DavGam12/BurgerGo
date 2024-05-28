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
                searchInput.value = ""
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
                Array.from(menuProduct).forEach(ea => {
                    ea.style.display = "flex"
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
const allergensURL = "http://localhost:8080/BurgerGo/Controller?action=allergens.find_all"
const allergiesURL = "http://localhost:8080/BurgerGo/Controller?action=allergies.find_all"

const fetchData = async () => {
    const [burgersRes, kidsRes, dessertsRes, drinksRes, othersRes, allergensRes, allergiesRes] = await Promise.all([fetch(burgersURL), fetch(kidsURL), fetch(dessertsURL), fetch(drinksURL), fetch(othersURL), fetch(allergensURL), fetch(allergiesURL)])

    const burgersData = await burgersRes.json()
    const kidsData = await kidsRes.json()
    const dessertsData = await dessertsRes.json()
    const drinksData = await drinksRes.json()
    const othersData = await othersRes.json()
    const allergensData = await allergensRes.json()
    const allergiesData = await allergiesRes.json()

    console.log("burgersData --> ", burgersData)
    console.log("kidsData --> ", kidsData)
    console.log("dessertsData --> ", dessertsData)
    console.log("drinksData --> ", drinksData)
    console.log("othersData --> ", othersData)
    console.log("allergensData --> ", allergensData)
    console.log("allergiesData --> ", allergiesData)

    printBurgersData(burgersData, allergensData, allergiesData)
    printKidsData(kidsData, allergensData, allergiesData)
    printDessertsData(dessertsData, allergensData, allergiesData)
    printDrinksData(drinksData, allergensData, allergiesData)
    printOthersData(othersData, allergensData, allergiesData)
    printAllergensData(allergensData)
}

/* BURGERS */
const printBurgersData = (mainData, secondData, intermediateData) => {
    Array.from(mainData).forEach(e => {
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
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
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
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
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
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
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
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
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
        productPrice.textContent = e._productPrice.toFixed(2)+"€"
        const productAllergies = document.createElement("div")
        productInfo.appendChild(productAllergies)
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
    })
}

/* ALLERGENS INFO */
const printAllergensData = (data) => {
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
        
    Array.from(data).forEach(e => {
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
