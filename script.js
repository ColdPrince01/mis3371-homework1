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