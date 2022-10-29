
loadData();
loadCustomerData()
const $view = Math.floor(Math.random() * 100);
let $insert = document.getElementById("insert").onclick = function () {
    let arrDes = [];
    let arrLocation = [];
    let arrAct = [];
    const $tcode = document.getElementById("tcode").value;
    const $tname = document.getElementById("tname").value;
    const $timg = document.getElementById("timg").value;
    const $des = document.getElementById("descript").value;
    const $price = Number(document.getElementById("price").value);
    const $sale = Number(document.getElementById("sale").value);
    const $location = document.getElementById("location").value;
    const $act = document.getElementById("act").value;
    const $day = document.getElementById("day").value;
    arrDes.push($des);
    arrLocation.push($location);
    arrAct.push($act);


    const newTour = {
        code: $tcode,
        tname: $tname,
        timg: $timg,
        description: arrDes,
        price: $price,
        sale: $sale,
        location: arrLocation,
        activities: arrAct,
        date: $day,
        view: $view,
    }
    console.log(newTour);


    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours', {
        method: 'POST',
        body: JSON.stringify(newTour),
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
            window.location.reload();
        });
};

function getLocation(locations) {
    let listLocation = ""
    for (let location of locations) {
        listLocation = listLocation + location;
    }
    return listLocation;
}
function getActivities(activities) {
    let listActivities = "";
    for (let activity of activities) {
        listActivities = listActivities + activity;
    }
    return listActivities;
}
function getDescript(descript) {
    let listDes = "";
    for (let des of descript) {
        listDes = listDes + des;
    }
    return listDes;
}

function loadData() {
    let $data = document.getElementById("data");
    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
        .then((response) => response.json())
        .then((data) => {
            let stringHTML = '';
            for (let i = 0; i < data.length; i++) {

                $id = data.length + 2;
                let location = getLocation(data[i].location)
                let activities = getActivities(data[i].activities)
                let descript = getDescript(data[i].description)
                stringHTML +=
                    `
        <tr id="tour${data[i].id}">
            <td>${data[i].code}</td>
            <td>${data[i].tname}</td>
            <td><img style="height: 50px; width: 50px;" src="${data[i].timg}"
            alt=""></td>
            <td>${descript}</td>
            <td>${data[i].price}</td>
            <td>${data[i].sale}</td>
            <td>${location}</td>
            <td>${activities}</td>
            <td>${data[i].date}</td>
            <td>${data[i].view}</td>
            <td>${data[i].id}</td>
            <td><button type="button" class="btn btn-primary" onclick="getValueUpdate(${data[i].id})">Update</button></td>
            <td><button id="delete" type="button" class="btn btn-danger" onclick="Delete(${data[i].id})">Delete</button></td>
        </tr>
        `
            }
            $data.innerHTML = stringHTML;
        });
}

function getValueUpdate(id) {
    let $dataTour;
    let $data = document.getElementById("data");
    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
        .then((response) => response.json())
        .then((data) => {
            let stringHTML = '';
            for (let i = 0; i < data.length; i++) {
                let $dataTour = document.getElementById(`tour${data[i].id}`)

                let location = getLocation(data[i].location)
                let activities = getActivities(data[i].activities)
                let descript = getDescript(data[i].description)
                stringHTML =
                    `
        <td><input id="updateCode" type="text" value="${data[i].code}"/></td>
        <td><input id="updateName" type="text" value="${data[i].tname}"/></td>
        <td><input id="updateImg" type="text" value="${data[i].timg}"/></td>
        <td><input id="updateDes" type="text" value="${descript}"/></td>
        <td><input id="updatePrice" type="text" value="${data[i].price}"/></td>
        <td><input id="updateSale" type="text" value="${data[i].sale}"/></td>
        <td><input id="updateLocation" type="text" value="${location}"/></td>
        <td><input id="updateAct" type="text" value="${activities}"/></td>
        <td><input id="updateDate" type="text" value="${data[i].date}"/></td>
        <td>${data[i].view}</td>
        <td>${data[i].id}</td>
            <td><button type="button" class="btn btn-primary" onclick="Update(${data[i].id})">Update</button></td>
            <td><button id="delete" type="button" class="btn btn-danger" onclick="Delete(${data[i].id})">Delete</button></td>
        `
                if (data[i].id == id) {
                    console.log($dataTour);
                    $dataTour.innerHTML = stringHTML;

                }
            }


        });


}

