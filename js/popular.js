let previous
let next
let innerCarousel
let carouselItemWidth

window.addEventListener("DOMContentLoaded", () => {
    previous = document.getElementsByClassName("left-arrow")[0]
    next = document.getElementsByClassName("right-arrow")[0]
    innerCarousel = document.getElementsByClassName("inner-carousel-items")[0]
    innerCarousel.style.marginLeft = "0px"

    carouselItemWidth = innerCarousel.children[0].clientWidth

    previous.addEventListener("click", () => {
        if (Number.parseInt(innerCarousel.style.marginLeft.replace("px","")) >= 0) {}
        else {
            innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft.replace("px",""))+carouselItemWidth*3)+"px"
        }
    })

    next.addEventListener("click", () => {
        // if ((Number.parseInt(innerCarousel.style.marginLeft.replace("px",""))-carouselItemWidth*3)<){}
        innerCarousel.style.marginLeft = (Number.parseInt(innerCarousel.style.marginLeft.replace("px",""))-carouselItemWidth*3)+"px"
    })
})