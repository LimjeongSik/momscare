// footer bar active
function setActiveClass(links) {
    const pathname = window.location.pathname
    let matchFound = false

    links.forEach((link) => {
        const linkPath = link.dataset.path || ""
        if (
            pathname.includes(linkPath) ||
            (linkPath === "" && pathname.includes("/question_detail.html"))
        ) {
            link.classList.add("active")
            matchFound = true
        }
    })

    if (!matchFound && pathname.includes("/question_detail.html")) {
        const defaultLink = document.querySelector(
            ".footer_bar .inner a.nav_question"
        )
        if (defaultLink) {
            defaultLink.classList.add("active")
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const footerBarItem = document.querySelectorAll(".footer_bar .inner a")
    setActiveClass(footerBarItem)
})

// goback button
const btnBack = document.querySelector(".btn_back")
if (btnBack)
    btnBack.addEventListener("click", (e) => {
        e.stopPropagation()
        history.back()
    })
// mypage button
const mypage = document.querySelector(".head_btns .user")
if (mypage)
    mypage.addEventListener("click", (e) => {
        e.stopPropagation()
        location.href = "mypage.html"
    })
// alarm button
const alarm = document.querySelector(".head_btns .alarm")
if (alarm)
    alarm.addEventListener("click", (e) => {
        e.stopPropagation()
        location.href = "alarm.html"
    })
// setting button
const btnSetting = document.querySelector(".btn_setting")
if (btnSetting)
    btnSetting.addEventListener("click", () => {
        location.href = "alarm_setting.html"
    })
// page close button
const btnClose = document.querySelector(".btn_close")
if (btnClose)
    btnClose.addEventListener("click", () => {
        window.history.back()
    })
// edit button
const btnEdit = document.querySelector(".btn_edit")
const editList = document.querySelector(".edit_list")
const question = document.querySelector(".question")
const communication = document.querySelector(".communication")

if (btnEdit)
    btnEdit.addEventListener("click", (e) => {
        e.stopPropagation()
        e.currentTarget.classList.toggle("active")
        if (!e.currentTarget.classList.contains("active")) {
            editList.classList.remove("show")
            return
        }
        editList.classList.add("show")
    })

if (question)
    question.addEventListener("click", (e) => {
        e.stopPropagation()
        location.href = "question_write.html"
    })
if (communication)
    communication.addEventListener("click", (e) => {
        e.stopPropagation()
        location.href = "community_write.html"
    })

if (editList && btnEdit)
    document.addEventListener("click", (e) => {
        editList.classList.remove("show")
        btnEdit.classList.remove("active")
    })

// filter button
const filterInner = document.querySelectorAll(".filter_inner")
const dropdownFilter = document.querySelectorAll(".dropdown_filter")

filterInner.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation()

        dropdownFilter.forEach((filter, idx) => {
            if (idx !== index) {
                filter.classList.remove("active")
            }
        })

        dropdownFilter[index].classList.toggle("active")
    })

    dropdownFilter[index].querySelectorAll("li").forEach((inner) => {
        inner.addEventListener("click", () => {
            item.querySelector(".value").innerText = inner.innerText
        })
    })
})

document.addEventListener("click", (e) => {
    dropdownFilter.forEach((item) => {
        item.classList.remove("active")
    })
})
// edit option button
const editOptionButtons = document.querySelectorAll(".edit_option_button")
const deleteModal = document.querySelector(".delete_modal")
const btnDeleteNo = document.querySelector(".btn_delete_no")
if (editOptionButtons)
    editOptionButtons.forEach((elem) => {
        const btnWriteEdit = elem.querySelector(".btn_write_edit")
        const inner = elem.querySelector(".option_inner")
        const btnWriteDelete = elem.querySelector(".btn_write_delete")
        btnWriteEdit.addEventListener("click", (e) => {
            e.stopPropagation()
            editOptionButtons.forEach((item) => {
                const itemInner = item.querySelector(".option_inner")
                if (item !== elem && itemInner.classList.contains("active")) {
                    itemInner.classList.remove("active")
                }
            })
            inner.classList.toggle("active")
        })

        btnWriteDelete.addEventListener("click", (e) => {
            e.stopPropagation()
            inner.classList.remove("active")
            deleteModal.classList.add("show")
        })
    })
if (btnDeleteNo)
    btnDeleteNo.addEventListener("click", (e) => {
        e.stopPropagation()
        deleteModal.classList.remove("show")
    })
document.addEventListener("click", () => {
    editOptionButtons.forEach((item) => {
        item.querySelector(".option_inner").classList.remove("active")
    })
})
// search enter move page
const headerSearch = document.querySelector(".head_option .search")
const search = document.querySelector(".head_option .btn_search")

if (search) {
    search.addEventListener("click", () => {
        const searchValue = headerSearch.value
        location.href = `search.html?search=${searchValue}`
    })
}

if (headerSearch) {
    headerSearch.addEventListener("keypress", (e) => {
        const searchValue = e.target.value
        if (e.key === "Enter") {
            location.href = `search.html?search=${searchValue}`
        }
    })
}
// notice page move
const noticeList = document.querySelectorAll(".notice li")
if (noticeList)
    noticeList.forEach((item) => {
        item.addEventListener("click", () => {
            location.href = "notice_detail.html"
        })
    })
// service page move
const service = document.querySelector(".service")
const serviceHd = document.querySelector(".service_hd")

if (service)
    service.addEventListener("click", () => {
        location.href = "consulting.html"
    })
if (serviceHd)
    serviceHd.addEventListener("click", () => {
        location.href = "consulting.html"
    })
// comment page move
const btnCommentPage = document.querySelector(".btn_comment_page")
if (btnCommentPage)
    btnCommentPage.addEventListener("click", () => {
        location.href = "comments.html"
    })
// main modal popup cookiesetting
document.addEventListener("DOMContentLoaded", () => {
    const mainModal = document.querySelector(".main_modal")
    const btnTodayClose = document.querySelector(".btn_today_close")
    const btnMainModalClose = document.querySelector(".btn_main_modal_close")

    // 함수: 쿠키 설정
    function setCookie(cname, cvalue, exdays) {
        const d = new Date()
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
        const expires = "expires=" + d.toUTCString()
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
    }

    // 함수: 쿠키 가져오기
    function getCookie(cname) {
        const name = cname + "="
        const decodedCookie = decodeURIComponent(document.cookie)
        const ca = decodedCookie.split(";")
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === " ") {
                c = c.substring(1)
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ""
    }

    // 함수: 모달 표시 여부 결정
    function displayModal() {
        const hasClosedToday = getCookie("hasClosedToday")

        // 오늘 닫기 버튼을 눌렀는지 확인
        if (mainModal)
            if (hasClosedToday === "true") {
                mainModal.style.display = "none"
            } else {
                mainModal.style.display = "block"
            }
    }

    // 초기에 모달 표시 여부 확인
    displayModal()
    if (btnTodayClose)
        btnTodayClose.addEventListener("click", () => {
            // 쿠키 설정: 오늘 하루 동안 보지 않기
            setCookie("hasClosedToday", "true", 1)

            // 모달 닫기
            if (mainModal) mainModal.style.display = "none"
        })
    if (btnMainModalClose)
        btnMainModalClose.addEventListener("click", () => {
            // 모달 닫기
            if (mainModal) mainModal.style.display = "none"
        })
})
