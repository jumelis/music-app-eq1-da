/*
? PARA RATON
*/

const propertiesCircle=(element)=>{
     let fillCircle='';
     let strokeWidthCircle='';
     let strokeCircle='';
     let fillOpacityCircle='';
     let circle = element.querySelector("circle");
     element.addEventListener('load',()=>{
          fillCircle=circle.style.fill;
          strokeWidthCircle=circle.style.strokeWidth;
          strokeCircle=circle.style.stroke;
          fillOpacityCircle=circle.style.fillOpacity;
     });
     element.addEventListener('mouseover',()=>{
          circle.style.fill="#fffb00";
          circle.style.strokeWidth='12';
          circle.style.stroke="#1a0425";
          circle.style.fillOpacity='.75';
          circle.classList.toggle('color');
     });
     element.addEventListener('mouseout',()=>{
          circle.style.fill=fillCircle;
          circle.style.strokeWidth=strokeWidthCircle;
          circle.style.stroke=strokeCircle;
          circle.style.fillOpacity=fillOpacityCircle;
          circle.classList.toggle('color');
     });
} 

function addSoundEvent(element) {
     propertiesCircle(element);
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