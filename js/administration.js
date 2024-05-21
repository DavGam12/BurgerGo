const url = new URL(window.location.href)
const urlParams = new URLSearchParams(url.search)

const baseURL = new URL("http://localhost:8080/BurgerGo/Controller?")



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
        e.addEventListener("click", () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            console.log(objectElementsKeeper)
            objectValuesKeeper = objectElementsKeeper
            Object.entries(objectValuesKeeper).forEach(o => {o[1] = o[1].value})
            console.log(objectValuesKeeper)
            additionURL(objectValuesKeeper)
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
        e.addEventListener("click", () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            objectValuesKeeper = objectElementsKeeper
            Object.entries(objectValuesKeeper).forEach(o => {o[1] = o[1].value})
            updateURL(objectValuesKeeper)
            updateCurrentURL()
            insert(objectValuesKeeper)
        })
    })
    Array.from(currentDeleteDivCancelButton).forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            resetCurrentURL()
        })
    })
    Array.from(currentDeleteDivAcceptButton).forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.style.display = "none"
            document.body.style.pointerEvents = "all"
            document.body.style.overflow = "visible"
            deletionURL(objectKeeper)
        })
    })

    currentResetDivCancelButton.addEventListener("click", () => {
        currentResetDivCancelButton.parentElement.parentElement.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        resetCurrentURL()
    })
    currentResetDivAcceptButton.addEventListener("click", () => {
        currentResetDivCancelButton.parentElement.parentElement.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.overflow = "visible"
        currentActionURL("allergies.reset")
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

    const addDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-add-div")[0]
    const updateDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-update-div")[0]
    const deleteDiv = document.getElementsByClassName("allergens-table")[0].getElementsByClassName("current-delete-div")[0]

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.padding = "0.2%"
        currentUpdate.style.marginTop = "0.3%"
        currentUpdate.style.left = "78%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.padding = "0.2%"
        currentDelete.style.marginTop = "0.3%"
        currentDelete.style.left = "17%"


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


        /* SETTING UP THE EVENT LISTENERS */
        currentUpdate.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            updateDiv.style.display = "flex"
            updateDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-update-id")[0].textContent = e._allergenID

            document.getElementById("allergens-update-id").value = e._allergenID
            document.getElementById("allergens-update-name").value = e._allergenName
            document.getElementById("allergens-update-img").value = e._allergenImg
            objectElementsKeeper = {
                id: document.getElementById("allergens-update-id"),
                name: document.getElementById("allergens-update-name"),
                img: document.getElementById("allergens-update-img")
            }
            currentActionURL("allergens.update")
        })

        currentDelete.addEventListener("click", () => {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
            deleteDiv.style.display = "flex"
            deleteDiv.style.pointerEvents = "all"

            currentTable.parentElement.getElementsByClassName("current-delete-id")[0].textContent = e._allergenID

            objectValuesKeeper = {id: e}
            currentActionURL("allergens.deletion")
        })

    })

    const currentAdd = currentTable.parentElement.getElementsByClassName("current-add")[0]
    currentAdd.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        document.body.style.pointerEvents = "none"
        addDiv.style.display = "flex"
        addDiv.style.pointerEvents = "all"

        objectElementsKeeper = {
            id: document.getElementById("allergens-add-id"),
            name: document.getElementById("allergens-add-name"),
            img: document.getElementById("allergens-add-img")
        }
        currentActionURL("allergens.addition")
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

      /*const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.padding = "0.2%"
        currentUpdate.style.marginTop = "0.3%"
        currentUpdate.style.left = "72%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.padding = "0.2%"
        currentDelete.style.marginTop = "0.3%"
        currentDelete.style.left = "23%"*/


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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.padding = "0.2%"
        currentUpdate.style.marginTop = "0.3%"
        currentUpdate.style.left = "72%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.padding = "0.2%"
        currentDelete.style.marginTop = "0.3%"
        currentDelete.style.left = "23%"


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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"


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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.padding = "0.2%"
        currentUpdate.style.marginTop = "0.3%"
        currentUpdate.style.left = "72%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.padding = "0.2%"
        currentDelete.style.marginTop = "0.3%"
        currentDelete.style.left = "23%"


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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.left = "93.5%"
        currentUpdate.style.marginTop = "0.5%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.left = "1%"
        currentDelete.style.marginTop = "0.5%"

        
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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"
        currentUpdate.style.marginTop = "0.25%"
        currentUpdate.style.left = "89%"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"
        currentDelete.style.marginTop = "0.25%"
        currentDelete.style.left = "5%"


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

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"


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
    const orderIdTh = document.createElement("th")
    currentRow.appendChild(orderIdTh)
    orderIdTh.textContent = "order id".toUpperCase()
    const productIdTh = document.createElement("th")
    currentRow.appendChild(productIdTh)
    productIdTh.textContent = "product id".toUpperCase()

    Array.from(data).forEach(e => {

        const currentUpdate = document.createElement("div")
        currentTable.appendChild(currentUpdate)
        currentUpdate.classList.add("current-update")
        const currentUpdateButton = document.createElement("button")
        currentUpdate.appendChild(currentUpdateButton)
        currentUpdateButton.textContent = "Update row"

        const currentDelete = document.createElement("div")
        currentTable.appendChild(currentDelete)
        currentDelete.classList.add("current-delete")
        const currentDeleteButton = document.createElement("button")
        currentDelete.appendChild(currentDeleteButton)
        currentDeleteButton.textContent = "Delete row"


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
    })
}


fetchDataAsync();


const currentActionURL = (act) => {
    urlParams.set("action", act)
    updateCurrentURL()
}

const additionURL = (obj) => {
    Object.entries(obj).forEach(e => {
        urlParams.set(e[0], e[1])
    })
    updateCurrentURL()
}

const updateURL = (obj) => {
    Object.entries(obj).forEach(e => {
        urlParams.set(e[0], e[1])
    })
    updateCurrentURL()
}

const deletionURL = (obj) => {
    urlParams.set(obj.id, ojb.id)
    updateCurrentURL()
}

/* change the url without reload (line 2 of the function) */
const updateCurrentURL = () => {
    url.search = urlParams.toString()
    window.history.replaceState(null, null, url.href)
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

function insert(obj)
{
    (async => {
        const rawRes = /*await*/ fetch(baseURL.href.concat(urlParams.toString()),
        {
            method: "post",
            body: JSON.stringy({obj})
        })
    })
}

