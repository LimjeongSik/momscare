document.addEventListener("DOMContentLoaded", () => {
    const ments = document.querySelectorAll(".ments")
    const subMents = document.querySelectorAll("comment_to_comment li")
    let activeCommentToCommentWrite = null
    let activeCommentToCommentChangeWrite = null // 새로운 변수 추가
    let activeReplyForm = null

    function toggleCommentToCommentWrite(commentToCommentWrite) {
        commentToCommentWrite.classList.toggle("show")
    }

    function closeAllCommentToCommentWrites() {
        document
            .querySelectorAll(".comment_to_comment_write")
            .forEach((commentToCommentWrite) => {
                commentToCommentWrite.classList.remove("show")
            })
        activeCommentToCommentWrite = null
        activeCommentToCommentChangeWrite = null // 변수 초기화
    }

    function handleCommentToCommentCancel(
        commentToCommentWrite,
        closestComment,
        closestCommentOptions
    ) {
        commentToCommentWrite.remove()
        closestComment.style.display = "block"
        closestCommentOptions.style.display = "flex"
        activeCommentToCommentWrite = null
        activeCommentToCommentChangeWrite = null // 변수 초기화
    }

    function handleCommentToCommentSubmit(e) {
        e.stopPropagation()
        // Handle the submit logic here
    }

    function handleBtnCommentToCommentClick(e) {
        e.stopPropagation()
        const commentToCommentWrite = this.closest(".list_body").querySelector(
            ".comment_to_comment_write"
        )
        if (activeCommentToCommentWrite !== commentToCommentWrite) {
            ments.forEach((ment) => {
                const commentToCommentChangeWrite = ment.querySelector(
                    ".comment_to_comment_change_write"
                )
                const mentComment = ment.querySelectorAll(".comment")
                const mentCommentOptions =
                    ment.querySelectorAll(".comment_options")

                if (commentToCommentChangeWrite) {
                    commentToCommentChangeWrite.remove()
                    mentComment.forEach((comment) => {
                        comment.style.display = "block"
                    })
                    mentCommentOptions.forEach((commentOption) => {
                        commentOption.style.display = "flex"
                    })
                }
            })

            closeAllCommentToCommentWrites()
            toggleCommentToCommentWrite(commentToCommentWrite)
            activeCommentToCommentWrite = commentToCommentWrite
            closeActiveReplyForm()
        }
    }

    function handleBtnCommentCancelClick(e) {
        e.stopPropagation()
        const commentToCommentWrite = this.closest(".list_body").querySelector(
            ".comment_to_comment_write"
        )
        commentToCommentWrite.classList.remove("show")
        activeCommentToCommentWrite = null
        activeCommentToCommentChangeWrite = null // 변수 초기화
    }

    function handleBtnWriteRetouchClick(e) {
        e.stopPropagation()

        const closestListHead = this.closest(".list_head")
        const closestComment =
            closestListHead.nextElementSibling.querySelector(".comment")
        const closestCommentOptions =
            closestListHead.nextElementSibling.querySelector(".comment_options")
        const closestDefault =
            closestListHead.nextElementSibling.querySelector(".default")

        closestListHead
            .querySelector(".option_inner")
            .classList.remove("active")

        if (closestComment && closestDefault) {
            closeAllCommentToCommentWrites()

            const existingCommentToCommentWrite = closestDefault.querySelector(
                ".comment_to_comment_change_write"
            )

            if (existingCommentToCommentWrite) {
                return
            }

            ments.forEach((ment) => {
                const commentToCommentChangeWrite = ment.querySelector(
                    ".comment_to_comment_change_write"
                )
                const mentComment = ment.querySelectorAll(".comment")
                const mentCommentOptions =
                    ment.querySelectorAll(".comment_options")

                if (commentToCommentChangeWrite) {
                    commentToCommentChangeWrite.remove()
                    mentComment.forEach((comment) => {
                        comment.style.display = "block"
                    })
                    mentCommentOptions.forEach((commentOption) => {
                        commentOption.style.display = "flex"
                    })
                }
            })

            const newCommentToCommentWrite = document.createElement("div")
            newCommentToCommentWrite.classList.add(
                "comment_to_comment_change_write"
            )

            const newTextarea = document.createElement("textarea")
            newTextarea.setAttribute("placeholder", "댓글을 남겨보세요.")
            newTextarea.innerText = closestComment.innerText

            const newBtnBx = document.createElement("div")
            newBtnBx.classList.add("btn_bx")

            const newBtnCommentCancel = document.createElement("button")
            newBtnCommentCancel.classList.add("btn_comment_change_cancel")
            newBtnCommentCancel.textContent = "취소"

            const newBtnCommentSubmit = document.createElement("button")
            newBtnCommentSubmit.classList.add("btn_comment_change_submit")
            newBtnCommentSubmit.textContent = "수정"

            newCommentToCommentWrite.appendChild(newTextarea)
            newBtnBx.appendChild(newBtnCommentCancel)
            newBtnBx.appendChild(newBtnCommentSubmit)
            newCommentToCommentWrite.appendChild(newBtnBx)

            closestDefault.appendChild(newCommentToCommentWrite)

            closestComment.style.display = "none"
            closestCommentOptions.style.display = "none"

            newBtnCommentCancel.addEventListener("click", function (e) {
                e.stopPropagation()
                handleCommentToCommentCancel(
                    newCommentToCommentWrite,
                    closestComment,
                    closestCommentOptions
                )
            })

            newBtnCommentSubmit.addEventListener(
                "click",
                handleCommentToCommentSubmit
            )

            activeCommentToCommentWrite = newCommentToCommentWrite
            activeCommentToCommentChangeWrite = newCommentToCommentWrite // 변수 할당
            closeActiveReplyForm()
        }
    }

    function handleBtnReplyClick(e) {
        e.stopPropagation()
        const replyForm = this.closest(".list_body").querySelector(
            ".comment_to_comment_write"
        )

        if (activeReplyForm !== replyForm) {
            closeActiveReplyForm()
            toggleCommentToCommentWrite(replyForm)
            activeReplyForm = replyForm
            closeAllCommentToCommentWrites()
        }
    }

    function closeActiveReplyForm() {
        if (activeReplyForm) {
            activeReplyForm.classList.remove("show")
            activeReplyForm = null
        }
    }

    ments.forEach((listBody) => {
        const btnCommentToComments = listBody.querySelectorAll(
            ".btn_comment_to_comment"
        )
        const btnCommentCancels = listBody.querySelectorAll(
            ".btn_comment_cancel"
        )
        const btnWriteRetouchs = listBody.querySelectorAll(".btn_write_retouch")
        const btnReplys = listBody.querySelectorAll(".btn_reply")

        btnCommentToComments.forEach((btnCommentToComment) => {
            btnCommentToComment.addEventListener(
                "click",
                handleBtnCommentToCommentClick
            )
        })

        btnCommentCancels.forEach((btnCommentCancel) => {
            btnCommentCancel.addEventListener(
                "click",
                handleBtnCommentCancelClick
            )
        })

        btnWriteRetouchs.forEach((btnWriteRetouch) => {
            btnWriteRetouch.addEventListener(
                "click",
                handleBtnWriteRetouchClick
            )
        })

        btnReplys.forEach((btnReply) => {
            btnReply.addEventListener("click", handleBtnReplyClick)
        })
    })
})
