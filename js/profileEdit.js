// nickname input
const nickname = document.querySelector(".nickname")
const typingValue = document.querySelector(".typing .value")
const btnDelete = document.querySelector(".btn_delete")
document.addEventListener("DOMContentLoaded", () => {
    typingValue.innerText = nickname.value.length

    nickname.addEventListener("keyup", function () {
        typingValue.innerText = nickname.value.length
    })

    btnDelete.addEventListener("click", () => {
        typingValue.innerText = 0
        nickname.value = ""
    })
})
// select popup
const select = document.querySelector(".bx_pop.select")
const selectValue = select.querySelector("span")
const categoryPopup = document.querySelector(".category_popup")
const categoryOverlay = categoryPopup.querySelector(".category_popup .overlay")
const categoryRadioList = categoryPopup.querySelectorAll(
    ".category_popup .list"
)
const categoryConfirmButton = document.querySelector(
    ".category_popup .btn_confirm"
)

select.addEventListener("click", () => {
    categoryPopup.classList.add("active")
})
categoryOverlay.addEventListener("click", () => {
    categoryPopup.classList.remove("active")
})

categoryRadioList.forEach((radio) => {
    const input = radio.querySelector("input")
    const label = radio.querySelector("label")

    input.addEventListener("change", () => {
        categoryConfirmButton.disabled = false

        categoryConfirmButton.addEventListener("click", UpdateSelectValue)
    })
})

function UpdateSelectValue() {
    const checkedRadio = document.querySelector(".category_popup input:checked")
    const checkedLabel = checkedRadio.nextElementSibling
    selectValue.innerText = checkedLabel.innerText
    categoryPopup.classList.remove("active")
    select.classList.add("on")
}
// new password button
const btnNewPassword = document.querySelector(".btn_newpassword")

btnNewPassword.addEventListener("click", () => {
    location.href = "newpassword.html"
})
// save button
const btnSave = document.querySelector(".btn_save")
const saveToast = document.querySelector(".save_toast")

btnSave.addEventListener("click", () => {
    saveToast.classList.add("active")
    setTimeout(() => {
        saveToast.classList.remove("active")
    }, 2000)
})
// logout button
const btnLogout = document.querySelector(".btn_logout")
const logoutPopup = document.querySelector(".logout_popup")
const btnNo = logoutPopup.querySelector(".btn_no")

btnLogout.addEventListener("click", () => {
    logoutPopup.classList.add("active")
})

btnNo.addEventListener("click", () => {
    logoutPopup.classList.remove("active")
})
