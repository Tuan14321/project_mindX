let $data = document.getElementsByClassName("destinations-pic")[0];
fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
  .then((response) => response.json())
  .then((data) => {
    let string = "";
    for(let i = 0; i < 3; i++) {
        string += `
        <div class="destinations-pic1">  
        <div class="destinations-pic-tour">
        <p>2 Tour</p>
    </div>
    <div class="destinations-pic-content">
        <h3 class="destinations-pic-title">${data[i].tname}</h3>
        <p class="destinations-pic-text">${data[i].description}</p>
        
        <a href="" class="destinations-pic-a">View All Tour</a>                         
    </div>
    </div>
        `
    }
    $data.innerHTML = string;
  }
  );

// let $bar =document.getElementById('fa-bars');
// let $headerMenu = document.getElementById('headerMenu');

// $bar.addEventListener('click', function() {
//     $headerMenu.classList.toggle('toggle-display');
// })