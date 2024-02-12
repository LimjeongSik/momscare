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
