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
const glutenFreeURL = "http://localhost:8080/BurgerGo/Controller?action=products.gluten-free"

const fetchData = async () => {
    const glutenFreeRes = await fetch(glutenFreeURL)

    const glutenFreeData = await glutenFreeRes.json()

    console.log("glutenFreeData --> ", glutenFreeData)

    printGlutenFreeData(glutenFreeData)
}

const printGlutenFreeData = (data) => {
    Array.from(data).forEach(e => {
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
