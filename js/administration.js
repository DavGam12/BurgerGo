const url = new URL(window.location.href)
const urlParams = new URLSearchParams(url.search)

const baseURL = new URL("http://localhost:8080/BurgerGo/Controller")



let adminButtons
let adminTables

document.addEventListener("DOMContentLoaded", () => {
    adminButtons = document.getElementsByClassName("admin-tables-options")[0].getElementsByTagName("button")
    adminTables = document.getElementsByClassName("admin-table")

    const curentAddDivClose = document.getElementsByClassName("current-add-div-close")
    const curentAddDivAccept = document.getElementsByClassName("current-add-div-accept")
    const curentUpdateDivClose = document.getElementsByClassName("current-update-div-close")
    const curentUpdateDivAccept = document.getElementsByClassName("current-update-div-accept")
    const currentDeleteDivCancelButton = document.getElementsByClassName("current-delete-div-cancel")
    const currentDeleteDivAcceptButton = document.getElementsByClassName("current-delete-div-accept")
    const currentResetDivCancelButton = document.getElementsByClassName("current-reset-div-cancel")[0]
    const currentResetDivAcceptButton = document.getElementsByClassName("current-reset-div-accept")[0]

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

            resetCurrentURL()
            resetCurrentURL()
        })
    })

    Array.from(curentAddDivClose).forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            resetCurrentURL()
        })
    })
    Array.from(curentAddDivAccept).forEach(e => {
        e.addEventListener("click", async () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            objectValuesKeeper = objectElementsKeeper
            Object.keys(objectValuesKeeper).forEach(o => {objectValuesKeeper[o] = objectValuesKeeper[o].value})
            try
            {
                await addFetch(objectValuesKeeper)
                await fetchReload(e.parentElement.parentElement.parentElement.classList[0], e.parentElement.parentElement.parentElement.getElementsByTagName("table")[0])
            }
            catch (Exception) {alert("Invalid Value")}
        })
    })
    Array.from(curentUpdateDivClose).forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            resetCurrentURL()
        })
    })
    Array.from(curentUpdateDivAccept).forEach(e => {
        e.addEventListener("click", async () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            objectValuesKeeper = objectElementsKeeper
            Object.keys(objectValuesKeeper).forEach(o => {objectValuesKeeper[o] = objectValuesKeeper[o].value})
            try
            {
                await updateFetch(objectValuesKeeper)
                await fetchReload(e.parentElement.parentElement.parentElement.classList[0], e.parentElement.parentElement.parentElement.getElementsByTagName("table")[0])
            }
            catch (Exception) {alert("Invalid Value")}
        })
    })
    Array.from(currentDeleteDivCancelButton).forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            resetCurrentURL()
            resetCurrentURL()
        })
    })
    Array.from(currentDeleteDivAcceptButton).forEach(e => {
        e.addEventListener("click", async () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            try
            {
                await deleteFetch(objectValuesKeeper)
                await fetchReload(e.parentElement.parentElement.parentElement.classList[0], e.parentElement.parentElement.parentElement.getElementsByTagName("table")[0])
            }
            catch (Exception) {alert("Invalid Value")}
        })
    })

    currentResetDivCancelButton.addEventListener("click", () => {
        currentResetDivCancelButton.parentElement.parentElement.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        resetCurrentURL()
    })
    currentResetDivAcceptButton.addEventListener("click", async () => {
        currentResetDivCancelButton.parentElement.parentElement.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        currentActionURL("allergies.reset")
        alert("Reset in process.\nPlease wait a few seconds before doing any other action")
        await resetFetch()
        await fetchReload(currentResetDivAcceptButton.parentElement.parentElement.parentElement.classList[0], currentResetDivAcceptButton.parentElement.parentElement.parentElement.getElementsByTagName("table")[0])
        alert("Reset Completed")
    })

})




/* FLETCH */
const allergensURL = "http://localhost:8080/BurgerGo/Controller?action=allergens.find_all"
const allergiesURL = "http://localhost:8080/BurgerGo/Controller?action=allergies.find_all"
const categoriesURL = "http://localhost:8080/BurgerGo/Controller?action=categories.find_all"
const productsURL = "http://localhost:8080/BurgerGo/Controller?action=products.find_all"
const jobsURL = "http://localhost:8080/BurgerGo/Controller?action=jobs.find_all"
const employeesURL = "http://localhost:8080/BurgerGo/Controller?action=employees.find_all"
const customersURL = "http://localhost:8080/BurgerGo/Controller?action=customers.find_all"
const ordersURL = "http://localhost:8080/BurgerGo/Controller?action=orders.find_all"
const detailsURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_all"


