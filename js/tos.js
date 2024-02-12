const tosList = document.querySelectorAll(".tos li")

tosList.forEach((tos) => {
    tos.addEventListener("click", () => {
        location.href = "tos_detail.html"
    })
})
