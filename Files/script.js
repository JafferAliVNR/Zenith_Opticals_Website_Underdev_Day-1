console.log("Hello");

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  console.log("Hello");
}
else {
  document.getElementById("Title").style.left = "500px";
}
