const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
/* Toggle Header */
function Booking() {
    let $sDate = document.getElementById("date").value;
    let $firstName = document.getElementById("firstName").value;
    let $lastName = document.getElementById("lastName").value;
    let $email = document.getElementById("email").value;
    let $address = document.getElementById("address").value;
    let $phone = document.getElementById("phone").value;

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/customer')

        .then((response) => response.json())
        .then((customer) => {
            let orderId = localStorage.getItem("idOrderAccount");
            console.log(orderId);
            const newCustomer = {
                name: $firstName + " " + $lastName,
                email: $email,
                address: $address,
                phone: $phone,
                tour_id: id,
                id: customer.length + 1 + "",
            };

            const newOrder = {
                tour_id: id,
                customer_id: customer.length + 1 + "",
                id: orderId + "",
                order_id: orderId + "",
            }
            console.log(newOrder);
            console.log(newCustomer);

            fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/order', {
                method: 'POST',
                body: JSON.stringify(newOrder),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                });
            fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/customer', {
                method: 'POST',
                body: JSON.stringify(newCustomer),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    window.location.assign("/thankyou.html?id="+ id);
                });
        });



}




function toggleHeader() {
    let $bar = document.getElementById('fa-bars');
    let $headerMenu = document.getElementById('headerMenu');

    $bar.addEventListener('click', function () {
        $headerMenu.classList.toggle('toggle-display');
    })
}

toggleHeader();


/* Show Password */


fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
    .then((response) => response.json())
    .then((tours) => {
        let $leftSideContainer = document.getElementById('leftSide-container');

        for (let i = 0; i < 3; i++) {
            $leftSideContainer.innerHTML += `
            <div class="featuredTrips-item__container">
                        <div class="imgPrice-container">
                            <a href=""><img id="featuredTrips-item__img" class="featuredTrips-item__img" src="${tours[i].timg}" alt=""></a>
                            <div class="featuredTrips-item__price">
                                <span class="featuredTrips-strikedPrice">$${tours[i].price}</span>
                                <span class="featuredTrips-actualPrice">$${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}</span>
                            </div>
                        </div>

                        <div class="info-container">
                            <div class="featuredTrips__saleAmount">${tours[i].sale}% Off</div>
                            <a href=""><div class="featuredTrip__name">${tours[i].tname}</div></a>
                            <div class="locatLength-container">
                                <div class="featuredTrip__location">
                                    <i class="fa-solid fa-location-dot"></i> Nepal
                                </div>
                                <div class="fearturedTrip__length">
                                    <i class="fa-solid fa-clock-rotate-left"></i> ${tours[i].date} days
                                </div>
                            </div>
                        </div>
                    </div>
            `
        }
    });