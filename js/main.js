let currentDay = new Date().getDay()
let scheduleParagraphs


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    
    scheduleParagraphs = document.getElementsByClassName("schedule")[0].getElementsByTagName("p")

    
    
    switch (currentDay) { // to show the current schedule
        case 1:
            scheduleParagraphs[1].style.background = "rgb(255,255,255)"
            scheduleParagraphs[1].style.color = "black"
            break
        case 2:
            scheduleParagraphs[2].style.background = "rgb(255,255,255)"
            scheduleParagraphs[2].style.color = "black"
            break
        case 3:
            scheduleParagraphs[3].style.background = "rgb(255,255,255)"
            scheduleParagraphs[3].style.color = "black"
            break
        case 4:
            scheduleParagraphs[4].style.background = "rgb(255,255,255)"
            scheduleParagraphs[4].style.color = "black"
            break
        case 5:
            scheduleParagraphs[5].style.background = "rgb(255,255,255)"
            scheduleParagraphs[5].style.color = "black"
            break
        case 6:
            scheduleParagraphs[6].style.background = "rgb(255,255,255)"
            scheduleParagraphs[6].style.color = "black"
            break
        default:
            scheduleParagraphs[0].style.background = "rgb(255,255,255)"
            scheduleParagraphs[0].style.color = "black"
            break;
    }
})
