function enterSite(){
document.querySelector(".landing").style.display="none";
document.getElementById("main").classList.remove("hidden");
calcDays();
}

function toggleMusic(){
let m=document.getElementById("music");
if(m.paused){m.play();}else{m.pause();}
}

function calcDays(){
let start=new Date("2026-01-02");
let now=new Date();
let diff=Math.floor((now-start)/(1000*60*60*24));
document.getElementById("days").innerText=diff;
}

function right(btn){
btn.style.background="green";
hearts();
}

function wrong(btn){
btn.style.background="black";
btn.innerText="TRY AGAIN 😌";
}

function bigLove(){
document.getElementById("final").classList.remove("hidden");
hearts(40);
}

function hearts(n=15){
for(let i=0;i<n;i++){
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="100vh";
h.style.fontSize="24px";
document.body.appendChild(h);

let t=setInterval(()=>{
h.style.top=(parseFloat(h.style.top)-2)+"vh";
if(parseFloat(h.style.top)<0){clearInterval(t);h.remove();}
},20);
}
}
