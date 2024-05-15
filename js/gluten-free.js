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

