const inputs = document.querySelectorAll(".input")
const inputsFieldSet = document.querySelectorAll(".login_form fieldset")

inputs.forEach((item, idx) => {
    // input value 값이 있으면 delete 버튼 활성화
    item.querySelector("input").addEventListener("keyup", (e) => {
        e.preventDefault()
        if (e.target.value.length > 0) {
            item.querySelector(".btn_delete").classList.add("active")
            inputsFieldSet[idx].classList.remove("error")
        } else {
            item.querySelector(".btn_delete").classList.remove("active")
            inputsFieldSet[idx].classList.add("error")
        }

        if (
            document.querySelector("#email").value.length > 0 &&
            document.querySelector("#password").value.length > 0
        ) {
            document.querySelector(".btn_login").removeAttribute("disabled")
        } else {
            document.querySelector(".btn_login").setAttribute("disabled", "")
        }
    })

    // delete 버튼 클릭시 input value 값 삭제
    item.querySelector(".btn_delete").addEventListener("click", (e) => {
        e.preventDefault()
        item.querySelector("input").value = ""
        item.querySelector(".btn_delete").classList.remove("active")
    })

    // 비밀번호 보기
    if (item.querySelector(".btn_eye")) {
        item.querySelector(".btn_eye").addEventListener("click", (e) => {
            e.preventDefault()
            if (
                item.querySelector("input").getAttribute("type") === "password"
            ) {
                item.querySelector("input").setAttribute("type", "text")
                item.querySelector(".btn_eye").classList.add("active")
            } else {
                item.querySelector("input").setAttribute("type", "password")
                item.querySelector(".btn_eye").classList.remove("active")
            }
        })
    }
})
