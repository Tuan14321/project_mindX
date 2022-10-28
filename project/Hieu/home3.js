let $data = document.getElementsByClassName("destinations-pic")[0];
fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
  .then((response) => response.json())
  .then((data) => {
    let string = "";
    for(let i = 0; i < 3; i++) {
        string += `
        <div class="destinations-pic1">
                        <img class="lan1-anh1" src="${data[i].timg}" alt="">
                        <div class="destinations-pic-tour">
                            <p>2 Tour</p>
                        </div>
                        <div class="destinations-pic-content">
                            <h3 class="destinations-pic-title">${data[i].location}</h3>
                            <p class="destinations-pic-text">${data[i].description}</p>
                            <a href="../Phong/TripSorting.html" class="destinations-pic-a">View Detail</a>                           
                        </div>
                    </div>
        `
    }
    $data.innerHTML = string;
  }
  );

  let $data2 = document.getElementsByClassName("container-tours")[0];
  fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
    .then((response) => response.json())
    .then((data2) => {
      let string = "";
      for(let i = 0; i < 6; i++) {
          string += `
          <div class="tours-1">
    <div class="tour-sale">${data2[i].sale}% Off</div>
    <div class="tours-pic">
        <a href="../Phong/TripSorting.html"><img class="tours-picture" src="${data2[i].timg}" alt=""></a>
    </div>
    <div class="tours-featured">Featured</div>  
    <div class="tours-title">
        <a class="tours-title-color" href="../Phong/TripSorting.html">${data2[i].tname}</a>
    </div>
    <div class="tours-time-price">
        <div class="tours-time">
            <i class="fa-regular fa-clock"></i>
            8 days - 7 nights
        </div>
        <div class="tours-price">
            <span class="actual-price">$1,300</span>
            <span class="discounted-price price-color">$1,200</span>    
        </div>
    </div>
</div>
          `
      }
      $data2.innerHTML = string;
    }
    );


    