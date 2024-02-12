const communityList = document.querySelectorAll(".community .list")
communityList.forEach((list) => {
    list.addEventListener("click", () => {
        location.href = "community_detail.html"
    })
})
