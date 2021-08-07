let cursor=document.querySelector('.cursor');
let btn=document.querySelector("button");
let score=0;
let gunSound=document.querySelector(".gunSound");
let wninner=document.querySelector(".wninner");
let laugh=document.querySelector(".laugh");

btn.addEventListener("click",()=>{
    contener.appendChild(terrorist)
    setInterval(()=>{
        laugh.play()
    },5000)
});

window.addEventListener("mousemove",(e)=>{
    cursor.style.top= e.pageY +"px";
    cursor.style.left= e.pageX +"px";
})
let blood=document.querySelector(".blood");

window.addEventListener("click",(e)=>{
    blood.style.top= e.pageY +"px";
    blood.style.left= e.pageX +"px";
    gunSound.play();
    // gunSound.pause();
})

const terrorist=document.createElement("img","terrorist")
terrorist.setAttribute("class","terrorist")
terrorist.setAttribute("src","clipart.png")

const  contener=document.querySelector(".min")

const conteNerHight=contener.offsetHeight;
const conteNerWidth=contener.offsetWidth;

let Spreed=1300;

setInterval(()=>{
    const randomTop= Math.random()*(conteNerHight-100);
    const randomLeft= Math.random()*(conteNerWidth-100);
    
    // terrorist.style.position="absolute"
    terrorist.style.top=randomTop +"px";
    terrorist.style.left=randomLeft +"px";
},Spreed)


terrorist.onclick=function(){
    score++
     // console.log(score);
    btn.innerHTML=`SCORE:${score}/10`;
    if(score>=10){
        btn.innerHTML="wine";
        score=0;
        wninner.play();
        terrorist.style.display="none"
        btn.addEventListener('click',()=>{
            btn.innerHTML=`SCORE:${score}/10`;
            // wninner.pause()
            terrorist.style.display="block"
        })
    }
}

let preloder=document.querySelector(".preloder");
window.addEventListener("load",()=>{
    preloder.style.display="none";
})