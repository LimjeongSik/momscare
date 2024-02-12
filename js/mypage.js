const mypageTabItem = document.querySelectorAll(".mypage_tab > div")

var swiper = new Swiper(".myapgeSwiper", {})

mypageTabItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        mypageTabItem.forEach((item) => {
            item.classList.remove("active")
        })
        item.classList.add("active")
        swiper.slideTo(index)
    })
})

swiper.on("slideChange", function () {
    mypageTabItem.forEach((item) => {
        item.classList.remove("active")
    })
    mypageTabItem[swiper.activeIndex].classList.add("active")
})

// all-view button
const allViewBtns = document.querySelectorAll(".all_view")

allViewBtns.forEach((view) => {
    view.addEventListener("click", () => {
        location.href = "activity.html"
    })
})
// user profile edit page
const userProfileEditPage = document.querySelector(".user_profile .user")

userProfileEditPage.addEventListener("click", () => {
    location.href = "profile_edit.html"
})
// services center buttons
const btnNoticePage = document.querySelector(".btn_notice_page")
btnNoticePage.addEventListener("click", () => {
    location.href = "notice.html"
})

const btnTosPage = document.querySelector(".btn_tos_page")
btnTosPage.addEventListener("click", () => {
    location.href = "tos.html"
})

const btnInquiryPage = document.querySelector(".btn_inquiry_page")
btnInquiryPage.addEventListener("click", () => {
    location.href = "inquiry.html"
})
