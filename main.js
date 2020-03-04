//Guestlist Example
let cust = "";
let guests = ["No orders up"];

// Main Page

function customer() {
  let name = document.getElementById("cust").value;
  if (document.getElementById('button').clicked == true) {
    guests.push(name);
  }

}

function staff() {

  guests.splice(0, 1);
}

// /Admin Page
function takealook() {

  bruh = 1
}

function remove() {

  getout = 2
  guests.splice(getout - 1, 1);
}
