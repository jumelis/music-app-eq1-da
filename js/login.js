function sendForm() {
  let userName = document.getElementById("typeUserX").value;
  if (userName.length > 0) {
    window.location.href = "../index.html?param-name=" + userName;
  } else {
  alert ("Por Favor llene los campos correspondientes")
}
}

function redirectHome() {
 window.location.href = "../index.html";
}