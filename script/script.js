$('input[type="tel"]').mask('+7 (999) 999-99-99');


document.addEventListener('DOMContentLoaded', function () {
    // Get the modal elements
    const loginModal = document.getElementById('login-modal');
  
    // Get the button that opens the modal
    const loginBtn = document.getElementById('login-btn');
  
    // Get the <span> element that closes the modal
    const loginClose = document.getElementById('login-close');
  
    // Get the form and modal windows
    const blockNumberForm = document.getElementById('block-number-form');
    const modalWindows = document.querySelector('.modal__windows');
    const modalWindows2 = document.querySelector('.modal__windows2');
  
    // Open the login modal
    loginBtn.addEventListener('click', function () {
        loginModal.style.display = 'flex';
    });
  
    // Close the login modal
    loginClose.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });
  
    // Handle form submission
    blockNumberForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        modalWindows.classList.add('hidden');
        modalWindows2.classList.remove('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the modal elements
    const registerModal = document.getElementById('register-modal');
  
    // Get the button that opens the modal
    const registerBtn = document.getElementById('register-btn');
  
    // Get the <span> element that closes the modal
    const registerClose = document.getElementById('register-close');
  
    // Open the register modal
    registerBtn.addEventListener('click', function () {
        registerModal.style.display = 'flex';
    });
  
    // Close the register modal
    registerClose.addEventListener('click', function () {
        registerModal.style.display = 'none';
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });
});

