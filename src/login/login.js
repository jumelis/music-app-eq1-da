function send_form() {
  user_name = document.getElementById("typeUserX").value;
  window.location.href = "../../index.html?username=" + user_name;
}
