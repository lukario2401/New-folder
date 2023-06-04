let img = document.getElementById('img');
let kmg = document.getElementById('kmg');
let info = document.getElementById('info');
let but = document.getElementById('but');
let astxt = document.getElementById('astxt');
let notxt = document.getElementById('notxt');
let mode = 1;
but.style.backgroundColor="green";
function fun(){
    if(mode==1){
        img.src="infected.png";
        kmg.src="asthma.png";
        info.style.display="block";
        mode=0;
        but.innerHTML= `<h3>view normal </h2>`;
        but.style.backgroundColor="red";
        astxt.style.display="block";
        notxt.style.display="block";
    }else{
        img.src="bio.png"
        kmg.src="";
        info.style.display="none";
        mode=1;
        but.innerHTML= `<h3>view asthma</h2>`;
        but.style.backgroundColor="green";
        astxt.style.display="none";
        notxt.style.display="none";
    }
    
}