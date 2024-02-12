// input password and confirm password validation option button
const bxInputs = document.querySelectorAll(".bx_input")

bxInputs.forEach((bxInput) => {
    const input = bxInput.querySelector("input")
    const btnEye = bxInput.querySelector(".btn_eye")
    const btnDelete = bxInput.querySelector(".btn_delete")
    const nickName = bxInput.querySelector(".nickname")
    const typingValue = document.querySelector(".typing .value")

    btnEye &&
        btnEye.addEventListener("click", () => {
            if (input.type === "password") {
                input.type = "text"
                btnEye.classList.add("active")
            } else {
                input.type = "password"
                btnEye.classList.remove("active")
            }
        })
    btnDelete &&
        btnDelete.addEventListener("click", (e) => {
            e.currentTarget.classList.remove("active")
            input.value = ""
        })
    btnDelete &&
        input.addEventListener("keyup", () => {
            if (input.value.length > 0) {
                btnDelete.classList.add("active")
            } else {
                btnDelete.classList.remove("active")
            }
        })

    nickName &&
        input.addEventListener("keyup", (e) => {
            typingValue.innerText = e.target.value.length
            btnDelete.addEventListener("click", () => {
                typingValue.innerText = 0
            })
        })
})
// service agree checkbox
const bxPopChk = document.querySelector(".bx_pop.chk")
const agreePopup = document.querySelector(".agree_popup")
const agreeOverlay = agreePopup.querySelector(".agree_popup .overlay")
const agreeContent = agreePopup.querySelector(".agree_popup .content")
const chkbxInputs = document.querySelectorAll(".chk_bx input")
const agreeConfirmButton = document.querySelector(".btn_confirm")

bxPopChk.addEventListener("click", () => {
    if (bxPopChk.classList.contains("on")) {
        return false
    }
    agreePopup.classList.add("active")
})
agreeOverlay.addEventListener("click", () => {
    agreePopup.classList.remove("active")
})
agreeConfirmButton.addEventListener("click", () => {
    agreePopup.classList.remove("active")
    bxPopChk.classList.add("on")
})

function UpdateCheckBoxes(e) {
    const target = e.target
    const all = document.querySelector("#all")
    const required = document.querySelectorAll(".required")
    const option = document.querySelectorAll(".option")

    if (target.id === "all") {
        if (target.checked) {
            CheckBoxListStatus(required, true)
            CheckBoxListStatus(option, true)
        } else {
            CheckBoxListStatus(required, false)
            CheckBoxListStatus(option, false)
        }
    } else {
        if (target.checked) {
            if (
                required.length ===
                document.querySelectorAll(".required:checked").length
            ) {
                all.checked = true
            }
        } else {
            all.checked = false
        }
    }

    UpdateConfirmButton(required)
}

function CheckBoxListStatus(chkboxs, status) {
    chkboxs.forEach((chk) => {
        chk.checked = status
    })
}

function UpdateConfirmButton(requiredCheckboxes) {
    const allRequiredChecked =
        requiredCheckboxes.length ===
        document.querySelectorAll(".required:checked").length

    agreeConfirmButton.disabled = !allRequiredChecked
}

chkbxInputs.forEach((chkbox) => {
    chkbox.addEventListener("change", (e) => UpdateCheckBoxes(e))
})
// user category popup
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
