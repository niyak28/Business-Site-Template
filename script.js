// change image on home page depending on screen size //
if (window.innerWidth < window.innerHeight) {
  document.getElementById("checkSize").style.width = "200px";
  document.getElementById("checkSize").style.height = "fit-content";
  document.getElementById("checkSize").style.marginLeft = "65px";
}
else if (window.innerWidth > window.innerHeight) {
  document.getElementById("checkSize").style.width = "275px";
  document.getElementById("checkSize").style.height = "fit-content";
  document.getElementById("checkSize").style.marginLeft = "120px";
  document.getElementById("small").style.width = "65%";
  document.getElementById("footerText").style.marginLeft = "30%";
  document.getElementById("footer").style.height = "7%";
  document.getElementById("footer").style.backgroundColor = "pink";
}