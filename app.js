
let start=document.getElementById('restart');
let tutorial=document.getElementById("tutorial");
let glowedbtns=[];
let currentstep=0;
let scoreDisplay=document.getElementById('score');
let score=0;


start.addEventListener('click',function(){
    tutorial.style.visibility="hidden";
    this.style.visibility="hidden";
    scoreDisplay.innerText="score:0"
    score=0;
    let boxID=randomBox();
    glow(boxID);
    glowedbtns.push(boxID);
});


let btns=document.querySelectorAll('.btn');
// btns.forEach(btn =>{ 
//     btn.addEventListener('click', function(){

    //         for(let i=0;i<glowedbtns.length;i++){
    //             if(btn.id !==glowedbtns[i]){
                
    //             console.log("game over");

    //             }
    //         else if(i==glowedbtns.length-1 && btn.id==glowedbtns[i]){
    //             let boxID=randomBox();
    //             glow(boxID);
    //             glowedbtns.push(boxID);
    //         }

    //         else if(btn.id==glowedbtns[i]){
    //             continue;
    //         }
            
            
            
            // else{
            //         let newboxID=randomBox();
            //         glow(newboxID);
            //         correctbtn.push(newboxID);
            //         // currentstep=0;                   

            // }
            //}
            // score++;
            // let newboxID=randomBox();
            // glow(newboxID);
            // correctbtn.push(newboxID);

        //})
        

    //});


function glow(boxID){
    let box = document.getElementById(boxID);
    box.classList.add("highlight");
    setTimeout(() => {
        box.classList.remove("highlight");
    }, 500);   
}

function randomBox(){
    let box="box"+Math.floor((Math.random()*4)+1);
    return box;
}


btns.forEach(btn => { 
    btn.addEventListener('click', function () {
        
        
        if (btn.id !== glowedbtns[currentstep]) {
            console.log("Game Over");
            scoreDisplay.innerText="Your score was :" + score;
            start.style.visibility = "visible";
            tutorial.style.visibility="visible";
            glowedbtns = []; 
            currentstep = 0;
            score=0;
            return;
        }

        currentstep++; 

        if (currentstep === glowedbtns.length) {
            score++;
            scoreDisplay.innerText="score:" + score;
            let boxID = randomBox();
            glow(boxID);
            glowedbtns.push(boxID);
            currentstep = 0; 
        }
    });
});





tutorial.addEventListener('click', function(){
    tutorial.innerText="Click Start Game, and a button will glow. Watch as new colors are added each round. Click the buttons in the exact order they glowed. Each correct round increases your score. A wrong click ends the game. Try to beat your best score!"
})
