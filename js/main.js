let currentDay = new Date().getDay()
let scheduleParagraphs
let currentSchedule


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")

    
    scheduleParagraphs = document.getElementsByClassName("schedule")[0].getElementsByTagName("p")
    currentSchedule = document.getElementById("current-schedule")

    
    
    switch (currentDay) { // to show the current schedule
        case 1:
            currentSchedule.innerHTML = "Monday 11:00-23:00"
            scheduleParagraphs[1].style.background = "rgb(240,240,240)"
            break
        case 2:
            currentSchedule.innerHTML = "Tuesday 11:00-23:00"
            scheduleParagraphs[2].style.background = "rgb(240,240,240)"
            break
        case 3:
            currentSchedule.innerHTML = "Wednesday 11:00-23:00"
            scheduleParagraphs[3].style.background = "rgb(240,240,240)"
            break
        case 4:
            currentSchedule.innerHTML = "Thursday 11:00-23:00"
            scheduleParagraphs[4].style.background = "rgb(240,240,240)"
            break
        case 5:
            currentSchedule.innerHTML = "Friday 11:00-00:00"
            scheduleParagraphs[5].style.background = "rgb(240,240,240)"
            break
        case 6:
            currentSchedule.innerHTML = "Saturday 11:00-00:00"
            scheduleParagraphs[6].style.background = "rgb(240,240,240)"
            break
        default:
            currentSchedule.innerHTML = "Sunday 11:00-23:00"
            scheduleParagraphs[0].style.background = "rgb(240,240,240)"
            break;
    }
})
