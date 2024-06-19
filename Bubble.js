var timer = 60; /* Global Variable */ 
var score = 0;
var rn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble(){
    var clutter = "";
    /* Both '' and `` are used to store strings. To attach a dynamic value, we use ''+2+2 and `${2+2}` */
    for(var i = 1; i <= 85; i++)
    {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`; /* If only = is there, then this overwrites/ replaces one value with the other. At the end, it will have only one div. += will add */
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000); // Runs the function every 1 second
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent); // This tells on which bubble we clicked and it's a string without Number()
    if(clickednum == rn)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();