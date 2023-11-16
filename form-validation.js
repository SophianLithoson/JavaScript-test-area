const criteriaAndErrors = {
    email: [
        "([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)",
        "Please use format user@domain"
    ],
    country: [
        "[a-zA-Z]+",
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

let areAllValid = true;
const formInputs = Array.from(document.getElementsByTagName("input"));

function validate(formElementID) {
    const formElement = document.getElementById(formElementID);
    const errorElement = formElement.parentElement.nextElementSibling;
    const tester = new RegExp(criteriaAndErrors[formElementID][0], "");

    if (tester.test(formElement.value)) {
        formElement.setAttribute("isvalid", "true");
        errorElement.classList.remove("active");
        errorElement.textContent = "";
        return true;
    }
    else {
        formElement.setAttribute("isvalid", "false");
        errorElement.classList.add("active");
        errorElement.textContent = criteriaAndErrors[formElementID][1];
        return false;
    }

}

function validateForm() {
    formInputs.forEach((formInput) => {
        areAllValid = (areAllValid && validate(formInput.id));
    });

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
        areAllValid = false;
        const confirmPwdErrorr = confirmPassword.parentElement.nextElementSibling;
        confirmPwdErrorr.classList.add("active");
        confirmPwdErrorr.textContent = "Passwords must match";
    }
}

function highFiveIfValid() {
    validateForm();

    if (areAllValid) {
        const dialog = document.getElementById("high-five-dialog");
        dialog.showModal();
    }
}

formInputs.forEach((formInput) => {
    formInput.addEventListener("blur", validateForm);
});