function Update(id) {
    const formData = new FormData();
    const $updateCode = document.getElementById("updateCode").value;
    const $updateName = document.getElementById("updateName").value;
    const $updateImg = document.getElementById("updateImg").value;
    const $updateDes = document.getElementById("updateDes").value;
    const $updatePrice = Number(document.getElementById("updatePrice").value);
    const $updateSale = Number(document.getElementById("updateSale").value);
    const $updateLocation = document.getElementById("updateLocation").value;
    const $updateAct = document.getElementById("updateAct").value;
    const $updateDate = document.getElementById("updateDate").value;

    const updateTour = {
        code: $updateCode,
        tname: $updateName,
        timg: $updateImg,
        description: $updateDes,
        price: $updatePrice,
        sale: $updateSale,
        location: $updateLocation,
        activities: $updateAct,
        date: $updateDate,
        view: $view,
    }

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours/' + id, {
        method: 'PUT',
        body: JSON.stringify(updateTour),
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },

    })
        .then((response) => response.json())
        .then((result) => {
            alert("Update Success");
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function Delete(id) {
    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours/' + id, {
        method: 'DELETE',
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            alert("Delete successfully")
            window.location.reload();
        });

}

function loadCustomerData() {
    let $accountData = document.getElementById("accountData");
    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
        .then((response) => response.json())
        .then((data) => {
            let stringHTML = '';
            for (let i = 0; i < data.length; i++) {
                if (data[i].role == "user") {
                    stringHTML +=
                        `
                    <tr id = "acc${data[i].id}">
                    <td>${data[i].id}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].password}</td>
                    <td>${data[i].displayName}</td>
            <td><button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#accountModal" onclick="viewDetail(${data[i].order_id})">Detail</button></td>
                </tr>
        `
                }
            }
            $accountData.innerHTML = stringHTML;
        });
}

function deleteOrder(orderId) {
    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/order/' + orderId, {
        method: 'DELETE',
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            alert("Delete successfully")
            window.location.reload();
        });
}

function viewDetail(id) {
    let customer_id = 0;
    let tour_id = 0;
    let order_id = 0;
    let $billData = document.getElementById("bill-detail");
    let $customerBill = document.getElementById("customerBill");
    let $tourBill = document.getElementById("tourBill");
    let $deleteOrder = document.getElementById("deleteOrder");

    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/Account')
        .then((response) => response.json())
        .then((dataAccount) => {
            let stringHTML = '';
            let stringHTMLCustomer = '';
            let stringHTMLTour = '';
            for (let i = 0; i < dataAccount.length; i++) {
                if (dataAccount[i].id == id) {
                    order_id = dataAccount[i].order_id;
                }
                stringHTML = `
                <button type="button" class="btn btn-outline-danger" onclick = "deleteOrder(${order_id})">Detele Bill</button>
                `
                $deleteOrder.innerHTML = stringHTML;

            }
            fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/order')
                .then((response) => response.json())
                .then((dataOrder) => {
                    for (let i = 0; i < dataOrder.length; i++) {
                        if (dataOrder[i].order_id == order_id) {
                            customer_id = dataOrder[i].customer_id;
                            tour_id = dataOrder[i].tour_id;
                        }
                    }
                    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/customer')
                        .then((response) => response.json())
                        .then((dataCustomer) => {
                            for (let i = 0; i < dataCustomer.length; i++) {
                                if (dataCustomer[i].id == customer_id) {
                                    stringHTMLCustomer = `
                                         <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Customer Name: </strong>
                                         <span class="value col-md-6">${dataCustomer[i].name}</span>
                                        </div>
                                        <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Email: </strong>
                                            <span class="value col-md-6">${dataCustomer[i].email}</span>
                                        </div>
                                        <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Address: </strong>
                                            <span class="value col-md-6">${dataCustomer[i].address}</span>
                                        </div>
                                        <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Phone: </strong>
                                            <span class="value col-md-6">${dataCustomer[i].phone}</span>
                                        </div>
                                            `

                                }
                            }
                            $customerBill.innerHTML = stringHTMLCustomer
                        });

                    fetch('https://6356495a9243cf412f80d35a.mockapi.io/api/travling/tours')
                        .then((response) => response.json())
                        .then((dataTour) => {
                            for (let i = 0; i < dataTour.length; i++) {
                                if (dataTour[i].id == tour_id) {
                                    stringHTMLTour = `
                                    <h2 class=" mb-3 mt-2">Tour: </h2>
                                            <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Trip Code: </strong>
                                            <span class="value col-md-6">${dataTour[i].code}</span>
                                        </div>
                                        <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Trip Name: </strong>
                                            <span class="value col-md-6">${dataTour[i].tname}</span>
                                        </div>
                                        <div class="detail-item border-bottom row mb-3">
                                            <strong class="item-label col-md-6">Trip Cost: </strong>
                                            <span class="value col-md-6">${dataTour[i].price}</span>
                                        </div>
                                   
                                          `

                                }
                            }
                            $tourBill.innerHTML = stringHTMLTour;

                        });

                });


        });
}







