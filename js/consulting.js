const education = document.querySelector(".education")
const therapy = document.querySelector(".therapy")

if (education)
    education.addEventListener("click", () => {
        location.href = "consulting_education.html"
    })

if (therapy)
    therapy.addEventListener("click", () => {
        location.href = "consulting_therapy.html"
    })

// apply button
const applyBtn = document.querySelector(".apply button")
const modal = document.querySelector(".apply_modal")

if (applyBtn)
    applyBtn.addEventListener("click", () => {
        modal.classList.add("active")
        setTimeout(() => {
            location.href = "main.html"
        }, 2000)
    })
// textarea max length
const reason = document.querySelector(".reason")
const typingValue = document.querySelector(".typing .value")

if (reason)
    reason.addEventListener("keyup", function () {
        typingValue.innerHTML = reason.value.length
        if (reason.value.length > 0) {
            typingValue.classList.add("count")
        } else {
            typingValue.classList.remove("count")
        }
    })
