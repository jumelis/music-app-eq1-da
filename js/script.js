
const sound = {
        a: './media/audio/bombo (1).wav',
        d: './media/audio/crash.wav',
        f: './media/audio/hit-hat.wav',
        s: './media/audio/redoblante.wav',
        h: './media/audio/tom1.wav',
        j: './media/audio/tom2.wav',
        k: './media/audio/tom3.wav',
        l: './media/audio/tom4.wav'
};

let bombo__1_map=document.getElementById('bombo__1_map');
let crash_map=document.getElementById('crash_map');
let hitHat_map=document.getElementById('hitHat_map');
let redoblante_map=document.getElementById('redoblante_map');
let tom1_map=document.getElementById('tom1_map');
let tom2_map=document.getElementById('tom2_map');
let tom3_map=document.getElementById('tom3_map');
let tom4_map=document.getElementById('tom4_map');

function playSound(element) {
        let audio = new Audio(element);
        audio.play();
} 

document.addEventListener('keydown',(e)=>{
        const keySound = e.key.toLowerCase();
        if(sound[keySound]){
                playSound(sound[keySound]);
        }
});

  //con boton//
function addSoundEvent(element) {
        element.addEventListener('click', () => {
                let letter = element.getAttribute('title');
                playSound(sound[letter]);
        });
}

addSoundEvent(bombo__1_map);
addSoundEvent(crash_map);
addSoundEvent(hitHat_map);
addSoundEvent(redoblante_map);
addSoundEvent(tom1_map);
addSoundEvent(tom2_map);
addSoundEvent(tom3_map);
addSoundEvent(tom4_map);

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