/* Toggle Header */

function toggleHeader() {
    let $bar = document.getElementById('fa-bars');
    let $headerMenu = document.getElementById('headerMenu');

    $bar.addEventListener('click', function () {
        $headerMenu.classList.toggle('toggle-display');
    })
}

toggleHeader();


/* Show Password */

function showPassword() {
    let $showSignUpPassword = document.getElementById('showSignUpPassword');
    let $signUpPassword = document.getElementById('signUp-Password');

    if ($signUpPassword.type === "text") {
        $signUpPassword.type = "password";
        $showSignUpPassword.innerHTML = "visibility";
    } else {
        $signUpPassword.type = "text";
        $showSignUpPassword.innerHTML = "visibility_off";

    }
}

function showSignUpPassword() {
    let $showConfirmPassword = document.getElementById('showConfirmPassword');
    let $signUpConfirmPassword = document.getElementById('signUp-ConfirmPassword');

    if ($signUpConfirmPassword.type === "text") {
        $signUpConfirmPassword.type = "password";
        $showConfirmPassword.innerHTML = "visibility";
    } else {
        $signUpConfirmPassword.type = "text";
        $showConfirmPassword.innerHTML = "visibility_off";

    }
}


/* Error Text */

function logInErrorText() {
    let $logInUsername = document.getElementById('logIn-username');
    let $logInPassword = document.getElementById('logIn-password');
    let $logInErrorText = document.getElementById('logIn-errorText');

    if($logInUsername.value == '') {
        $logInErrorText.innerHTML = 'Username must not be blank';
    }
}

function signUpUsernameErrorText() {
    let $signUpUsername = document.getElementById('signUp-username');
    let $usernameErrorText = document.getElementById('username-errorText');

    if($signUpUsername.value == '') {
        $usernameErrorText.innerHTML = 'Username must not be blank.';
    } else {
        $usernameErrorText.innerHTML = '';
    }
}

function signUpPasswordErrorText() {
    let $signUpPassword = document.getElementById('signUp-Password');
    let $signUpConfirmPassword = document.getElementById('signUp-ConfirmPassword');
    let $passwordErrorText = document.getElementById('password-errorText');

    if($signUpPassword.value.length < 6) {
        $passwordErrorText.innerHTML = 'Password must contain at least 6 characters.';
    } else if($signUpPassword.value !== $signUpConfirmPassword.value) {
        $passwordErrorText.innerHTML = 'Confirm Password does not match.';
    } 
    if($signUpPassword.value.length >= 6 && $signUpPassword.value === $signUpConfirmPassword.value) {
        $passwordErrorText.innerHTML = '';
    }
}