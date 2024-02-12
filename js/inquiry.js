// accordion
const faqItems = document.querySelectorAll(".faq_item")

faqItems.forEach((faq) => {
    faq.addEventListener("click", (e) => {
        const faqItem = e.currentTarget
        const content = faqItem.querySelector(".faq_item_content")

        faqItems.forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove("active")
                item.querySelector(".faq_item_content").style.maxHeight = 0
            }
        })

        faq.classList.toggle("active")
        if (faq.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px"
        } else {
            content.style.maxHeight = 0
        }
    })
})
// inquiry list page
const inquiryList = document.querySelectorAll(".inquiry_list li")

inquiryList.forEach((list) => {
    list.addEventListener("click", () => {
        location.href = "inquiry_detail.html"
    })
})
// inquiry write page
const btnInquiryWrite = document.querySelector(".btn_inquiry_write")
btnInquiryWrite.addEventListener("click", () => {
    location.href = "inquiry_write.html"
})
