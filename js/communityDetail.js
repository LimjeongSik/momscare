const imageSlideItem = document.querySelectorAll(
    ".imagesSwiper .swiper-slide img"
)
const enlargementImageModal = document.querySelector(".enlargement_image_modal")
const enlargementImageModalOverlay = document.querySelector(
    ".enlargement_image_modal .overlay"
)
if (imageSlideItem && enlargementImageModal && enlargementImageModalOverlay) {
    var swiper = new Swiper(".imagesSwiper", {
        slidesPerView: "auto",
    })
    var swiper = new Swiper(".enlargementSwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
        centeredSlides: true,

        breakpoints: {
            500: {
                slidesPerView: "auto",
            },
        },
    })

    imageSlideItem.forEach((item, index) => {
        item.addEventListener("click", () => {
            enlargementImageModal.classList.add("active")
            swiper.slideTo(index)
        })
    })

    enlargementImageModalOverlay.addEventListener("click", () => {
        enlargementImageModal.classList.remove("active")
    })
}
