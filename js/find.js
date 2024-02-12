const btnAuthenticationNumber = document.querySelector(
    ".btn_authentication_number"
)
const time = document.querySelector(".time")
const phone = document.querySelector("#phone")

phone.addEventListener("keyup", () => {
    if (phone.value.length === 11) {
        btnAuthenticationNumber.disabled = false
    } else {
        btnAuthenticationNumber.disabled = true
    }
})

btnAuthenticationNumber.addEventListener("click", () => {
    time.style.display = "block"
    btnAuthenticationNumber.disabled = true
    time.innerHTML = "3:00"
    let timeCount = 180
    const timer = setInterval(() => {
        timeCount--
        const minute = Math.floor(timeCount / 60)
        const second = timeCount % 60
        time.innerHTML = `${minute}:${second}`
        if (timeCount === 0) {
            clearInterval(timer)
            btnAuthenticationNumber.disabled = false
        }
    }, 1000)
})
