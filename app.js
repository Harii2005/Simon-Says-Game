let gamseq = [];
let userseq = [];
let level = 0 ; 
let start = false;
let btns = [ "yellow"  ,  "green"  , "purple"  , "red"];
let score = 0;


let h2 = document.querySelector('h2');
let highscore = document.querySelector('.highScore');
highscore.innerText = ` High Score :  ${score}`;


// let btn = document.querySelector('.btn');
document.addEventListener("keypress" , function(){
    if(start == false){
        console.log(`level : ${level}`);
        start = true;
        levelup();
    }
});
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level : ${level}`; 
    let randomindex = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomindex];
    let randombnt   = document.querySelector(`.${randomcolor}`);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(randombnt);
    gamseq.push(randomcolor);
    console.log("game sequence:", gamseq);
    btnflash(randombnt);

}


function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}


function btnpress(){
    console.log(this);
    let pressedbtn = this ; 
    userflash(pressedbtn);
    let userpress = pressedbtn.getAttribute("id");
    userseq.push(userpress);
    console.log("user sequence:", userseq);
    checkans(userseq.length-1);

}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}

function checkans(idx){
    if(gamseq[idx]===userseq[idx]){
        // console.log("same value");
        if(userseq.length === gamseq.length){
            setTimeout(levelup , 1000);
        }
    }else{
        console.log("game over");

        h2.innerHTML = `GAME OVER your score was <b>${level}<b><br> press any key to start try again`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor="white";
        },250);
        if(level>score){
            score = level;
            highscore.innerText = `High Score :  ${score}`;   
        }

        reset();
    }
}

function reset(){
    gamseq = [];
    userseq = [];
    level = 0 ; 
    start = false;
}