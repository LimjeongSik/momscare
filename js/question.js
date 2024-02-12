const questionOptions = document.querySelectorAll(".question_options .option")

questionOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
        const target = e.target

        if (target.classList.contains("btn_heart")) {
            target.classList.toggle("active")
        } else if (target.classList.contains("btn_favorites")) {
            target.classList.toggle("active")
        }
    })
})
// radio button
const radio = document.querySelectorAll(".radio input")
const filterReset = document.querySelector(".filter_reset")
const specialistFilter = document.querySelector(".specialist_filter")
const filterList = document.querySelectorAll(".filter_list div")

filterReset.addEventListener("click", () => {
    filterList.forEach((item) => {
        item.classList.remove("active")
    })
})

filterList.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})

radio.forEach((item) => {
    item.addEventListener("click", () => {
        specialistFilter.classList.remove("active")
        if (item.id === "all") {
            alert("준비중입니다.")
        } else if (item.id === "specialist") {
            specialistFilter.classList.add("active")
        } else if (item.id === "myquestion") {
            alert("준비중입니다.3")
        }
    })
})
// question list
const questionList = document.querySelectorAll(".question_list")
questionList.forEach((list) => {
    list.addEventListener("click", () => {
        location.href = "question_detail.html"
    })
})
