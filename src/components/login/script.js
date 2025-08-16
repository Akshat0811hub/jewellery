class NeumorphismLoginForm {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.passwordToggle = document.getElementById('passwordToggle');
        this.emailError = document.getElementById('emailError');
        this.passwordError = document.getElementById('passwordError');
        this.successMessage = document.getElementById('successMessage');
        this.socialButtons = document.querySelectorAll('.neu-social');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupPasswordToggle();
        this.setupSocialButtons();
    }
    
    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    setupPasswordToggle() {
        this.passwordToggle.addEventListener('click', () => {
            const type = this.passwordInput.type === 'password' ? 'text' : 'password';
            this.passwordInput.type = type;
        });
    }
    
    setupSocialButtons() {
        this.socialButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert(`Social login with ${button.innerText}`);
            });
        });
    }
    
    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    validatePassword() {
        return this.passwordInput.value.length >= 6;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let isValid = true;

        if (!this.validateEmail()) {
            this.emailError.textContent = "Invalid email address";
            isValid = false;
        } else {
            this.emailError.textContent = "";
        }

        if (!this.validatePassword()) {
            this.passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        } else {
            this.passwordError.textContent = "";
        }

        if (isValid) {
            this.successMessage.classList.add('show');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NeumorphismLoginForm();
});
