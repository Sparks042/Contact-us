let firstNameInput = document.getElementById("first-name")
let lastNameInput = document.getElementById("last-name")
let emailInput = document.getElementById("email")
let queryInput = document.getElementById("query")
let textareaInput = document.getElementById("message")
let consentCheckbox = document.getElementById("general-inquiry")
let secondConsentCheckbox = document.getElementById("support-request")
let button = document.getElementById("submit-button")
let firsttNameErrorMesssge = document.getElementById("first-name-error-message")
let lastNameErrorMesssge = document.getElementById("last-name-error-message")
let emailErrorMesssge = document.getElementById("email-error-message")
let queryErrorMesssge = document.getElementById("query-error-message")
let textareaErrorMesssge = document.getElementById("textarea-error-message")
let consentErrorMesssge = document.getElementById("consent-error-message")



button.addEventListener("click",() => {
    if(firstNameInput.value.trim() === ""){
        firsttNameErrorMesssge.style.display = "block"
        firsttNameErrorMesssge.textContent = "This field is required"
    }
    else{
        firsttNameErrorMesssge.style.display = "none"
    }
    if(lastNameInput.value.trim() === ""){
        lastNameErrorMesssge.style.display = "block"
        lastNameErrorMesssge.textContent = "This field is required"
    }
    else{
        lastNameErrorMesssge.style.display = "none"
    }
    if(emailInput.value.trim() === ""){
        emailErrorMesssge.style.display = "block"
        emailErrorMesssge.textContent = "Please enter a valid email address"
    }
    else if(emailInput.value.includes('@') && (emailInput.value.includes('.com'))){
        emailErrorMesssge.style.display = "none"
    }
    else{
        emailErrorMesssge.style.display = "block"
        emailErrorMesssge.textContent = "Please enter a valid email address"
    }
    if(!consentCheckbox || !secondConsentCheckbox.checked){
        queryErrorMesssge.style.display = "block"
        queryErrorMesssge.textContent = "Please select a query type"
    }
    else{
        queryErrorMesssge.style.display = "none"
    }
    if(textareaInput.value.trim() === ""){
        textareaErrorMesssge.style.display = "block"
        textareaErrorMesssge.textContent = "This field is required"
    }
    else{
        textareaErrorMesssge.style.display = "none"
    }
    if(!consentCheckbox.checked){
        consentErrorMesssge.style.display = "block"
        consentErrorMesssge.textContent = "To submit this form, please consent to being contacted"
    }
    else{
        consentErrorMesssge.style.display = "none"
    }
})

