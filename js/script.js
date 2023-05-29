
const sonido = {
        a: './media/audio/bombo (1).wav',
        s: './media/audio/crash.wav',
        d: './media/audio/hit-hat.wav',
        f: './media/audio/redoblante.wav',
        j: './media/audio/tom1.wav',
        k: './media/audio/tom2.wav',
        l: './media/audio/tom3.wav',
        ñ: './media/audio/tom4.wav'
};

let bombo__1_map=document.getElementById('bombo__1_map');
let crash_map=document.getElementById('crash_map');
let hitHat_map=document.getElementById('hitHat_map');
let redoblante_map=document.getElementById('redoblante_map');
let tom1_map=document.getElementById('tom1_map');
let tom2_map=document.getElementById('tom2_map');
let tom3_map=document.getElementById('tom3_map');
let tom4_map=document.getElementById('tom4_map');

function reproducirSonido(fuente) {
        let audio = new Audio(fuente);
        audio.play();
} 

document.addEventListener('keydown',(e)=>{
        const tecla = e.key.toLowerCase();
        if(sonido[tecla]){
                reproducirSonido(sonido[tecla]);
        }
});

  //con boton//
function agregarEvento(elemento) {
        elemento.addEventListener('click', () => {
                let letra = elemento.getAttribute('title');
                reproducirSonido(sonido[letra]);
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
