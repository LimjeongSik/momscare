const infoContents = document.querySelectorAll(".info .content")

infoContents.forEach((content) => {
    content.addEventListener("click", () => {
        location.href = "info_detail.html"
    })
})
