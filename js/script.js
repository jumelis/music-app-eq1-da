const playSound=(element)=>{
        let audio = new Audio(element);
        audio.play();
}

document.addEventListener('keypress',(e)=>{
        const keySound = e.key.toLowerCase();
        if(sound[keySound]){
                playSound(sound[keySound]);
                propertiesKeyCircle(keyCircle[keySound]);
        }
});

function checkUser() {
        // obtener la url completa del navegador
        let urlWithParamUserName = window.location.search; 
        // saca de la url todos los parametros con sus respectivos valores
        // URLSearchParams ignora todo lo que está detras del signo de interrogación (?)
        let params = new URLSearchParams(urlWithParamUserName); 
        // obtiene el valor del parametro param-name que llega en la url 
        let userName = params.get('param-name');
      
        if (userName != null) { // si userName es distinto de null se ejecuta
              // ocultamos el item Login
              document.getElementById("loginItem").style.display = "none";// etiqueta <a>
              // obtenemos el item activeUser
              let navItemActiveUser = document.getElementById("activeUser"); // etiqueta <a>
              // incorpora el texto (nombre del usuario) al item activeUser
              navItemActiveUser.textContent = userName;
              // muestro el item activeUser
              navItemActiveUser.style.display = "block";
        }
      }