async function fetchDataAsync()
{
    const [ allergensRes, allergiesRes, categoriesRes, productsRes, jobsRes, 
            employeesRes, customersRes, ordersRes, detailsRes ] = await Promise.all([fetch(allergensURL), fetch(allergiesURL), fetch(categoriesURL), fetch(productsURL), fetch(jobsURL), fetch(employeesURL), fetch(customersURL), fetch(ordersURL),  fetch(detailsURL) ]);
    
    const allergensData = await allergensRes.json();
    const allergiesData = await allergiesRes.json();
    const categoriesData = await categoriesRes.json();
    const productsData = await productsRes.json();
    const jobsData = await jobsRes.json();
    const employeesData = await employeesRes.json();
    const customersData = await customersRes.json();
    const ordersData = await ordersRes.json();
    const detailsData = await detailsRes.json();

    console.log("allergensData --> ", allergensData)
    console.log("allergiesData --> ", allergiesData)
    console.log("categoriesData --> ", categoriesData)
    console.log("productsData --> ", productsData)
    console.log("jobsData --> ", jobsData)
    console.log("employeesData --> ", employeesData)
    console.log("customersData --> ", customersData)
    console.log("ordersData --> ", ordersData)
    console.log("detailsData --> ", detailsData)

    printAllergensData(allergensData);
    printAllergiesData(allergiesData);
    printCategoriesData(categoriesData);
    printProductsData(productsData);
    printJobsData(jobsData);
    printEmployeesData(employeesData);
    printCustomersData(customersData);
    printOrdersData(ordersData);
    printDetailsData(detailsData);
}

const fetchReload = async (c, t) => {
    switch (c)
    {
        case "allergens-table":
            {
                fetchDataAllergens(t)
                break
            }
        case "allergies-table":
            {
                fetchDataAllergies(t)
                break
            }
        case "categories-table":
            {
                fetchDataCategories(t)
                break
            }
        case "products-table":
            {
                fetchDataProducts(t)
                break
            }
        case "jobs-table":
            {
                fetchDataJobs(t)
                break
            }
        case "employees-table":
            {
                fetchDataEmployees(t)
                break
            }
        case "customers-table":
            {
                fetchDataCustomers(t)
                break
            }
        case "orders-table":
            {
                fetchDataOrders(t)
                break
            }
        case "details-table":
            {
                fetchDataDetails(t)
                break
            }
    }
}

async function fetchDataAllergens(t)
{
    const allergensRes= await fetch(allergensURL);
    const allergensData = await allergensRes.json();
    t.innerHTML = ""
    printAllergensData(allergensData);
}

async function fetchDataAllergies(t)
{
    const allergiesRes= await fetch(allergiesURL);
    const allergiesData = await allergiesRes.json();
    t.innerHTML = ""
    printAllergiesData(allergiesData);
}

async function fetchDataCategories(t)
{
    const categoriesRes= await fetch(categoriesURL);
    const categoriesData = await categoriesRes.json();
    t.innerHTML = ""
    printCategoriesData(categoriesData);
}

async function fetchDataProducts(t)
{
    const productsRes= await fetch(productsURL);
    const productsData = await productsRes.json();
    t.innerHTML = ""
    printProductsData(productsData);
}

async function fetchDataJobs(t)
{
    const jobsRes= await fetch(jobsURL);
    const jobsData = await jobsRes.json();
    t.innerHTML = ""
    printJobsData(jobsData);
}

async function fetchDataEmployees(t)
{
    const employeesRes= await fetch(employeesURL);
    const employeesData = await employeesRes.json();
    t.innerHTML = ""
    printEmployeesData(employeesData);
}

async function fetchDataCustomers(t)
{
    const customersRes= await fetch(customersURL);
    const customersData = await customersRes.json();
    t.innerHTML = ""
    printCustomersData(customersData);
}

async function fetchDataOrders(t)
{
    const ordersRes= await fetch(ordersURL);
    const ordersData = await ordersRes.json();
    t.innerHTML = ""
    printOrdersData(ordersData);
}

