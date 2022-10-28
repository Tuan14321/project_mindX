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

function login() {
    let $logInUsername = document.getElementById('logIn-username').value;
    let $logInPassword = document.getElementById('logIn-password').value;
    let $logInErrorText = document.getElementById('logIn-errorText');

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
    .then((response) => response.json())
    .then((data) => {
        let ischeck = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].username == $logInUsername && data[i].password == $logInPassword) {
                ischeck = true;
            }
        }
        console.log(ischeck);
        if (ischeck == true) {
            window.location.assign("http://127.0.0.1:5500/Hieu/home3.html")
        } else {
            alert("Username or Password Incorrect");
        }
    });

    // if ($logInUsername.value == '') {
    //     $logInErrorText.innerHTML = 'Username must not be blank';
    // }
}

function signUpUsernameErrorText() {
    let $signUpUsername = document.getElementById('signUp-username');
    let $usernameErrorText = document.getElementById('username-errorText');

    if ($signUpUsername.value == '') {
        $usernameErrorText.innerHTML = 'Username must not be blank.';
    } else {
        $usernameErrorText.innerHTML = '';
    }
}

function signUpPasswordErrorText() {
    let $signUpPassword = document.getElementById('signUp-Password');
    let $signUpConfirmPassword = document.getElementById('signUp-ConfirmPassword');
    let $passwordErrorText = document.getElementById('password-errorText');

    if ($signUpPassword.value.length < 6) {
        $passwordErrorText.innerHTML = 'Password must contain at least 6 characters.';
    } else if ($signUpPassword.value !== $signUpConfirmPassword.value) {
        $passwordErrorText.innerHTML = 'Confirm Password does not match.';
    }
    if ($signUpPassword.value.length >= 6 && $signUpPassword.value === $signUpConfirmPassword.value) {
        $passwordErrorText.innerHTML = '';
    }
}
// function login() {
//     let $username = document.getElementById('logIn-username').value;
//     let $password = document.getElementById('logIn-password').value;
//     let $logInErrorText = document.getElementById('logIn-errorText');

//     fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
//         .then((response) => response.json())
//         .then((data) => {
//             let ischeck = false;

//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].$username == $username && data[i].password == $password) {
//                     ischeck = true;
//                 }
//             }
//             if (ischeck) {
//                 window.location.assign("http://127.0.0.1:5500/Hieu/home3.html")
//             } else {
//                 $logInErrorText.innerHTML = 'Username or password incorrect';
//             }
//         });
// }
