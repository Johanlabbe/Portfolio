copyClipboard();

function copyClipboard() {
    let copyText = document.querySelector(".copy-text");
    let button = copyText.querySelector("button");
    let emailLink = copyText.querySelector("a");

    button.addEventListener("click", function () {
        let email = emailLink.textContent;
        let tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = email;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
            copyText.classList.remove("active");
        }, 2000);
    });
}
