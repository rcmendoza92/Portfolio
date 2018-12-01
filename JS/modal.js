// Get the modal
var modal = document.getElementById('about-modal');

// Get the image and insert it inside the modal
var button = document.getElementById("button");
var modalImg = document.getElementById("about-image");
var name = document.getElementById("name");
var nav = document.getElementById("pageNav");
var banner = document.getElementById("bg");
button.onclick = function(){
    modal.style.display = "block";
    name.style.display = "none";
    nav.style.display = "none";
    banner.style.filter = "blur(5px)";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  name.style.display = "block";
  nav.style.display = "block";
  banner.style.filter = "none";
}
