function sendForm() {
  let userName = document.getElementById("typeUserX").value;
  window.location.href = "../../index.html?param-name=" + userName;
}


function redirectHome() {
 window.location.href = "../../index.html";
}