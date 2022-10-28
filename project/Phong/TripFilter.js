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

    if ($logInUsername.value == '') {
        $logInErrorText.innerHTML = 'Username must not be blank';
    }
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



let $destination = document.getElementById('destinationFilter-items-container');
let destinationHTML = '';

for (let i = 0; i < destination_data.length; i++) {
    destinationHTML += `
        <div class="Filter-item">
            <div class="Filter-item-img-container">
                <img class="Filter-item-img" src="${destination_data[i].imgsrc}" alt="">
                <a href="TripSorting.html" id="${destination_data[i].name}" class="viewallBtn">View All</a href="TripSorting.html">
            </div>
            <div class="Filter-item-title">
                <h2>
                    <a id="Filter-item-${destination_data[i].name}" class="Filter-item-name" href="TripSorting.html">${destination_data[i].name}</a>
                </h2>
                <span id="destinationTripCount">(${destination_data[i].tripCount})</span>
            </div>
        </div>`;

}

$destination.innerHTML = destinationHTML;


let $activities = document.getElementById('activitiesFilter-items-container');
let activitiesHTML = '';

for (let i = 0; i < activities_data.length; i++) {
    activitiesHTML += `
        <div class="Filter-item">
            <div class="Filter-item-img-container">
                <img class="Filter-item-img" src="${activities_data[i].imgsrc}" alt="">
                <div class="viewallBtn">View All</div>
                </div>
            <div class="Filter-item-title">
                <h2>
                    <a class="Filter-item-name" href="">${activities_data[i].name}</a>
                </h2>
                <span id="activitiesTripCount">(${activities_data[i].tripCount})</span>
            </div>
        </div>`;

}

$activities.innerHTML = activitiesHTML;


let $triptypes = document.getElementById('triptypesFilter-items-container');
let triptypesHTML = '';

for (let i = 0; i < triptypes_data.length; i++) {
    triptypesHTML += `
        <div class="Filter-item">
            <div class="Filter-item-img-container">
                <img class="Filter-item-img" src="${triptypes_data[i].imgsrc}" alt="">
                <div class="viewallBtn">View All</div>
            </div>
            <div class="Filter-item-title">
                <h2>
                    <a class="Filter-item-name" href="">${triptypes_data[i].name}</a>
                </h2>
                <span id="triptypesTripCount">(${triptypes_data[i].tripCount})</span>
            </div>
        </div>`;

}

$triptypes.innerHTML = triptypesHTML;


