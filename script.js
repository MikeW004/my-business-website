const themeBtn = document.querySelector("#theme-button");
const wholePage = document.querySelector("#doc-body");
const form = document.querySelector("#contact-form");
const formStatusmessage = document.querySelector("#form-status");
themeBtn.addEventListener("click", () => {
    wholePage.classList.toggle("darkMode")
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    showFormMessage("Message sent")
});
function showFormMessage(message){
    formStatusmessage.textContent = message;
}