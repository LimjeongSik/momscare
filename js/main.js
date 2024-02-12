// main page swiper
var swiper = new Swiper(".empSwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    autoHeight: true,
    allowTouchMove: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
})

var swiper = new Swiper(".qaSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
})

// main page infinity scroll and click event
document.addEventListener("DOMContentLoaded", () => {
    const community = document.querySelector(".community")

    community.addEventListener("click", (e) => {
        const target = e.target

        if (
            target.classList.contains("btn_heart") ||
            target.classList.contains("btn_favorites")
        ) {
            event.stopPropagation()
            target.classList.toggle("active")
        } else if (target.closest(".list")) {
            location.href = "community_detail.html"
        }
    })

    // fetch append new content
    function appendNewContent() {
        const newContent = `
                <div class="list prl-24">
                    <div class="user_profile">
                        <img
                            src="images/sample/profile.png"
                            alt=""
                        />
                        <span>성동구 치와와</span>
                    </div>
                    <div class="user_commu">
                        <div>
                            <h6>
                                커리어에 도움이 될 만한 서적
                                추천해...
                            </h6>
                            <span>
                                요즘 혼자 공부하고 있는데
                                어렵네요...ㅠㅠ 보육사 커리어에
                                도움이 될 만한 서적 추...
                            </span>
                        </div>
                        <img
                            src="images/sample/rectangle01.png"
                            alt=""
                        />
                    </div>
                    <div class="community_options">
                        <div>
                            <div class="option btn_heart">
                                <span class="hide">좋아요</span>99+
                            </div>
                            <div class="option btn_comment">
                                <span class="hide">코멘트</span>99+
                            </div>
                            <div class="option btn_favorites">
                                <span class="hide">즐겨찾기</span>50
                            </div>
                        </div>
                        <span class="date">2023.10.12. 12:20</span>
                    </div>
                </div>
        `
        document
            .querySelector(".community")
            .insertAdjacentHTML("beforeend", newContent)
    }

    const observer = new IntersectionObserver(
        async (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    appendNewContent()

                    observer.unobserve(entry.target)

                    const newPosts =
                        document.querySelectorAll(".community .list")
                    const lastNewPost = newPosts[newPosts.length - 1]
                    if (lastNewPost) {
                        observer.observe(lastNewPost)
                    }
                }
            })
        },
        { threshold: 1.0 }
    )

    const target = document.querySelector(".community .list:last-child")

    if (target) {
        observer.observe(target)
    }
})
// info page
const infoContentHeads = document.querySelectorAll(
    ".info .content .content_head"
)
const infoContentBodys = document.querySelectorAll(
    ".info .content .content_body"
)

infoContentHeads.forEach((info) => {
    info.addEventListener("click", () => {
        location.href = "info_detail.html"
    })
})
infoContentBodys.forEach((info) => {
    info.addEventListener("click", () => {
        location.href = "info_detail.html"
    })
})

// main page emp show button
const btnShow = document.querySelector(".emp")
const empShow = document.querySelector(".show_emp")
const btnempClose = document.querySelector(".btn_emp_close")

btnShow.addEventListener("click", (e) => {
    e.stopPropagation()
    empShow.classList.add("show")
})
btnempClose.addEventListener("click", (e) => {
    e.stopPropagation()
    empShow.classList.remove("show")
})

document.addEventListener("click", (e) => {
    empShow.classList.remove("show")
})
