// alram swiper
const alarmTabItem = document.querySelectorAll(".alram_tab > div")

var swiper = new Swiper(".myapgeSwiper", {})

alarmTabItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        alarmTabItem.forEach((item) => {
            item.classList.remove("active")
        })
        item.classList.add("active")
        swiper.slideTo(index)
    })
})

swiper.on("slideChange", function () {
    alarmTabItem.forEach((item) => {
        item.classList.remove("active")
    })
    alarmTabItem[swiper.activeIndex].classList.add("active")
})
