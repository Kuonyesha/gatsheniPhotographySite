let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// let navtoggle = document.getElementsByClassName("nav-toggle");
let submenu = document.getElementById("sub-menu");

// function openmenu() {
//   // submenu.classList.toggle("active-link"); // Toggle active class

//   // event.currentTarget.classList.add("active-link");
//   submenu.style.left = "0";
//   submenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
// }

// function closemenu() {
//   submenu.style.left = "-200px";
//   submenu.style.position = "fixed";
//   submenu.style.backgroundColor = "transparent";
// }

function openmenu() {
  document.getElementById("sub-menu").style.display = "block";
  document.getElementById("sub-menu").style.backgroundColor =
    "rgba(0, 0, 0, 0.5)";
  document.getElementById("sub-menu").style.width = "40%";
  document.getElementById("sub-menu").style.height = "40vh";
  document.getElementById("sub-menu").style.position = "fixed";
  document.getElementById("sub-menu").style.top = "0";
  document.getElementById("sub-menu").style.left = "0";
  document.getElementById("sub-menu").style.transition =
    "0.5s linear ease-in-out";
  document.getElementById("sub-menu").style.zIndex = "9999";
  document.getElementById("sub-menu").style.borderRadius = "10px";
  document.querySelector("i.fas.fa-bars").style.display = "none";
  document.querySelector("i.fas.fa-times").style.display = "block";
}

function closemenu() {
  document.getElementById("sub-menu").style.display = "none";
  document.querySelector("i.fas.fa-bars").style.display = "block";
  document.querySelector("i.fas.fa-times").style.display = "none";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwvVtUVr2Exhsu5pz6uLzIL9whVndukp-bT5izhqvg5hQ_BGgUMRAQFhpihLDz_aXV29A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this);

  fetch("send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data); // Show a success message
    })
    .catch((error) => console.error("Error:", error));
};
