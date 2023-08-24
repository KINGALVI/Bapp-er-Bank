document.getElementById('Submit-Btn').addEventListener('click', function () {

    const EmailField = document.getElementById('Email-Field');
    const Email = EmailField.value;

    const PasswordField = document.getElementById('Password-Field');
    const Password = PasswordField.value;

    if (Email === 'kingalvi@khan.com' && Password === 'khan 555 khan') {
        window.location = 'http://127.0.0.1:5500/Index.html';
    }
    else {
        alert('Wrong Email OR Pssword !!')
    }
})

document.getElementById('Show password').addEventListener('click', function () {
    const PasswordField = document.getElementById('Password-Field');
    if (PasswordField.type = 'password'){
        PasswordField.type = 'text'
    }
    else{
        PasswordField.type = 'password'
    }
})