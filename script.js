const loginForm = document.getElementById('login-form')

loginForm.addEventListener('focusin', handleInputFocus)
loginForm.addEventListener('focusout', handleInputBlur)

function handleInputFocus(e) {
    if (e.target.classList.contains('form-input')) {
        e.target.nextElementSibling.classList.add('active')
    }
}

function handleInputBlur(e) {
    if (e.target.classList.contains('form-input') && 
        e.target.value.length === 0) {
        e.target.nextElementSibling.classList.remove('active')
    }
}