async function fetchDataDetails(t)
{
    const detailsRes= await fetch(detailsURL);
    const detailsData = await detailsRes.json();
    t.innerHTML = ""
    printDetailsData(detailsData);
}

/* ALLERGENS TABLE */
const printAllergensData = (data) => {
    const currentTable = document.getElementsByClassName("allergens-table")[0].getElementsByTagName("table")[0]
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
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {


        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const allergenID = document.createElement("td")
        currentRow.appendChild(allergenID)
        allergenID.classList.add("column")
        allergenID.textContent = e._allergenID

        const allergenName = document.createElement("td")
        currentRow.appendChild(allergenName)
        allergenName.classList.add("column")
        allergenName.textContent = e._allergenName

        const allergenImg = document.createElement("td")
        currentRow.appendChild(allergenImg)
        allergenImg.classList.add("column")
        allergenImg.textContent = e._allergenImg

        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._allergenID
            const currentID = {value: e._allergenID}

            document.getElementById("allergens-update-id").value = e._allergenID
            document.getElementById("allergens-update-name").value = e._allergenName
            document.getElementById("allergens-update-img").value = e._allergenImg
            objectElementsKeeper = {
                _currentAllergenID: currentID,
                _allergenID: document.getElementById("allergens-update-id"),
                _allergenName: document.getElementById("allergens-update-name"),
                _allergenImg: document.getElementById("allergens-update-img")
            }
            currentActionURL("allergens.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._allergenID
            const currentID = e._allergenID

            objectValuesKeeper = {_allergenID: currentID}
            currentActionURL("allergens.delete")
        })


    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _allergenID: document.getElementById("allergens-add-id"),
            _allergenName: document.getElementById("allergens-add-name"),
            _allergenImg: document.getElementById("allergens-add-img")
        }
        currentActionURL("allergens.add")
    })
})
}

/* ALLERGIES TABLE */
const printAllergiesData = (data) => {
    const currentTable = document.getElementsByClassName("allergies-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const allergyIdTh = document.createElement("th")
    currentRow.appendChild(allergyIdTh)
    allergyIdTh.textContent = "allergy id".toUpperCase()
    const allergenIdTh = document.createElement("th")
    currentRow.appendChild(allergenIdTh)
    allergenIdTh.textContent = "allergen id".toUpperCase()
    const productIdTh = document.createElement("th")
    currentRow.appendChild(productIdTh)
    productIdTh.textContent = "product id".toUpperCase()

    const resetDiv = document.getElementsByClassName("allergies-table")[0].getElementsByClassName("current-reset-div")[0]

    Array.from(data).forEach(e => {


        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const allergyID = document.createElement("td")
        currentRow.appendChild(allergyID)
        allergyID.classList.add("column")
        allergyID.textContent = e._allergyID

        const allergenID = document.createElement("td")
        currentRow.appendChild(allergenID)
        allergenID.classList.add("column")
        allergenID.textContent = e._allergenID

        const productID = document.createElement("td")
        currentRow.appendChild(productID)
        productID.classList.add("column")
        productID.textContent = e._productID

    })
        /* SETTING UP THE EVENT LISTENERS */
    currentTable.parentElement.getElementsByClassName("current-reset")[0].addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        resetDiv.style.display = "flex"
        resetDiv.style.pointerEvents = "all"
        currentActionURL("allergies")
    })

}

