let productClick = null


let currentDay = new Date().getDay()
let scheduleParagraphs

// Popular Part
let previous
let next
let innerCarousel

let carouselItems = []


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")


    scheduleParagraphs = document.getElementsByClassName("schedule")[0].getElementsByTagName("p")

    innerCarouselContainer = document.getElementsByClassName("inner-carousel-div")[0]

    previous = document.getElementsByClassName("left-arrow")[0]
    next = document.getElementsByClassName("right-arrow")[0]
    innerCarousel = document.getElementsByClassName("inner-carousel-items")[0]

    carouselItems = document.getElementsByClassName("carousel-item")

    innerCarousel.style.marginLeft = "0px"



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


    // Popular Part
    Array.from(carouselItems).forEach(e => {
        if (window.outerWidth < 680) {
            e.style.width = innerCarouselContainer.clientWidth / 2 + "px"
        } else {
            e.style.width = innerCarouselContainer.clientWidth / 3 + "px"
        }
    })

    previous.addEventListener("click", () => {
        if (Number.parseInt(innerCarousel.style.marginLeft) >= 0) { }
        else if ((Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width) * 2) * 2 == 0) {
            innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width) * 2) + "px"
        }
        else if ((Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width)) * 2 == 0) {
            innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width)) + "px"
        }
        else {
            if (window.outerWidth < 680) {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width) * 2) + "px"
            } else {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) + Number.parseInt(carouselItems[0].style.width) * 3) + "px"
            }
        }
    })

    next.addEventListener("click", () => {
        if (window.outerWidth < 680) {
            if ((innerCarousel.clientWidth - (Math.abs(Number.parseInt(innerCarousel.style.marginLeft)) + Number.parseInt(carouselItems[0].style.width) * 2)) < Number.parseInt(carouselItems[0].style.width)) { }
            else if (Math.abs(Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 2) * 2 > innerCarousel.clientWidth) {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width)) + "px"
            } else {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 2) + "px"
            }
        } else {
            if ((innerCarousel.clientWidth - (Math.abs(Number.parseInt(innerCarousel.style.marginLeft)) + Number.parseInt(carouselItems[0].style.width) * 3)) < Number.parseInt(carouselItems[0].style.width)) { }
            else if (Math.abs(Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 3) * 2 > innerCarousel.clientWidth && Math.abs(Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 2) * 2 != innerCarousel.clientWidth) {// correction needed if <680px
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 2) + "px"
            }
            else if (Math.abs(Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 2) * 2 > innerCarousel.clientWidth) {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width)) + "px"
            } else {
                innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft) - Number.parseInt(carouselItems[0].style.width) * 3) + "px"
            }
        }
    })

    
    carouselItems[0].addEventListener("click", () => {
        productClick = "triple-fried-chicken-cheeseburger"
        localStorage.setItem("productClick", productClick)
        document.getElementsByClassName("make-order")[0].click()
    })
    carouselItems[1].addEventListener("click", () => {
        productClick = "double-beef-cheeseburger"
        localStorage.setItem("productClick", productClick)
        document.getElementsByClassName("make-order")[0].click()
    })
    carouselItems[2].addEventListener("click", () => {
        productClick = "chicken-nuggets"
        localStorage.setItem("productClick", productClick)
        document.getElementsByClassName("make-order")[0].click()
    })
    carouselItems[3].addEventListener("click", () => {
        productClick = "chicken-wings"
        localStorage.setItem("productClick", productClick)
        document.getElementsByClassName("make-order")[0].click()
    })
    carouselItems[4].addEventListener("click", () => {
        productClick = "apple-pie"
        localStorage.setItem("productClick", productClick)
        document.getElementsByClassName("make-order")[0].click()
    })
})