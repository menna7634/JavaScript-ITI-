const uName = document.getElementById("uName");
const uAge = document.getElementById("uAge");
const uEmail = document.getElementById("uEmail");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");

const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const dataTable = document.getElementById("dataTable");

function validateName() {
    const name = uName.value.trim();
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    if (name === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        return false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Name must contain letters and spaces only";
        nameError.style.display = "block";
        return false;
    } else {
        nameError.style.display = "none";
        return true;
    }
}


function validateAge() {
    if (uAge.value.trim() === "") {
        ageError.textContent = "Age is required";
        ageError.style.display = "block";
        return false;
    } else if (!/^\d+$/.test(uAge.value.trim())) {
        ageError.textContent = "Age must be a number";
        ageError.style.display = "block";
        return false;
    } else {
        ageError.style.display = "none";
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (uEmail.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        return false;
    } else if (!emailPattern.test(uEmail.value.trim())) {
        emailError.textContent = "Email is invalid";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        return true;
    }
}

uName.addEventListener("blur", validateName);
uAge.addEventListener("blur", validateAge);
uEmail.addEventListener("blur", validateEmail);

addBtn.addEventListener("click", () => {
    const isNameValid = validateName();
    const isAgeValid = validateAge();
    const isEmailValid = validateEmail();

    if (isNameValid && isAgeValid && isEmailValid) {
        let row = dataTable.insertRow();
        row.insertCell(0).textContent = uName.value.trim();
        row.insertCell(1).textContent = uAge.value.trim();
        row.insertCell(2).textContent = uEmail.value.trim();

        uName.value = "";
        uAge.value = "";
        uEmail.value = "";
    }
});

resetBtn.addEventListener("click", () => {
    uName.value = "";
    uAge.value = "";
    uEmail.value = "";
    nameError.style.display = "none";
    ageError.style.display = "none";
    emailError.style.display = "none";
});
