/**
 * @param {HTMLFormElement} form 
 */
function validateForm(form) {
    var name = form.userName.value;
    var phone = form.phone.value;
    var mobile = form.mobile.value;
    var email = form.email.value;

    var namePattern = /^[a-zA-Z\s]+$/;
    /*/[a-zA-Z]+[a-zA-Z\s]*/

    if (!namePattern.test(name)||  name.trim() === "") {
        alert("Error: Name must contain characters only (no numbers). and can't be empty");
        return false;
    }

    var phonePattern = /^\d{8}$/;
    if (!phonePattern.test(phone)) {
        alert("Error: Phone Number must be exactly 8 digits.");
        return false;
    }

    var mobilePattern = /^01(0|1|2)\d{8}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Error: Mobile Number must be 11 digits and start with 010, 011, or 012.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Error: Please enter a valid email (e.g., name@domain.com).");
        return false;
    }

    var welcomeMsg = "Welcome " + name + "!\n\n" +
        "Phone: " + phone + "\n" +
        "Mobile: " + mobile + "\n" +
        "Email: " + email;

    alert(welcomeMsg);

    return false;
}