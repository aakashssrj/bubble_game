//1. What is DOM
//2. 4 pillars of DOM
//3. Simple example of bulb oe whatever clicking on the same button
// 4. Muliple Events
// 5.Selecting multiple Element at a same time
// 6.setTimeout
// 7.setInterval
// 8.Future projects
// var a = document.querySelector(".bulb")
// var b = document.querySelector("button")
// var flag = 0
// b.addEventListener("click", function () {
//     if (flag == 0) {
//         b.innerHTML = "ON"
//         a.style.backgroundColor = "Yellow "
//         console.log("Clicked")
//         flag = 1
        
//     }
//     else {
//         b.innerHTML = "OFF"
//         a.style.backgroundColor = "transparent"
//         console.log("Again Click")
//         flag = 0
//     }
// })



// Project
var timer = 60;
var score = 0;
var hiteval= 0;





function scoremarked() {
    document.querySelector("#score_marker").textContent = score;
    score += 10;

}
function makingbubbles() {
    var clutter = "";

    for (var i = 0; i <= 59; i++){
        var rn = Math.floor(Math.random() *10)
        
        clutter += `<div class="bubbles">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;        
}
function Timer() {
    // setInterval(function(){},1000); --> setInterval syntax in Javascript
    var timerint = setInterval(function () {
        if(timer > 0 ){ 
            timer--;
            document.querySelector("#Timer").textContent = timer
        }
        else {
            // in order to close the setinterval and optimize the space complexity
            clearInterval(timerint) 
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}
function getHit() {
    var hiteval = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hiteval;
}

document.querySelector("#pbtm").addEventListener("click", function (det) {
    var clickednumber = Number(det.target.textContent);
    if (clickednumber === hiteval) {
        scoremarked();
        makingbubbles();
        getHit();
    }
    else {
        makingbubbles();
        getHit();

    }
})
//1. What is DOM
//2. 4 pillars of DOM
//3. Simple example of bulb oe whatever clicking on the same button
// 4. Muliple Events
// 5.Selecting multiple Element at a same time
// 6.setTimeout
// 7.setInterval
// 8.Future projects
// var a = document.querySelector(".bulb")
// var b = document.querySelector("button")
// var flag = 0
// b.addEventListener("click", function () {
//     if (flag == 0) {
//         b.innerHTML = "ON"
//         a.style.backgroundColor = "Yellow "
//         console.log("Clicked")
//         flag = 1
        
//     }
//     else {
//         b.innerHTML = "OFF"
//         a.style.backgroundColor = "transparent"
//         console.log("Again Click")
//         flag = 0
//     }
// })



// Project
var timer = 60;
var score = 0;
var hiteval= 0;





function scoremarked() {
    document.querySelector("#score_marker").textContent = score;
    score += 10;

}
function makingbubbles() {
    var clutter = "";

    for (var i = 0; i <= 59; i++){
        var rn = Math.floor(Math.random() *10)
        
        clutter += `<div class="bubbles">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;        
}
function Timer() {
    // setInterval(function(){},1000); --> setInterval syntax in Javascript
    var timerint = setInterval(function () {
        if(timer > 0 ){ 
            timer--;
            document.querySelector("#Timer").textContent = timer
        }
        else {
            // in order to close the setinterval and optimize the space complexity
            clearInterval(timerint) 
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}
function getHit() {
    hiteval = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hiteval;
}

document.querySelector("#pbtm").addEventListener("click", function (det) {
    var clickednumber = console.log(Number(det.target.textContent));
    if (clickednumber === hiteval) {
        scoremarked();
        makingbubbles();
        getHit();
    }
    else {
        makingbubbles();
        getHit();

    }
})
scoremarked();
Timer();
makingbubbles();
getHit();








