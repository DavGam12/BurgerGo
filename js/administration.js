let adminButtons
let adminTables

document.addEventListener("DOMContentLoaded", () => {
    adminButtons = document.getElementsByClassName("admin-tables-options")[0].getElementsByTagName("button")
    adminTables = document.getElementsByClassName("admin-table")

    Array.from(adminButtons).forEach((e, i) => {
        e.addEventListener("click", () => {
            e.style.background = "goldenrod"
            e.style.fontWeight = "bold"
            adminTables[i].style.display = "flex"

            Array.from(adminButtons).forEach((a, j) => {
                if (e != a)
                {
                    a.style.background = "inherit"
                    a.style.fontWeight = "inherit"
                    adminTables[j].style.display = "none"
                }
            })
        })
    })
})




/* FLETCH */
const productsURL = "http://localhost:8080/BurgerGo/Controller?action=products.find_all"

const fetchData = async () => {
    const productsRes = await fetch(productsURL)

    const productsData = await productsRes.json()

    console.log("productsData --> ", productsData)

    printProductsData(productsData)
}

const printProductsData = (data) => {
    const currentTable = document.getElementsByClassName("products-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const idTh = document.createElement("th")
    currentRow.appendChild(idTh)
    idTh.textContent = "id".toUpperCase()
    const nameTh = document.createElement("th")
    currentRow.appendChild(nameTh)
    nameTh.textContent = "name".toUpperCase()
    const imgTh = document.createElement("th")
    currentRow.appendChild(imgTh)
    imgTh.textContent = "image url".toUpperCase()
    const priceTh = document.createElement("th")
    currentRow.appendChild(priceTh)
    priceTh.textContent = "price".toUpperCase()
    const descriptionTh = document.createElement("th")
    currentRow.appendChild(descriptionTh)
    descriptionTh.textContent = "description".toUpperCase()
    const categoryIdTh = document.createElement("th")
    currentRow.appendChild(categoryIdTh)
    categoryIdTh.textContent = "category id".toUpperCase()
    Array.from(data).forEach(e => {
        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const productID = document.createElement("td")
        currentRow.appendChild(productID)
        productID.classList.add("column")
        productID.textContent = e._productID

        const productName = document.createElement("td")
        currentRow.appendChild(productName)
        productName.classList.add("column")
        productName.textContent = e._productName

        const productImg = document.createElement("td")
        currentRow.appendChild(productImg)
        productImg.classList.add("column")
        productImg.textContent = e._productImg

        const productPrice = document.createElement("td")
        currentRow.appendChild(productPrice)
        productPrice.classList.add("column")
        productPrice.textContent = e._productPrice

        const productDescription = document.createElement("td")
        currentRow.appendChild(productDescription)
        productDescription.classList.add("column")
        productDescription.textContent = e._productDescription

        const productCategoryID = document.createElement("td")
        currentRow.appendChild(productCategoryID)
        productCategoryID.classList.add("column")
        productCategoryID.textContent = e._categoryID
    })
}


fetchData()
