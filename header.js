function showHeader() {
    let $headerLogin = document.getElementById('headerLogin');
    let stringHeader = "";

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
        .then((response) => response.json())
        .then((data) => {
            let ischeck = false;
            let stringAvtHTML = "";
            for (let i = 0; i < data.length; i++) {
                stringHeader = `
                    <header>
                    <img class="header__logo"
                    src="https://thebootstrapthemes.com/previews/travel-agency-booking/wp-content/uploads/sites/48/2021/05/travel-agency-booking-logo.png" />
    
                <nav id="headerMenu" class="header__menu">
                    <ul class="header__menu--list">
                        <li>
                            <a class="header__menu--items" href="">Home </a>
                        </li>
                        <li>
                            <a class="header__menu--items" href="">Trips Filter </a>
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
                        <i id="fa-bars" class="fa-solid fa-bars"></i>
                        <li title="Notification" class="header__account--item">
                            <i class="fa-solid fa-bell"></i>
                        </li>
                        <li title="${data[i].name}" class="header__account--item">
                            <a class="btn btn-primary user-btn"
                                role="button">
                                <img src="${data[i].avt}">
                            </a>
                        </li>
                    </ul>
                </nav>
    
            </header>
                    `
            }
            $headerLogin.innerHTML = stringHeader;
        });
}
showHeader();
function toggleHeader() {
    let $bar = document.getElementById('fa-bars');
    let $headerMenu = document.getElementById('headerMenu');

    $bar.addEventListener('click', function () {
        $headerMenu.classList.toggle('toggle-display');
    })
}

toggleHeader();




