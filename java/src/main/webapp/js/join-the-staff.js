let curriculumBoton
let curriculumInsert
let curriculumSubmit
let joinusSubmited
let joinusSubmitedClose


document.addEventListener("DOMContentLoaded", (event) => {
    curriculumBoton = document.getElementsByClassName("curriculum")[0]
    curriculumInsert = document.getElementById("CV")
    curriculumSubmit = document.getElementsByClassName("enviar")[0].getElementsByTagName("input")[0]
    joinusSubmited = document.getElementsByClassName("joinus-submited")[0]
    joinusSubmitedClose = document.getElementsByClassName("joinus-submited-close")[0]

    curriculumBoton.addEventListener("click", () => {
        curriculumInsert.click()
    })

    curriculumSubmit.addEventListener("click", () => {
        joinusSubmited.style.display = "flex"
        document.body.style.pointerEvents = "none"
        document.body.style.opacity = "0.8"
        joinusSubmited.style.pointerEvents = "all"
        joinusSubmited.style.opacity = "1"
    })
    joinusSubmitedClose.addEventListener("click", () => {
        joinusSubmited.style.display = "none"
        document.body.style.pointerEvents = "all"
        document.body.style.opacity = "1"
    })
})
