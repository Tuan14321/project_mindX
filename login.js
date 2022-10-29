/* Toggle Header */
// function toggleHeader() {
//     let $bar = document.getElementById('fa-bars');
//     let $headerMenu = document.getElementById('headerMenu');

//     $bar.addEventListener('click', function () {
//         $headerMenu.classList.toggle('toggle-display');
//     })
// }

// toggleHeader();


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
    let $avtLogin = document.getElementById('avtLogin');
    let $headerLogin = document.getElementById('headerLogin');

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
        .then((response) => response.json())
        .then((data) => {
            let ischeck = false;
            let stringAvtHTML = "";
            let stringHeader = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].username == $logInUsername && data[i].password == $logInPassword) {
                localStorage.setItem("idAccount", data[i].id)
                localStorage.setItem("idOrderAccount", data[i].order_id)
                localStorage.setItem("role", data[i].role);


                    ischeck = true;
                    stringHeader=`
                    <img class="header__logo"
                    src="https://thebootstrapthemes.com/previews/travel-agency-booking/wp-content/uploads/sites/48/2021/05/travel-agency-booking-logo.png" />
    
                <nav id="headerMenu" class="header__menu">
                    <ul class="header__menu--list">
                        <li>
                            <a class="header__menu--items" href="">Home </a>
                        </li>
                        <li>
                            <a class="header__menu--items" href="">Trips Types</a>
                        </li>
                        <li>
                            <a class="header__menu--items" href="">ABout Us </a>
                        </li>
                        <li>
                            <a class="header__menu--items" href="">Blog </a>
                        </li>
                        <li>
                            <a class="header__menu--items" href="">Contact </a>
                        </li>
                    </ul>
                </nav>
    
                <nav class="header__account">
                    <ul class="header__account--list">
                        <i style="display: none;" id="fa-bars" class="fa-solid fa-bars"></i>
                        <li title="Notification" class="header__account--item">
                            <i class="fa-solid fa-bell"></i>
                        </li>
                        <li title="${data[i].name}" class="header__account--item">
                            <a class="btn btn-primary user-btn"
                                role="button">
                                <img class="avt-login" src="${data[i].avt}">
                            </a>
                        </li>
                    </ul>
                </nav>
    
            </header>
                    `
                 }
            }
            if (ischeck == true) {
                let role = localStorage.getItem("role");
                if(role == "user"){
                    window.location.assign("home.html")
                } else if(role == "admin"){
                    window.location.assign("admin.html")
                }
                $headerLogin.innerHTML = stringHeader;
                localStorage.setItem("status", true);
            } else {
                alert("Username or Password Incorrect");
            }
        });

}
function register(){
    let $userName = document.getElementById("signUp-username").value;
    let $userPassword = document.getElementById("signUp-Password").value;
    let $displayName = document.getElementById("signUp-accountName").value;
    let $urlAvt = document.getElementById("signUp-avtUrl").value;
        const newAccount = {
            username: $userName,
            password: $userPassword,
            displayName: $displayName,
            role: "user",
            avt: $urlAvt,
            status: false,
        }

        fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account', {
            method: 'POST',
            body: JSON.stringify(newAccount),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                alert("Add successfully")
                window.location.assign("index.html");
            });

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

