// change image on home page depending on screen size //
if (window.innerWidth < window.innerHeight) {
  document.getElementById("checkSize").style.width = "200px";
  document.getElementById("checkSize").style.height = "200px";
  document.getElementById("checkSize").style.marginLeft = "65px";
}
else if (window.innerWidth > window.innerHeight) {
  document.getElementById("checkSize").style.width = "275px";
  document.getElementById("checkSize").style.height = "275px";
  document.getElementById("checkSize").style.marginLeft = "50px";
  document.getElementById("small").style.width = "65%";
}