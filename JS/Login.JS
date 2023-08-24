document.getElementById('Submit-Btn').addEventListener('click', function () {

    const EmailField = document.getElementById('Email-Field');
    const Email = EmailField.value;

    const PasswordField = document.getElementById('Password-Field');
    const Password = PasswordField.value;

    if (Email === 'kingalvi@khan.com' && Password === 'khan 555 khan') {
        window.location = 'Index.HTML';
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