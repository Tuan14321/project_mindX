// /* Toggle Header */

// function toggleHeader() {
//     let $bar = document.getElementById('fa-bars');
//     let $headerMenu = document.getElementById('headerMenu');

//     $bar.addEventListener('click', function () {
//         $headerMenu.classList.toggle('toggle-display');
//     })
// }

// toggleHeader();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');


fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
    .then((response) => response.json())
    .then((tours) => {
        let $item3 = document.getElementById('leftSide-container');
        let $detailBooking = document.getElementById("detailBooking");

        for(let i = 0; i < 3; i++) {
            $item3.innerHTML += `
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
    for(let i= 0; i<tours.length; i++) {
        if(tours[i].id == id){
            $detailBooking.innerHTML=`
            <div class="detail-item">
            <h6 class="booking-id">Booking ID :</h6>
            <span>1984</span>
        </div>
        <div class="detail-item detail-title">Trip Details</div>
        <a href="" class="detail-item a-detail">
            Best tour of the year <span>[#280]</span>
        </a>
        <div class="detail-item">
            <h6 class="booking-id">Trip ID :</h6>
            <span>${tours[i].id}</span>
        </div>
        <div class="detail-item">
            <h6 class="booking-id">Trip Code:</h6>
            <span>
            ${tours[i].id}</span>
        </div>
        <div class="detail-item">
            <h6 class="booking-id">Trip Cost:</h6>
            <span>
            $ ${tours[i].price}.00</span>
        </div>
        <div class="detail-item">
            <h6 class="booking-id">Trip start date:</h6>
            <span>October 29, 2022</span>
        </div>
        <div class="detail-item detail-title">Payment Details</div>

        <div class="detail-item">
            <h6 class="booking-id">Due amount:</h6>
            <span>
                1 X Adult ($ 1,500.00) = $ 1,500.00</span>
        </div>
        <div style="padding:50px 0px;" class="detail-item">
            <h6 class="booking-id">Remarks:</h6>
            <span>
                Your booking order has been placed. You booking will be confirmed after payment
                confirmation/settlement.</span>
        </div>
        <div class="detail-item">
            <h6 class="booking-id">Total:</h6>
            <span>
                $ ${tours[i].price}.00</span>
        </div>
            `
        }
    }

    });