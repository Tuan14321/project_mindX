
/* Trip Sorting Description */

let $tripSortDescriptionContainer = document.getElementById('tripSort-description-container');

$tripSortDescriptionContainer.innerHTML += `
<h1 class="tripSort-name">${destination_data[3].name}</h1>
<br />
<br />
<div class="tripSort-description-content">
    ${destination_data[3].content}
</div>`;



/* Trip Items */

let $minPriceValue = document.getElementById('minPrice-value');
let $maxPriceValue = document.getElementById('maxPrice-value');
let $durationValue = document.getElementById('duration-value');

let $minRange = document.getElementById('minRange');
let $maxRange = document.getElementById('maxRange');
let $durationRange = document.getElementById('durationRange');

let $destiSelect = document.getElementById('desti-select');
let $activSelect = document.getElementById('activ-select');
let $typeSelect = document.getElementById('type-select');

function requestDetail(id){
    window.location.assign("detail.html?id=" + id)
}
fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
    .then((response) => response.json())
    .then((tours) => {

        console.log(tours);
        /* Display Trip Items */

        function displayTripItems() {
            let $tripItemsContainer = document.getElementById('trip-items-container');

            
            for (let i = 0; i < tours.length; i++) {
                idClick = tours[i].id
                $tripItemsContainer.innerHTML +=
                    `
            <div id="${tours[i].id}" class="trip-item-container">
                <div class="trip-description-container">
                    <div class="tripItem__img-container">
                        <a><img onclick="requestDetail(${tours[i].id})" class="tripItem__img" src="${tours[i].timg}" alt=""></a>
                    </div>
        
                    <div class="tripInfor-container">
                        <a href=""><h2 class="tripInfor__name">${tours[i].tname}</h2></a>
                        <div class="tripInfor__detail">
                            <div class="location-and-length">
                                <div class="tripInfor__detail--location">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <a href="" class="tripInfor__detail--locationText">${tours[i].location}</a>
                                </div>
                                <div class="tripInfor__detail--length">
                                    <i class="fa-solid fa-clock"></i>
                                    <div class="tripInfor__detail--lengthText">${tours[i].date} Days</div>
                                </div>
                            </div>
                            <div class="tripInfor__detail--price">
                                <div class="saleAmount">${tours[i].sale}% Off</div>
                                <div class="price-holder">
                                    <span class="actual-price">$ ${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00</span>
                                    <span class="striked-price">$ ${tours[i].price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="tripItem-footer-container">
                    <div class="availableTime">
                        <div class="availableTime__text">Available through out the year:</div>
                        <ul class="calendar">
                            <li>Jan</li>
                            <li>Feb</li>
                            <li>Mar</li>
                            <li>Apr</li>
                            <li>May</li>
                            <li>Jun</li>
                            <li>Jul</li>
                            <li>Aug</li>
                            <li>Sep</li>
                            <li>Oct</li>
                            <li>Nov</li>
                            <li>Dec</li>
                        </ul>
                    </div>
        
                    <a href="" class="viewDetail-btn">View Details</a>
                </div>
            </div>
            `
            }
        }

        displayTripItems();

        /* Criteria */

        // Criteria Range onInput

        let $minPriceValue = document.getElementById('minPrice-value');
        let $maxPriceValue = document.getElementById('maxPrice-value');
        let $durationValue = document.getElementById('duration-value');

        let $minRange = document.getElementById('minRange');
        let $maxRange = document.getElementById('maxRange');
        let $durationRange = document.getElementById('durationRange');

        function displayRangeValue() {
            $minPriceValue.innerHTML = $minRange.value;
            $maxPriceValue.innerHTML = $maxRange.value;
            $durationValue.innerHTML = $durationRange.value;
        }

        displayRangeValue();

        $minRange.addEventListener('input', function () {
            $minPriceValue.innerHTML = $minRange.value;
        })

        $maxRange.addEventListener('input', function () {
            $maxPriceValue.innerHTML = $maxRange.value;
        })

        $durationRange.addEventListener('input', function () {
            $durationValue.innerHTML = $durationRange.value;
        })

        // Criteria Display Option

        let $destiSelect = document.getElementById('desti-select');
        let $activSelect = document.getElementById('activ-select');
        let $typeSelect = document.getElementById('type-select');

        function displayOption() {

            for (let i = 0; i < destination_data.length; i++) {
                $destiSelect.innerHTML += `<option value="${destination_data[i].name}">${destination_data[i].name}</option>`
            }
            for (let i = 0; i < activities_data.length; i++) {
                $activSelect.innerHTML += `<option value="${activities_data[i].name}">${activities_data[i].name}</option>`
            }
            for (let i = 0; i < triptypes_data.length; i++) {
                $typeSelect.innerHTML += `<option value="${triptypes_data[i].name}">${triptypes_data[i].name}</option>`
            }
        }

        displayOption();

        // Criteria Clear All

        let $clearAll = document.getElementById('clearAll');

        $clearAll.addEventListener('click', function () {
            let min = $minRange.getAttribute('min');
            let max = $maxRange.getAttribute('max');
            let minlength = $durationRange.getAttribute('min');

            let $destiSelect = document.getElementById('desti-select');
            let $activSelect = document.getElementById('activ-select');
            let $typeSelect = document.getElementById('type-select');

            $minRange.value = min;
            $maxRange.value = max;
            $durationRange.value = minlength;

            $destiSelect.value = 'defaultOption';
            $activSelect.value = 'defaultOption';
            $typeSelect.value = 'defaultOption';
            displayRangeValue();

            fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
                .then((response) => response.json())
                .then((tours) => {
                    let count = 0;
                    for (let i = 0; i < tours.length; i++) {
                        count++;
                        let tripItem = document.getElementById(`${tours[i].id}`);
                        tripItem.style.animation = `fadeIn ease 3s`;
                        tripItem.style.display = 'flex';
                        tripItem.style.animation = `fadeIn ease 2s`;
                        $numberTripFound.innerHTML = `${count} trips found`;
                    }
                });
        })


    });


// Criteria Get Data

function sortTrip() {
    let $destinationValue = $destiSelect.value;
    let $activitiesValue = $activSelect.value;
    let $triptypesValue = $typeSelect.value;
    let $numberTripFound = document.getElementById('numberTripFound');

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
        .then((response) => response.json())
        .then((tours) => {
            let count = 0;
            for (let i = 0; i < tours.length; i++) {
                count++;
                let actualPrice = Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100;
                let tripItem = document.getElementById(`${tours[i].id}`);
                tripItem.style.display = 'none';
                tripItem.style.animation = `fadeIn ease 3s`;
                if (actualPrice >= $minRange.value && actualPrice <= $maxRange.value && tours[i].date == Number(durationRange.value) && tours[i].location == $destinationValue && tours[i].activities == $activitiesValue) {
                    count++;
                    tripItem.style.display = 'flex';
                    tripItem.style.animation = `fadeIn ease 2s`;
                    if (count < 2) {
                        $numberTripFound.innerHTML = `${count} trip found`;
                    } else if (count >= 2) {
                        $numberTripFound.innerHTML = `${count} trips found`;
                    }
                }
            }
        });
}
