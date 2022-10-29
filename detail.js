const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
function requestCheckout() {
    window.location.assign('checkout.html?id=' + id);
}

fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
    .then((response) => response.json())
    .then((tours) => {
        let $item3 = document.getElementById('item-3');
        let $tourById = document.getElementById("tourById");
        let $tourPrice = document.getElementById('tour-price');
        let $pricePerPerson = document.getElementById('price-per-person');
        let $bookSummary = document.getElementById('booking-sumary');

        for (let i = 0; i < 3; i++) {
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

        for (let i = 0; i < tours.length; i++) {
            if (tours[i].id == id) {
                $tourById.innerHTML = `
                    <div>
                    <h1 class="trip-name">
                    ${tours[i].tname}
                </h1>
                <div class="carousel">
                    <img src="${tours[i].timg}"
                        alt="">
                </div>
                <div class="description">
                    <p>${tours[i].description}
                    </p>
                </div>
                </div>
                    `

                $tourPrice.innerHTML = `
                    <h5 class="saleAmount">
                    ${tours[i].sale}% off
                </h5>
                <div class="price-item">
                    <div class="actual-price">$ ${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00<span class="per-adult">per Adult</span></div>
                    <div class="striked-price">From <span>$${tours[i].price}.00</span></div>
                </div>
                    `

                $pricePerPerson.innerHTML = `
                    <span class="actualPrice">$ ${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00<span class="per-person">/
                    person</span></span>
            <span class="strikedPrice">$${tours[i].price}.00</span>
                    `

                $bookSummary.innerHTML = `
                    <h4 class="booking-summary-name">${tours[i].tname}</h4>
                    <b><i>Travellers</i></b>
                    <div class="calc-price">
                        <ul>
                            <li><b>1 Adult </b></li>
                            <li> ($ <b>${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00</b>/person)</li>
                        </ul>
                        <b>$ ${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00</b>
                    </div>
                    <div id="totalPrice" class="total-price">
                        Total : $ ${Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100}.00</b>
                    </div>
                    `
            }
        }

    });



function changeValue() {
    let $decreaseBtn = document.getElementById('decrease-btn');
    let $increaseBtn = document.getElementById('increase-btn');
    let $tripNumber = document.getElementById('trip-number');
    let $tripNumberValue = Number($tripNumber.value);
    let $totalPrice = document.getElementById("totalPrice");

    if ($tripNumberValue < 1) {
        $decreaseBtn.disabled = true;
    }

    $increaseBtn.addEventListener('click', function () {
        $tripNumber.value = ++$tripNumberValue;
        console.log($tripNumberValue);

        if ($tripNumberValue < 1) {
            $decreaseBtn.disabled = true;
        }
        if ($tripNumberValue >= 1) {
            $decreaseBtn.disabled = false;
        }

        fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
            .then((response) => response.json())
            .then((tours) => {
                let stringPrice = "";
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const id = urlParams.get('id');
                for (let i = 0; i < tours.length; i++) {
                    if (tours[i].id == id) {
                        let Price = (Math.round(((tours[i].price) * (100 - tours[i].sale) / 100) / 100) * 100) * $tripNumberValue;
                        localStorage.setItem("totalPrice", Price)

                        $totalPrice.innerHTML += `
                Total : $ ${localStorage.getItem("totalPrice")}.00</b>
                `
                    }

                }
            });
    })

    $decreaseBtn.addEventListener('click', function () {
        $tripNumber.value = --$tripNumberValue;
        console.log($tripNumberValue);
        if ($tripNumberValue < 1) {
            $decreaseBtn.disabled = true;
        }
        if ($tripNumberValue >= 1) {
            $decreaseBtn.disabled = false;
        }
    })
}

changeValue();

function tabContentDisplay() {
    let $overview = document.getElementById('overview');
    let $itinerary = document.getElementById('itinerary');
    let $cost = document.getElementById('cost');
    let $FAQs = document.getElementById('FAQs');
    let $tabContent = document.getElementById('tabContent');

    $itinerary.addEventListener('click', function () {
        $tabContent.innerHTML = `
        <div class="itinerary-content">
        <p>Day 1 : Kathmandu to Pokhara (By flight or Bus)</p>

                            <p>Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and
                                then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill.
                                Normally, the trek starts like Phokhara to Nayapul and ends like Phedi to Pokhara.</p>
                                <br>
                                <hr>
                                
                            <p>Day 2 : Drive to Nayapul and trek to Ulleri</p>
                            <p>While early travel tended to be slower, more dangerous, and more dominated by trade and
                                migration, cultural and technological advances over many years have tended to mean that
                                travel has become easier and more accessible. The evolution of technology in such
                                diverse fields as horse tack and bullet trains has contributed to this trend.</p>
                                <br>
                                <hr>

                            <p>Day 3 : Trek to Ghorepani</p>
                            <p>The Palace of Fifty five Windows: This magnificent palace was built during the reign of
                                King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla
                                in the seventeenth century. Among the brick walls with their gracious setting and
                                sculptural design, is a balcony with Fifty five Windows, considered to be a unique
                                masterpiece of woodcarving.</p>
                                <br>
                                <hr>

                            <p>Day 4 : Early trek to Poon Hill for Sunrise, Back to Ghorepani and Trek to Tadapani</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean. A small river named Duden flows by their place and supplies it with the
                                necessary regelialia.</p>
                                <br>
                                <hr>

                            <p>Day 5 : Tadapani to Chomrong</p>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life One day however a small line of blind text by the name of Lorem
                                Ipsum decided to leave for the far World of Grammar.</p>
                                <br>
                                <hr>

                            <p>Day 6 : Chomrong to Dobhan (Dovan)</p>
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                                Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                                <br>
                                <hr>

                            <p>Day 7 : Dovan to Deurali</p>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the
                                skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline
                                of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p>
                                <br>
                                <hr>
                                </div>

        `;
    })

    $overview.addEventListener('click', function () {
        $tabContent.innerHTML = `<div class="overView-content">
        <p>Travel is the movement of people between relatively distant geographical locations, and can
            involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means,
            with or without luggage, and can be one way or round trip. Travel can also include
            relatively short stays between successive movements.</p>

        <p>The origin of the word “travel” is most likely lost to history. The term “travel” may
            originate from the Old French word travail, which means 'work'. According to the Merriam
            Webster dictionary, the first known use of the word travel was in the 14th century.</p>

        <p>It also states that the word comes from Middle English travailen, travelen (which means to
            torment, labor, strive, journey) and earlier from Old French travailler (which means to work
            strenuously, toil). In English we still occasionally use the words “travail”, which means
            struggle. According to Simon Winchester in his book The Best Travelers' Tales (2004), the
            words “travel” and “travail” both share an even more ancient root: a Roman instrument of
            torture called the tripalium (in Latin it means “three stakes”, as in to impale).</p>`;
    })

    $cost.addEventListener('click', function () {
        $tabContent.innerHTML = `
        <h2 class="tab-title">The Trip Cost Includes</h2>
                            <div class="tab-underline"></div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>Pick-up or Drop-off service from and to Airport(in our own vehicle)
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>Transportation to and from!!
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>Transportation, food, accommodation and insurance of Guide during the trip
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don’t have your own. Down jacket, sleeping bag and duffel bag must be returned after completion of the trip)
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>First Aid Medical Kit(Your guide will carry the Medical Kit but we also advise to bring yourself for your own use, as far as possible)
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-check"></i>All the required permits and paperwork
                            </div>

                            <h2 class="tab-title">The Trip Cost Excludes</h2>
                            <div class="tab-underline"></div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>International Airfare
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Visa Charges
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Hotel Expenses(In Kathmandu, some packages do include hotel expenses)
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Your travel and medical insurance
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Food and accommodations in Kathmandu
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Services not mentioned or not promised by the agent/agency
                            </div>
                            <div class="include-item">
                                <i class="fa-regular fa-circle-xmark"></i>Emergency expenses such as expenses on chartered helicopter.
                            </div>
        `;
    })

    $FAQs.addEventListener('click', function () {
        $tabContent.innerHTML = `
        <h2 class="tab-title">Frequently asked Questions</h2>
                        <div class="tab-underline"></div>

                        <div class="question">
                            How fit do I need to be to do this trek?
                        </div>
                        <p class="answer">
                            Annapurna Base Camp is a Grade B or a moderately difficult trekking route. So
                            any fit person can do this trek, even if you do not have any previous experience. You should
                            be aware of what to expect and mentally prepare for it. Then, as long as you will to, you
                            can.
                        </p>
                        <div class="question">
                            How long do we walk every day when doing Annapurna Base Camp trekking?
                        </div>
                        <p class="answer">
                            On average, you walk about 4 to 6 hours per day. One or two days can be as less as 3hrs and
                            one or two days can be as long as 7hrs.
                        </p>
                        <div class="question">
                            What is the highest altitude reached in this trek?
                        </div>
                        <p class="answer">
                            The highest altitude reached is 4190m. This is the elevation of Annapurna Base Camp. ABC is
                            the highest we will climb in this trek.
                        </p>
                        <div class="question">
                            What about battery charging and hot shower facilities?
                        </div>
                        <p class="answer">
                            Yes, you can charge batteries en route. Charger should be brought. There are hot shower
                            facilities as well. You may have to pay certain amount for both ($1-$2). Negotiate. Also,
                            hot water facility could be free at lower elevation.
                        </p>
                        <div class="question">
                            Are there ATMs on the way to Annapurna Base Camp?
                        </div>
                        <p class="answer">
                            No. There are no ATMs on this trek route. You will have to draw enough cash in Pokhara or
                            Kathmandu. There are a number of ATMs in these cities. Everything is paid in Nepali rupees.
                            So money should be exchanged before the start of the trek.
                        </p>
                        <div class="question">
                            What about internet access?
                        </div>
                        <p class="answer">
                            Yes. Internet can be accessed in most places. Sometimes, there might be some technical
                            problems. Internet in Nepal is not as fast as you are used to and at times you can just lose
                            connection.
                        </p>
                        <div class="question">
                            Is it necessary to hire Guides/trekking agency for Annapurna Base Camp trekking?
                        </div>
                        <p class="answer">
                            Not really. It depends on you. If you want, ABC trekking can be done independently. You
                            could hire a guide and a porter by yourself instead of going through an agency or not hire a
                            guide at all. Although, not having a guide can be a little problematic during off season.
                            <br>
                            <br>
                            It really depends on you. Is it your first time in Nepal? How confident are you of being
                            able to find your way around? How pressed on time are you? If you go through an agency, it
                            will be costlier but everything will be planned. You will only have to come, trek and
                            return.
                        </p>
                        <div class="question">
                            How much do guides and porters cost?
                        </div>
                        <p class="answer">
                            For Annapurna region, pay for guides range from $20 to $30 per day and porters take $15 to
                            $25 per day.
                        </p>
        `;
    })
}

tabContentDisplay();