/* CATEGORIES TABLE */
const printCategoriesData = (data) => {
    const currentTable = document.getElementsByClassName("categories-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const categoryIdTh = document.createElement("th")
    currentRow.appendChild(categoryIdTh)
    categoryIdTh.textContent = "category id".toUpperCase()
    const categoryNameTh = document.createElement("th")
    currentRow.appendChild(categoryNameTh)
    categoryNameTh.textContent = "category name".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("categories-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("categories-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("categories-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const categoryID = document.createElement("td")
        currentRow.appendChild(categoryID)
        categoryID.classList.add("column")
        categoryID.textContent = e._categoryID

        const categoryName = document.createElement("td")
        currentRow.appendChild(categoryName)
        categoryName.classList.add("column")
        categoryName.textContent = e._categoryName


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._categoryID
            const currentID = { value: e._categoryID }

            document.getElementById("categories-update-id").value = e._categoryID
            document.getElementById("categories-update-name").value = e._categoryName
            objectElementsKeeper = {
                _currentCategoryID: currentID,
                _categoryID: document.getElementById("categories-update-id"),
                _categoryName: document.getElementById("categories-update-name")
            }
            currentActionURL("categories.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._categoryID
            const currentID = e._categoryID

            objectValuesKeeper = { _categoryID: currentID }
            currentActionURL("categories.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _categoryID: document.getElementById("categories-add-id"),
            _categoryName: document.getElementById("categories-add-name")
        }
        currentActionURL("categories.add")
    })
}

/* PRODUCTS TABLE */
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
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("products-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("products-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("products-table")[0].getElementsByClassName("current-delete-div")[0]

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


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._productID
            const currentID = { value: e._productID }

            document.getElementById("products-update-id").value = e._productID
            document.getElementById("products-update-name").value = e._productName
            document.getElementById("products-update-img").value = e._productImg
            objectElementsKeeper = {
                _currentproductID: currentID,
                _productID: document.getElementById("products-update-id"),
                _productName: document.getElementById("products-update-name"),
                _productImg: document.getElementById("products-update-img"),
                _productPrice: document.getElementById("products-update-price"),
                _productDescription: document.getElementById("products-update-description"),
                _categoryID: document.getElementById("products-update-category-id")
            }
            currentActionURL("products.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._productID
            const currentID = e._productID

            objectValuesKeeper = { _productID: currentID }
            currentActionURL("products.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _productID: document.getElementById("products-add-id"),
            _productName: document.getElementById("products-add-name"),
            _productImg: document.getElementById("products-add-img"),
            _productPrice: document.getElementById("products-add-price"),
            _productDescription: document.getElementById("products-add-description"),
            _categoryID: document.getElementById("products-add-category-id")
        }
        currentActionURL("products.add")
    })
}

/* JOBS TABLE*/
const printJobsData = (data) => {
    const currentTable = document.getElementsByClassName("jobs-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const jobIdTh = document.createElement("th")
    currentRow.appendChild(jobIdTh)
    jobIdTh.textContent = "job id".toUpperCase()
    const jobNameTh = document.createElement("th")
    currentRow.appendChild(jobNameTh)
    jobNameTh.textContent = "job name".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("jobs-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("jobs-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("jobs-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const jobID = document.createElement("td")
        currentRow.appendChild(jobID)
        jobID.classList.add("column")
        jobID.textContent = e._jobID

        const jobName = document.createElement("td")
        currentRow.appendChild(jobName)
        jobName.classList.add("column")
        jobName.textContent = e._jobName


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._jobID
            const currentID = { value: e._jobID }

            document.getElementById("jobs-update-id").value = e._jobID
            document.getElementById("jobs-update-name").value = e._jobName
            objectElementsKeeper = {
                _currentJobID: currentID,
                _jobID: document.getElementById("jobs-update-id"),
                _jobName: document.getElementById("jobs-update-name")
            }
            currentActionURL("jobs.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._jobID
            const currentID = e._jobID

            objectValuesKeeper = { _jobID: currentID }
            currentActionURL("jobs.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _jobID: document.getElementById("jobs-add-id"),
            _jobName: document.getElementById("jobs-add-name")
        }
        currentActionURL("jobs.add")
    })
}

/* EMPLOYEES TABLE */
const printEmployeesData = (data) => {
    const currentTable = document.getElementsByClassName("employees-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const idTh = document.createElement("th")
    currentRow.appendChild(idTh)
    idTh.textContent = "id".toUpperCase()
    const firstNameTh = document.createElement("th")
    currentRow.appendChild(firstNameTh)
    firstNameTh.textContent = "first name".toUpperCase()
    const lastNameTh = document.createElement("th")
    currentRow.appendChild(lastNameTh)
    lastNameTh.textContent = "last name".toUpperCase()
    const ssNumberTh = document.createElement("th")
    currentRow.appendChild(ssNumberTh)
    ssNumberTh.textContent = "ss number".toUpperCase()
    const emailTh = document.createElement("th")
    currentRow.appendChild(emailTh)
    emailTh.textContent = "email".toUpperCase()
    const birthDateTh = document.createElement("th")
    currentRow.appendChild(birthDateTh)
    birthDateTh.textContent = "birth date".toUpperCase()
    const hireDateTh = document.createElement("th")
    currentRow.appendChild(hireDateTh)
    hireDateTh.textContent = "hire date".toUpperCase()
    const salaryTh = document.createElement("th")
    currentRow.appendChild(salaryTh)
    salaryTh.textContent = "salary".toUpperCase()
    const permissionTh = document.createElement("th")
    currentRow.appendChild(permissionTh)
    permissionTh.textContent = "permission".toUpperCase()
    const passwordTh = document.createElement("th")
    currentRow.appendChild(passwordTh)
    passwordTh.textContent = "password".toUpperCase()
    const jobIdTh = document.createElement("th")
    currentRow.appendChild(jobIdTh)
    jobIdTh.textContent = "job id".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("employees-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("employees-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("employees-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {
        
        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const employeeID = document.createElement("td")
        currentRow.appendChild(employeeID)
        employeeID.classList.add("column")
        employeeID.textContent = e._employeeID

        const employeeFirstName = document.createElement("td")
        currentRow.appendChild(employeeFirstName)
        employeeFirstName.classList.add("column")
        employeeFirstName.textContent = e._firstName

        const employeeLastName = document.createElement("td")
        currentRow.appendChild(employeeLastName)
        employeeLastName.classList.add("column")
        employeeLastName.textContent = e._lastName

        const employeeSsNumber = document.createElement("td")
        currentRow.appendChild(employeeSsNumber)
        employeeSsNumber.classList.add("column")
        employeeSsNumber.textContent = e._ssNumber

        const employeeEmail = document.createElement("td")
        currentRow.appendChild(employeeEmail)
        employeeEmail.classList.add("column")
        employeeEmail.textContent = e._email

        const employeeBirthDate = document.createElement("td")
        currentRow.appendChild(employeeBirthDate)
        employeeBirthDate.classList.add("column")
        employeeBirthDate.textContent = e._birthDate

        const employeeHireDate = document.createElement("td")
        currentRow.appendChild(employeeHireDate)
        employeeHireDate.classList.add("column")
        employeeHireDate.textContent = e._hireDate

        const employeeSalary = document.createElement("td")
        currentRow.appendChild(employeeSalary)
        employeeSalary.classList.add("column")
        employeeSalary.textContent = e._salary

        const employeePermission = document.createElement("td")
        currentRow.appendChild(employeePermission)
        employeePermission.classList.add("column")
        employeePermission.textContent = e._permission

        const employeePassword = document.createElement("td")
        currentRow.appendChild(employeePassword)
        employeePassword.classList.add("column")
        employeePassword.textContent = e._password

        const employeeJobId = document.createElement("td")
        currentRow.appendChild(employeeJobId)
        employeeJobId.classList.add("column")
        employeeJobId.textContent = e._jobID


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        
        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._employeeID
            const currentID = { value: e._employeeID }

            document.getElementById("employees-update-id").value = e._employeeID
            document.getElementById("employees-update-first-name").value = e._firstName
            document.getElementById("employees-update-last-name").value = e._lastName
            document.getElementById("employees-update-ss-number").value = e._ssNumber
            document.getElementById("employees-update-email").value = e._email
            document.getElementById("employees-update-birth-date").value = e._birthDate
            document.getElementById("employees-update-hire-date").value = e._hireDate
            document.getElementById("employees-update-salary").value = e._salary
            document.getElementById("employees-update-permission").value = e._permission
            document.getElementById("employees-update-password").value = e._password
            document.getElementById("employees-update-job-id").value = e._jobID
            objectElementsKeeper = {
                _currentEmployeeID: currentID,
                _employeeID: document.getElementById("employees-update-id"),
                _firstName: document.getElementById("employees-update-first-name"),
                _lastName: document.getElementById("employees-update-last-name"),
                _ssNumber: document.getElementById("employees-update-ss-number"),
                _email: document.getElementById("employees-update-email"),
                _birthDate: document.getElementById("employees-update-birth-date"),
                _hireDate: document.getElementById("employees-update-hire-date"),
                _salary: document.getElementById("employees-update-salary"),
                _permission: document.getElementById("employees-update-permission"),
                _password: document.getElementById("employees-update-password"),
                _jobID: document.getElementById("employees-update-job-id")
            }
            currentActionURL("employees.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._employeeID
            const currentID = e._employeeID

            objectValuesKeeper = { _employeeID: currentID }
            currentActionURL("employees.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _employeeID: document.getElementById("employees-add-id"),
            _firstName: document.getElementById("employees-add-first-name"),
            _lastName: document.getElementById("employees-add-last-name"),
            _ssNumber: document.getElementById("employees-add-ss-number"),
            _email: document.getElementById("employees-add-email"),
            _birthDate: document.getElementById("employees-add-birth-date"),
            _hireDate: document.getElementById("employees-add-hire-date"),
            _salary: document.getElementById("employees-add-salary"),
            _permission: document.getElementById("employees-add-permission"),
            _password: document.getElementById("employees-add-password"),
            _jobID: document.getElementById("employees-add-job-id")
        }
        currentActionURL("employees.add")
    })
}

/* CUSTOMERS TABLE */
const printCustomersData = (data) => {
    const currentTable = document.getElementsByClassName("customers-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const idTh = document.createElement("th")
    currentRow.appendChild(idTh)
    idTh.textContent = "id".toUpperCase()
    const firstNameTh = document.createElement("th")
    currentRow.appendChild(firstNameTh)
    firstNameTh.textContent = "first name".toUpperCase()
    const lastNameTh = document.createElement("th")
    currentRow.appendChild(lastNameTh)
    lastNameTh.textContent = "last name".toUpperCase()
    const emailTh = document.createElement("th")
    currentRow.appendChild(emailTh)
    emailTh.textContent = "email".toUpperCase()
    const phoneNumberTh = document.createElement("th")
    currentRow.appendChild(phoneNumberTh)
    phoneNumberTh.textContent = "phone number".toUpperCase()
    const passwordTh = document.createElement("th")
    currentRow.appendChild(passwordTh)
    passwordTh.textContent = "password".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("customers-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("customers-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("customers-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const customerID = document.createElement("td")
        currentRow.appendChild(customerID)
        customerID.classList.add("column")
        customerID.textContent = e._customerID

        const customerFirstName = document.createElement("td")
        currentRow.appendChild(customerFirstName)
        customerFirstName.classList.add("column")
        customerFirstName.textContent = e._firstName

        const customerLastName = document.createElement("td")
        currentRow.appendChild(customerLastName)
        customerLastName.classList.add("column")
        customerLastName.textContent = e._lastName

        const customerEmail = document.createElement("td")
        currentRow.appendChild(customerEmail)
        customerEmail.classList.add("column")
        customerEmail.textContent = e._email

        const customerPhoneNumber = document.createElement("td")
        currentRow.appendChild(customerPhoneNumber)
        customerPhoneNumber.classList.add("column")
        customerPhoneNumber.textContent = e._phoneNumber

        const customerPassword = document.createElement("td")
        currentRow.appendChild(customerPassword)
        customerPassword.classList.add("column")
        customerPassword.textContent = e._password


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        
        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._customerID
            const currentID = { value: e._customerID }

            document.getElementById("customers-update-first-name").value = e._firstName
            document.getElementById("customers-update-last-name").value = e._lastName
            document.getElementById("customers-update-email").value = e._email
            document.getElementById("customers-update-phone-number").value = e._phoneNumber
            document.getElementById("customers-update-password").value = e._password
            objectElementsKeeper = {
                _currentCustomerID: currentID,
                _firstName: document.getElementById("customers-update-first-name"),
                _lastName: document.getElementById("customers-update-last-name"),
                _email: document.getElementById("customers-update-email"),
                _phoneNumber: document.getElementById("customers-update-phone-number"),
                _password: document.getElementById("customers-update-password")
            }
            currentActionURL("customers.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._customerID
            const currentID = e._customerID

            objectValuesKeeper = { _customerID: currentID }
            currentActionURL("customers.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _firstName: document.getElementById("customers-add-first-name"),
            _lastName: document.getElementById("customers-add-last-name"),
            _email: document.getElementById("customers-add-email"),
            _phoneNumber: document.getElementById("customers-add-phone-number"),
            _password: document.getElementById("customers-add-password")
        }
        currentActionURL("customers.add")
    })
}

/* ORDERS TABLE */
const printOrdersData = (data) => {
    const currentTable = document.getElementsByClassName("orders-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const idTh = document.createElement("th")
    currentRow.appendChild(idTh)
    idTh.textContent = "id".toUpperCase()
    const orderStateTh = document.createElement("th")
    currentRow.appendChild(orderStateTh)
    orderStateTh.textContent = "order state".toUpperCase()
    const directionTh = document.createElement("th")
    currentRow.appendChild(directionTh)
    directionTh.textContent = "direction".toUpperCase()
    const orderPriceTh = document.createElement("th")
    currentRow.appendChild(orderPriceTh)
    orderPriceTh.textContent = "order price".toUpperCase()
    const orderDateTh = document.createElement("th")
    currentRow.appendChild(orderDateTh)
    orderDateTh.textContent = "order date".toUpperCase()
    const employeeIdTh = document.createElement("th")
    currentRow.appendChild(employeeIdTh)
    employeeIdTh.textContent = "employee id".toUpperCase()
    const customerIdTh = document.createElement("th")
    currentRow.appendChild(customerIdTh)
    customerIdTh.textContent = "customer id".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("orders-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("orders-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("orders-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const orderID = document.createElement("td")
        currentRow.appendChild(orderID)
        orderID.classList.add("column")
        orderID.textContent = e._orderID

        const orderState = document.createElement("td")
        currentRow.appendChild(orderState)
        orderState.classList.add("column")
        orderState.textContent = e._orderState

        const orderDirection = document.createElement("td")
        currentRow.appendChild(orderDirection)
        orderDirection.classList.add("column")
        orderDirection.textContent = e._direction

        const orderPrice = document.createElement("td")
        currentRow.appendChild(orderPrice)
        orderPrice.classList.add("column")
        orderPrice.textContent = e._orderPrice

        const orderDate = document.createElement("td")
        currentRow.appendChild(orderDate)
        orderDate.classList.add("column")
        orderDate.textContent = e._orderDate

        const employeeID = document.createElement("td")
        currentRow.appendChild(employeeID)
        employeeID.classList.add("column")
        employeeID.textContent = e._employeeID

        const customerID = document.createElement("td")
        currentRow.appendChild(customerID)
        customerID.classList.add("column")
        customerID.textContent = e._customerID


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        
        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._allergenID
            const currentID = { value: e._orderID }

            document.getElementById("orders-update-order-state").value = e._orderState
            document.getElementById("orders-update-direction").value = e._direction
            document.getElementById("orders-update-order-price").value = e._orderPrice
            document.getElementById("orders-update-order-date").value = e._orderDate
            document.getElementById("orders-update-employee-id").value = e._employeeID
            document.getElementById("orders-update-customer-id").value = e._customerID
            objectElementsKeeper = {
                _currentorderID: currentID,
                _orderState: document.getElementById("orders-update-order-state"),
                _direction: document.getElementById("orders-update-direction"),
                _orderPrice: document.getElementById("orders-update-order-price"),
                _orderDate: document.getElementById("orders-update-order-date"),
                _employeeID: document.getElementById("orders-update-employee-id"),
                _customerID: document.getElementById("orders-update-customer-id")
            }
            currentActionURL("orders.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._orderID
            const currentID = e._orderID

            objectValuesKeeper = { _orderID: currentID }
            currentActionURL("orders.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _orderState: document.getElementById("orders-add-order-state"),
            _direction: document.getElementById("orders-add-direction"),
            _orderPrice: document.getElementById("orders-add-order-price"),
            _orderDate: document.getElementById("orders-add-order-date"),
            _employeeID: document.getElementById("orders-add-employee-id"),
            _customerID: document.getElementById("orders-add-customer-id")
        }
        currentActionURL("orders.add")
    })
}

/* DETAILS TABLE */
const printDetailsData = (data) => {
    const currentTable = document.getElementsByClassName("details-table")[0].getElementsByTagName("table")[0]
    const currentRow = document.createElement("tr")
    currentTable.appendChild(currentRow)
    const idTh = document.createElement("th")
    currentRow.appendChild(idTh)
    idTh.textContent = "id".toUpperCase()
    const productQuantityTh = document.createElement("th")
    currentRow.appendChild(productQuantityTh)
    productQuantityTh.textContent = "product quantity".toUpperCase()
    const priceTh = document.createElement("th")
    currentRow.appendChild(priceTh)
    priceTh.textContent = "detail price".toUpperCase()
    priceTh.textContent = "detail price".toUpperCase()
    const orderIdTh = document.createElement("th")
    currentRow.appendChild(orderIdTh)
    orderIdTh.textContent = "order id".toUpperCase()
    const productIdTh = document.createElement("th")
    currentRow.appendChild(productIdTh)
    productIdTh.textContent = "product id".toUpperCase()
    const actionTh = document.createElement("th")
    currentRow.appendChild(actionTh)
    actionTh.textContent = "action".toUpperCase()

    const addDiv = document.getElementsByClassName("details-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("details-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("details-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentRow = document.createElement("tr")
        currentTable.appendChild(currentRow)

        const detailID = document.createElement("td")
        currentRow.appendChild(detailID)
        detailID.classList.add("column")
        detailID.textContent = e._detailID

        const productQuantity = document.createElement("td")
        currentRow.appendChild(productQuantity)
        productQuantity.classList.add("column")
        productQuantity.textContent = e._productQuantity

        const detailPrice = document.createElement("td")
        currentRow.appendChild(detailPrice)
        detailPrice.classList.add("column")
        detailPrice.textContent = e._detailPrice

        const orderID = document.createElement("td")
        currentRow.appendChild(orderID)
        orderID.classList.add("column")
        orderID.textContent = e._orderID

        const productID = document.createElement("td")
        currentRow.appendChild(productID)
        productID.classList.add("column")
        productID.textContent = e._productID


        const actButtons = document.createElement("td")
        currentRow.appendChild(actButtons)
        actButtons.classList.add("action-buttons")
        const actionsDiv = document.createElement("div")
        actButtons.appendChild(actionsDiv)
        actionsDiv.classList.add("action-buttons-container")

        const updateButton = document.createElement("button")
        actionsDiv.appendChild(updateButton)
        updateButton.classList.add("update-button")
        const updateImgDiv = document.createElement("div")
        updateButton.appendChild(updateImgDiv)
        const updateImg = document.createElement("img")
        updateImgDiv.appendChild(updateImg)
        updateImg.setAttribute("src", "../Images/update.png")

        const deleteButton = document.createElement("button")
        actionsDiv.appendChild(deleteButton)
        deleteButton.classList.add("delete-button")
        const deleteImgDiv = document.createElement("div")
        deleteButton.appendChild(deleteImgDiv)
        const deleteImg = document.createElement("img")
        deleteImgDiv.appendChild(deleteImg)
        deleteImg.setAttribute("src", "../Images/less.png")


        
        /* SETTING UP THE EVENT LISTENERS */
        updateButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._detailID
            const currentID = { value: e._detailID }

            document.getElementById("details-update-product-quantity").value = e._productQuantity
            document.getElementById("details-update-detail-price").value = e._detailPrice
            document.getElementById("details-update-order-id").value = e._orderID
            document.getElementById("details-update-product-id").value = e._productID
            objectElementsKeeper = {
                _currentdetailID: currentID,
                _productQuantity: document.getElementById("details-update-product-quantity"),
                _detailPrice: document.getElementById("details-update-detail-price"),
                _orderID: document.getElementById("details-update-order-id"),
                _productID: document.getElementById("details-update-product-id")
            }
            currentActionURL("details.update")
        })

        deleteButton.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._detailID
            const currentID = e._detailID

            objectValuesKeeper = { _detailID: currentID }
            currentActionURL("details.delete")
        })
    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            _productQuantity: document.getElementById("details-add-product-quantity"),
            _detailPrice: document.getElementById("details-add-detail-price"),
            _orderID: document.getElementById("details-add-order-id"),
            _productID: document.getElementById("details-add-product-id")
        }
        currentActionURL("details.add")
    })
}


fetchDataAsync();


const currentActionURL = (act) => {
    urlParams.set("action", act)
    updateCurrentURL()
}

/* change the url without reload (line 2 of the function) */
const updateCurrentURL = () => {
    url.search = urlParams.toString()
    window.history.replaceState(null, null, url.href)
    baseURL.search = urlParams.toString()
}

const resetCurrentURL = () => {
    let paramsGeneralSplit = urlParams.toString().split("&")
    Array.from(paramsGeneralSplit).forEach(e => {
        let ea = e.split("=") 
        urlParams.delete(ea[0])
    })
    updateCurrentURL()
}

let objectValuesKeeper
let objectElementsKeeper

async function addFetch(obj)
{
    const rawRes = await fetch(baseURL.href,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
        console.log(rawRes)
}

async function updateFetch(obj)
{
    const rawRes = await fetch(baseURL.href,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
        console.log(rawRes)
}

async function deleteFetch(obj)
{
    const rawRes = await fetch(baseURL.href,
        {
            method: "post",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" }
        })
        console.log(rawRes)
}

