// 이미지업로드 스와이프
var swiper = new Swiper(".uploadSwiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
})
// 연령 및 성별 선택 팝업
const btnSelectPopup = document.querySelector(".btn_select_popup")
const InquirytypeValue = document.querySelector(".type_value")
const selectPopup = document.querySelector(".select_popup")
const btnConfirm = document.querySelector(".btn_confirm")
const dropdowns = document.querySelectorAll(".dropdown")

function toggleSelectPopup() {
    selectPopup.classList.toggle("active")
}

function handleDropdownClick(e) {
    e.stopPropagation()
    const currentTarget = e.currentTarget
    const dropdownItem = currentTarget.querySelector(".dropdown_item")
    dropdownItem.classList.toggle("active")
}

function handleDropdownItemClick(e) {
    e.stopPropagation()
    const target = e.target
    const value = target.innerText
    const dropdownItem = target.closest(".dropdown_item")
    const dropdown = target.closest(".dropdown")
    const dropdowns = document.querySelectorAll(".dropdown")

    dropdown.querySelector(".value").innerText = value
    dropdown.querySelector(".value").classList.add("selected")
    dropdownItem.classList.remove("active")

    updateConfirmButtonStatus(dropdowns)
}

function updateConfirmButtonStatus(dropdowns) {
    dropdowns.forEach((dropdown) => {
        const selectedValue = dropdown.querySelector(".value").innerText
        btnConfirm.disabled = selectedValue === "문의 유형"
    })
}

btnSelectPopup.addEventListener("click", toggleSelectPopup)

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", handleDropdownClick)

    const dropdownItemList = dropdown.querySelectorAll(".dropdown_item li")
    dropdownItemList.forEach((item) => {
        item.addEventListener("click", handleDropdownItemClick)
    })
})

btnConfirm.addEventListener("click", (e) => {
    e.stopPropagation()
    updateKidValue()
    toggleSelectPopup()
})

function updateKidValue() {
    const typeDropdown = document.querySelector(".dropdown.type")
    const typeValue = typeDropdown.querySelector(".value").innerText

    InquirytypeValue.innerText = typeValue
    InquirytypeValue.classList.add("selected")
}
