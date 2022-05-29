import { throttle } from "lodash"

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");


form.addEventListener("input", throttle(formValue, 500));
form.addEventListener("submit", formClear);


function formValue(e) {
    e.preventDefault();
    const value = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(value));
}
formOutput();
function formOutput() {
    if (localStorage === "") {
        email.value = "";
        message.value = "";
    } else {
        const getOutput = JSON.parse(localStorage.getItem("feedback-form-state"));
        email.value = getOutput.email;
        message.value = getOutput.message;
    }

}
function formClear(e) {
    e.preventDefault();
    localStorage.removeItem("feedback-form-state");
    const formEl = e.currentTarget.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;
         const formData = {
        email,
        message,
         };
    console.log(formData);
       form.reset();
    }



   
    
