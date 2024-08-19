// Ensure footer adjusts based on window size
if (window.innerWidth < window.innerHeight) {
  document.getElementById("footer").style.backgroundColor = "lightblue";
} else if (window.innerWidth > window.innerHeight) {
  document.getElementById("contact").style.padding = "30px";
  document.getElementById("footer").style.backgroundColor = "pink";
  document.getElementById("footerText").style.marginLeft = "30%";
  document.getElementById("footer").style.height = "7%";
}
