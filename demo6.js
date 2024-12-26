function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
  document.getElementById("mobileMenu").classList.toggle("flex");
}

function moveCursor(cursorInfo) {
  document.getElementById("cursor").style.left = cursorInfo.clientX;
  document.getElementById("cursor").style.top = cursorInfo.clientY;
}