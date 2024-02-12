const genderSelectPopup = document.querySelector(".select_popup.gender_select")
const ageSelectPopup = document.querySelector(".select_popup.age_select")
const btnGenderPopup = document.querySelector(".btn_gender_popup")
const btnAgePopup = document.querySelector(".btn_age_popup")
const genderValue = document.querySelector(".gender_value")
const ageValue = document.querySelector(".age_value")
const btnGenderConfirm = genderSelectPopup.querySelector(".btn_confirm")
const btnAgeConfirm = ageSelectPopup.querySelector(".btn_confirm")

function toggleSelectPopup(selectPopup) {
    selectPopup.classList.toggle("active")
}

function handleDropdownClick(e) {
    e.stopPropagation()
    const currentTarget = e.currentTarget
    const dropdownItem = currentTarget.querySelector(".dropdown_item")

    if (e.target.closest(".dropdown")) {
        dropdownItem.classList.toggle("active")
    }
}

function handleDropdownItemClick(e, valueElement) {
    e.stopPropagation()
    const target = e.target
    const value = target.innerText
    const dropdownItem = target.closest(".dropdown_item")
    const dropdown = target.closest(".dropdown")

    dropdown.querySelector(valueElement).innerText = value
    dropdown.querySelector(valueElement).classList.add("selected")
    dropdownItem.classList.remove("active")

    const selectPopup = dropdown.closest(".select_popup")
    const btnConfirm = selectPopup.querySelector(".btn_confirm")
    updateConfirmButtonStatus(selectPopup, btnConfirm)
}

function updateConfirmButtonStatus(selectPopup, btnConfirm) {
    const selectedValue = selectPopup.querySelector(
        ".dropdown .selected"
    ).innerText

    // Check if the selectPopup is for age or gender and update the condition accordingly
    const isAgePopup = selectPopup.classList.contains("age_select")
    const isGenderPopup = selectPopup.classList.contains("gender_select")

    if (isAgePopup) {
        btnConfirm.disabled = selectedValue === "연령 선택"
    } else if (isGenderPopup) {
        btnConfirm.disabled = selectedValue === "성별 선택"
    }
}

btnGenderPopup.addEventListener("click", () =>
    toggleSelectPopup(genderSelectPopup)
)

genderSelectPopup.addEventListener("click", handleDropdownClick)

const genderDropdownItemList =
    genderSelectPopup.querySelectorAll(".dropdown_item li")
genderDropdownItemList.forEach((item) => {
    item.addEventListener("click", (e) => handleDropdownItemClick(e, ".value"))
})

btnGenderConfirm.addEventListener("click", () => {
    updateKidValue(genderSelectPopup, genderValue)
    toggleSelectPopup(genderSelectPopup)
})

btnAgePopup.addEventListener("click", () => toggleSelectPopup(ageSelectPopup))

ageSelectPopup.addEventListener("click", handleDropdownClick)

const ageDropdownItemList = ageSelectPopup.querySelectorAll(".dropdown_item li")
ageDropdownItemList.forEach((item) => {
    item.addEventListener("click", (e) => handleDropdownItemClick(e, ".value"))
})

btnAgeConfirm.addEventListener("click", () => {
    updateKidValue(ageSelectPopup, ageValue)
    toggleSelectPopup(ageSelectPopup)
})

function updateKidValue(selectPopup, valueElement) {
    const selectedValue = selectPopup.querySelector(".value").innerText
    valueElement.innerText = selectedValue
    valueElement.classList.add("selected")
}
