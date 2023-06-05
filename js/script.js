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
        let urlWithParamUserName = window.location.search; 
        let params = new URLSearchParams(urlWithParamUserName); 
        let userName = params.get('param-name');
      
        if (userName != null) { 
              document.getElementById("loginItem").style.display = "none";
              let navItemActiveUser = document.getElementById("activeUser"); 
              navItemActiveUser.textContent = userName;
              navItemActiveUser.style.display = "block";
        }
      }