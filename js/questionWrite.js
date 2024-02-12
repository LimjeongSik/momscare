// 키워드 입력폼 생성
const btnKeywordForm = document.querySelector(".btn_keyword_form")
const keywordInput = document.querySelector(".keyword_input")

btnKeywordForm.addEventListener("click", () => {
    keywordInput.classList.toggle("active")
})
// 키워드 및 이미지업로드 스와이프
var swiper = new Swiper(".keywordSwiper", {
    slidesPerView: "auto",
    spaceBetween: 4,
})
var swiper = new Swiper(".uploadSwiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
})
// 임시저장 팝업
const btnTemporaryStorage = document.querySelector(".btn_temporary_storage")
const temporaryStoragePopup = document.querySelector(".temporary_storage_popup")

btnTemporaryStorage.addEventListener("click", () => {
    temporaryStoragePopup.classList.add("active")
})
// 연령 및 성별 선택 팝업
const btnSelectPopup = document.querySelector(".btn_select_popup")
const kidValue = document.querySelector(".kid_value")
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
        btnConfirm.disabled =
            selectedValue === "선택" || selectedValue === "연령 선택"
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
    const genderDropdown = document.querySelector(".dropdown.gender")
    const ageDropdown = document.querySelector(".dropdown.age")

    const genderValue = genderDropdown.querySelector(".value").innerText
    const ageValue = ageDropdown.querySelector(".value").innerText

    kidValue.innerText = `${genderValue} / ${ageValue}`
    kidValue.classList.add("selected")
}
