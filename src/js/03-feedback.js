import { throttle } from "lodash"

const form = document.querySelector("form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");

const formInput = (e) => {
     e.preventDefault();
    const value = `${email.value}: ${message.value}`
    localStorage.setItem("feedback-form-state", value);
}
form.addEventListener("submit", formInput);

const theme = localStorage.getItem("feedback-form-state");
console.log(theme);

// function formOutput() {
    
// //   storage.addItem("list", result);
// //     const result =  
// //     result.push("feedback-form-state", []);
// }
