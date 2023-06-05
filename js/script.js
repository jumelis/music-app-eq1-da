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