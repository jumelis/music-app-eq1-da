
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

agregarEvento(bombo__1_map);
agregarEvento(crash_map);
agregarEvento(hitHat_map);
agregarEvento(redoblante_map);
agregarEvento(tom1_map);
agregarEvento(tom2_map);
agregarEvento(tom3_map);
agregarEvento(tom4_map);

function check_user() {
  const params = new URLSearchParams(window.location.search);
  const user_name = params.get('username');
  if (user_name == '') {
    alert('Usuario no logeado');
  } else {
    alert('Bienvenido ' + user_name + '!!');
  }
}

