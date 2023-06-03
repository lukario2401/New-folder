let img = document.getElementById('img');
let kmg = document.getElementById('kmg');
let info = document.getElementById('info');
let mode = 1;
function fun(){
    if(mode==1){
        img.src="infected.png";
        kmg.src="asthma.png";
        info.style.display="block";
        mode=0;
    }else{
        img.src="bio.png"
        kmg.src="";
        info.style.display="none";
        mode=1;
    }
    
}