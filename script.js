document.addEventListener("scroll", function () {
  const nav_bar = document.querySelector(".nav_bar");
  const navbarHeight = 100;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav_bar").style.top = "0";
  } else {
    document.getElementsByClassName("nav_bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
