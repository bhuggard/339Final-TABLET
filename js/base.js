var about = document.getElementById("am");
var pf = document.getElementById("pf");
var exp = document.getElementById("exp");
var fun = document.getElementById("fs");

var navHolder = document.getElementById("ntags");

var btns = navHolder.getElementsByClassName("btn");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");


    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}


