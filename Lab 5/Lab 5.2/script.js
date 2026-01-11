const regForm = document.getElementById('regForm');
const timerFill = document.getElementById('timer-fill');
timerFill.style.transition = "30s linear";
timerFill.style.width = "100%";

const timeout = setTimeout(() => {

    alert("Timeout! You took too long to start.");

    location.reload();

}, 30000);

regForm.addEventListener('input', () => {
    clearTimeout(timeout);
    timerFill.style.display = "none";
});

regForm.onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('titlePicker').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const address = document.getElementById('address').value.trim();


    const nameRegex = /^(?=.*[a-zA-Z])[a-zA-Z\s]+$/;
    const mobileRegex = /^01[012][0-9]{8}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!nameRegex.test(name)) {
        alert("Name must contain letters and spaces only, and cannot be empty.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!mobileRegex.test(mobile)) {
        alert("Mobile must be 11 digits, starting with 010, 011, or 012.");
        return;
    }

    if (address.length < 3) {
        alert("Please enter a valid address.");
        return;
    }

    document.getElementById('regView').classList.add('hidden');
    document.getElementById('welcomeView').classList.remove('hidden');

    document.getElementById('greetHeader').innerText = `Welcome, ${title} ${name.trim()}!`;
    document.getElementById('dispEmail').innerText = email;
    document.getElementById('dispMobile').innerText = mobile;
    document.getElementById('dispAddress').innerText = address;
};