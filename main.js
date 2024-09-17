var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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

var navmenu = document.getElementById("nav-menu");

function openmenu() {
  navmenu.style.left = "0";
  navmenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function closemenu() {
  navmenu.style.left = "-40%";
  navmenu.style.position = "fixed";
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
