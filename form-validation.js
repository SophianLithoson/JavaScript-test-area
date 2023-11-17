let areAllValid = true;
const formInputs = Array.from(document.getElementsByTagName("input"));
const confirmBtn = document.getElementById("confirm-btn");

const criteriaAndErrors = {
    email: [
        "([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)",
        "Please use format user@domain"
    ],
    country: [
        "([a-zA-Z]+)",
        "Text only, one character minimum"
    ],
    zipCode: [
        "(\\d{5}([\\-]\\d{4})?)",
        "Please use 55555 or 55555-4444"
    ],
    password: [
        "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
        "Must contain upper-case, lower-case, number or special character, 8 characters minimum"
    ],
    confirmPassword: [
        "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
        "Must contain upper-case, lower-case, number or special character, 8 characters minimum"
    ]
}

function validate(formElementID) {
    const formElement = document.getElementById(formElementID);
    const errorElement = formElement.parentElement.nextElementSibling;
    const tester = new RegExp(criteriaAndErrors[formElementID][0], "");

    if (tester.test(formElement.value)) {
        formElement.classList.remove("invalid");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
        return true;
    }
    else {
        formElement.classList.add("invalid");
        errorElement.classList.add("active");
        errorElement.textContent = criteriaAndErrors[formElementID][1];
        return false;
    }

}

function validateForm() {
    areAllValid = true;

    formInputs.forEach((formInput) => {
        areAllValid = (areAllValid && validate(formInput.id));
    });

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPwdError = confirmPassword.parentElement.nextElementSibling;

    if (password.value !== confirmPassword.value) {
        areAllValid = false;
        confirmPassword.classList.add("invalid");;
        confirmPwdError.classList.add("active");
        confirmPwdError.textContent = "Passwords must match";
    }
    else {
        confirmPassword.classList.remove("invalid");
        confirmPwdError.classList.remove("active");
        confirmPwdError.textContent = "";
    }
}

function highFiveIfValid(event) {
    event.preventDefault();
    validateForm();

    if (areAllValid) {
        const dialog = document.getElementById("high-five-dialog");
        dialog.classList.add("active");
    }
}

formInputs.forEach((formInput) => {
    formInput.addEventListener("blur", validateForm);
});

confirmBtn.addEventListener("click", highFiveIfValid);


