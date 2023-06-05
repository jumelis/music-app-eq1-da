/*
! PARA LAS TECLAS
*/
const propertiesKeyCircle=(element)=>{
     let keySound = '';
     let circle = arrCircle[element];
     let fillCircle=circle.style.fill;
     let strokeWidthCircle=circle.style.strokeWidth;'';
     let strokeCircle=circle.style.stroke;
     let fillOpacityCircle=circle.style.fillOpacity;
     document.addEventListener('keypress',(e)=>{
               keySound=e.key.toLowerCase();
               if (keySound===circle.getAttribute('title')){;
                    circle.classList.toggle('color');
                    circle.style.fill="#fffb00";
                    circle.style.strokeWidth='12';
                    circle.style.stroke="#1a0425";
                    circle.style.fillOpacity='.75';
               }
     });
     document.addEventListener('keyup',(e)=>{
               keySound=e.key.toLowerCase();
               if (keySound===circle.getAttribute('title')){
                    circle.classList.toggle('color');
                    circle.style.fill=fillCircle;
                    circle.style.strokeWidth=strokeWidthCircle;
                    circle.style.stroke=strokeCircle;
                    circle.style.fillOpacity=fillOpacityCircle;
               }
     });
     document.addEventListener('keydown',(e)=>{
          keySound=e.key.toLowerCase();
          if (keySound===circle.getAttribute('title')){
               circle.classList.toggle('color');
               circle.style.fill=fillCircle;
               circle.style.strokeWidth=strokeWidthCircle;
               circle.style.stroke=strokeCircle;
               circle.style.fillOpacity=fillOpacityCircle;
          }
});
} 