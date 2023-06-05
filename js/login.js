function sendForm() {
  //toma la informacion que fue agregada por el usuario en el imput username desde el HTML y lo guarda en la variable userName
  let userName = document.getElementById("typeUserX").value;
  //la propiedad window.location.href se usa para redireccionar la pagina a una url construida para simular el flujo normal de una web
  if (userName.length > 0) {
    //adicional a esto le agrega al string param-name que sera igual a la variable nombre de usuario
    window.location.href = "../index.html?param-name=" + userName;
  } else {
  alert ("Por Favor llene los campos correspondientes")
}
}
// cuando se hace click sobre la imagen con la propiedad window.location.href
//se redirecciona la pagina web al index.html (pagina principal)
function redirectHome() {
  //los ../ son para salir de un directorio, cada ../ es un nivel
 window.location.href = "../index.html";
}