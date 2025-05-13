const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    this.textContent = 'Clicked!';
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Enter key pressed!');
    }
});
myButton.addEventListener('dblclick', function() {
    alert('Double-click detected!');
});
const galleryImages = document.querySelectorAll('.galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentImageIndex = 0;
function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}
function updateGallery() {
    showImage(currentImageIndex);
}
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
});
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGallery();
});
updateGallery();
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tabContent');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const passwordStrength = document.getElementById('passwordStrength');
form.addEventListener('submit', function(event) {
    let isValid = true;
    if (!emailInput.value) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }
    if (!isValid) {
        event.preventDefault();
    }
});
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    if (val.length >= 8) {
        passwordStrength.textContent = 'Strong password';
        passwordStrength.style.color = 'green';
    } else {
        passwordStrength.textContent = 'Weak password';
        passwordStrength.style.color = 'orange';
    }
});
