let curriculumBoton
let curriculumInsert


document.addEventListener("DOMContentLoaded", (event) => {
    curriculumBoton = document.getElementsByClassName("curriculum")[0]
    curriculumInsert = document.getElementById("CV")

    curriculumBoton.addEventListener("click", () => {
        curriculumInsert.click()
    })
})
