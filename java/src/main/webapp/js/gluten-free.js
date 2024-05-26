let allergiesInfoDiv
let allergiesInfoButton
let closeAllergiesInfoDiv


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")

    allergiesInfoDiv = document.getElementsByClassName("allergies-info-div")[0]
    allergiesInfoButton = document.getElementById("allergens-info-button")
    closeAllergiesInfoDiv = document.getElementsByClassName("allergies-info-div-close")[0]

    allergiesInfoButton.addEventListener("click", () => {
        allergiesInfoDiv.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.overflow = "hidden"
        allergiesInfoDiv.style.pointerEvents = "all"
    })
    closeAllergiesInfoDiv.addEventListener("click", () => {
        allergiesInfoDiv.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
    })
})


/* FETCH */
const glutenFreeURL = "http://localhost:8080/BurgerGo/Controller?action=products.gluten_free"
const allergensURL = "http://localhost:8080/BurgerGo/Controller?action=allergens.find_all"
const allergiesURL = "http://localhost:8080/BurgerGo/Controller?action=allergies.find_all"

const fetchData = async () => {
    const [glutenFreeRes, allergensRes, allergiesRes] = await Promise.all([fetch(glutenFreeURL), fetch(allergensURL), fetch(allergiesURL)])

    const glutenFreeData = await glutenFreeRes.json()
    const allergensData = await allergensRes.json()
    const allergiesData = await allergiesRes.json()

    console.log("glutenFreeData --> ", glutenFreeData)
    console.log("allergensRes --> ", allergensData)
    console.log("allergiesData --> ", allergiesData)

    printGlutenFreeData(glutenFreeData, allergensData, allergiesData)
    printAllergensData(allergensData)
}

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
