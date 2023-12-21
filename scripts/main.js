let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

window.onload = function () {
  var form = document.getElementById("contactForm");
  if(form){
  form.onsubmit = submitted.bind(form);
  }
};

function submitted(event) {
  alert("Successfully!");
}