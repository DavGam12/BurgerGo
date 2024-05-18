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
const allergensURL = "http://localhost:8080/BurgerGo/Controller?action=allergens.find_all"
const allergiesURL = "http://localhost:8080/BurgerGo/Controller?action=allergies.find_all"
const salesURL = "http://localhost:8080/BurgerGo/Controller?action=sales.find_all"
const salesManagementURL = "http://localhost:8080/BurgerGo/Controller?action=sales_management.find_all"
const categoriesURL = "http://localhost:8080/BurgerGo/Controller?action=categories.find_all"
const productsURL = "http://localhost:8080/BurgerGo/Controller?action=products.find_all"
const jobsURL = "http://localhost:8080/BurgerGo/Controller?action=jobs.find_all"
const employeesURL = "http://localhost:8080/BurgerGo/Controller?action=employees.find_all"
const customersURL = "http://localhost:8080/BurgerGo/Controller?action=customers.find_all"
const ordersURL = "http://localhost:8080/BurgerGo/Controller?action=orders.find_all"
const detailsURL = "http://localhost:8080/BurgerGo/Controller?action=details.find_all"


const fetchData = async () => {
    const allergensRes = await fetch(allergensURL)
    const allergiesRes = await fetch(allergiesURL)
    const salesRes = await fetch(salesURL)
    const salesManagementRes = await fetch(salesManagementURL)
    const categoriesRes = await fetch(categoriesURL)
    const productsRes = await fetch(productsURL)
    const jobsRes = await fetch(jobsURL)
    const employeesRes = await fetch(employeesURL)
    const customersRes = await fetch(customersURL)
    const ordersRes = await fetch(ordersURL)
    const detailsRes = await fetch(detailsURL)

    const allergensData = await allergensRes.json()
    const allergiesData = await allergiesRes.json()
    const salesData = await salesRes.json()
    const salesManagementData = await salesManagementRes.json()
    const categoriesData = await categoriesRes.json()
    const productsData = await productsRes.json()
    const jobsData = await jobsRes.json()
    const employeesData = await employeesRes.json()
    const customersData = await customersRes.json()
    const ordersData = await ordersRes.json()
    const detailsData = await detailsRes.json()

    console.log("allergensData --> ", allergensData)
    console.log("allergiesData --> ", allergiesData)
    console.log("salesData --> ", salesData)
    console.log("salesManagementData --> ", salesManagementData)
    console.log("categoriesData --> ", categoriesData)
    console.log("productsData --> ", productsData)
    console.log("jobsData --> ", jobsData)
    console.log("employeesData --> ", employeesData)
    console.log("customersData --> ", customersData)
    console.log("ordersData --> ", ordersData)
    console.log("detailsData --> ", detailsData)

    printAllergensData(allergensData)
    printAllergiesData(allergiesData)
   // printSalesData(salesData)
   // printSalesManagementData(salesManagementData)
    printCategoriesData(categoriesData)
    printProductsData(productsData)
    printJobsData(jobsData)
    printEmployeesData(employeesData)
   // printCustomersData(customersData)
   // printOrdersData(ordersData)
   // printDetailsData(detailsData)
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


fetchData()
