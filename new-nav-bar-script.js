"use strict";
function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
  }