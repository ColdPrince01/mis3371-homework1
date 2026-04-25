function reviewForm() {

    let first = document.getElementById("firstName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let userId = document.getElementById("userId").value.toLowerCase();

    document.getElementById("userId").value = userId;

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    let errors = "";

    // Password match check
    if (password !== confirm) {
        errors += "<p style='color:red;'>ERROR: Passwords do not match</p>";
    }

    // Prevent password = userID
    if (password.includes(userId)) {
        errors += "<p style='color:red;'>ERROR: Password cannot contain User ID</p>";
    }

    // Phone validation fallback
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        errors += "<p style='color:red;'>Invalid phone format</p>";
    }

    // Display output
    document.getElementById("reviewOutput").innerHTML = `
        <p><strong>Name:</strong> ${first}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>User ID:</strong> ${userId}</p>
        ${errors}
    `;

    

}

function updateSlider(value) {
    document.getElementById("salaryValue").innerText = "$" + value;
}

let errorCount = 0;

function setError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function clearError(id) {
    document.getElementById(id).innerHTML = "";
}

//#region VALIDATING USER INFORMATION

//validates user first name
function validateFirstName() {
    let value = document.getElementById("firstName").value;
    let regex = /^[A-Za-z'-]{1,30}$/; //Save valid and special characters 

    if (!regex.test(value)) { //Check if the username passes the regrex test, 
        setError("firstNameError", "Invalid name (letters, ' - only)");
        return false;
    }

    clearError("firstNameError");
    return true;
}

function validateLastName() {
    let value = document.getElementById("LastName").value;
    let regex = /^[A-Za-z'-]{1,30}$/; //Save valid and special characters 

    if (!regex.test(value)) { //Check if the username passes the regrex test, 
        setError("lastNameError", "Invalid name (letters, ' - only)");
        return false;
    }

    clearError("lastNameError");
    return true;
}

//Validates user email
function validateEmail() {
    let value = document.getElementById("email").value.toLowerCase(); //grab reference to user email, set to lower-case to reflect non-case sensitivity
    document.getElementById("email").value = value;

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
        setError("emailError", "Invalid email format");
        return false;
    }

    clearError("emailError");
    return true;
}


function validateDOB() {
    let value = document.getElementById("dob").value; //Grab the date of birth and save a reference to it to the variable "value"
    let date = new Date(value); //Pass that value in as a new sate
    let today = new Date();

    let minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);

    if (date > today) {
        setError("dobError", "Cannot be in the future");
        return false;
    }

    if (date < minDate) {
        setError("dobError", "Cannot be older than 120 years");
        return false;
    }

    clearError("dobError");
    return true;
}

//Validates the user ID
function validateUserId() {
    let value = document.getElementById("userId").value.toLowerCase();
    document.getElementById("userId").value = value;

    let regex = /^[a-z][a-z0-9_-]{4,19}$/;

    if (!regex.test(value)) {
        setError("userIdError", "5–20 chars, must start with letter, no spaces");
        return false;
    }

    clearError("userIdError");
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let userId = document.getElementById("userId").value;

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/;

    if (!regex.test(password)) {
        setError("passwordError", "Min 8 chars, upper, lower, number");
        return false;
    }

    if (password.includes(userId)) {
        setError("passwordError", "Cannot contain User ID");
        return false;
    }

    clearError("passwordError");
    return true;
}

function validateConfirmPassword() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
        setError("confirmError", "Passwords do not match");
        return false;
    }

    clearError("confirmError");
    return true;
}

function validateForm() {

    let valid = true;

    if (!validateFirstName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateUserId()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPassword()) valid = false;

    if (valid) {
        document.getElementById("submitBtn").style.display = "inline";
        alert("All fields valid. You may submit.");
    } else {
        alert("Please fix errors before submitting.");
    }
}

function submitForm() {
    window.location.href = "thankyou.html";
}






//#endregion 