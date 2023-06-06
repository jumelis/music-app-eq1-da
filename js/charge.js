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

let arrCircle=document.querySelectorAll(".circleInt");

const keyCircle = {
     d: 0,
     h: 1,
     j: 2,
     k: 3,
     f: 4,
     l: 5,
     a: 6,
     s: 7
};