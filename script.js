var obstacle = document.getElementById("obstacle");
var way = document.getElementById("way");
var ball = document.getElementById("ball");
var jump_ = 0;
var counter = 0;

way.addEventListener('animationiteration', () => {
    var random = Math.random() * 3;
    var top = (random * 100) + 180;
    way.style.top = -(top) + "px";
    counter++;
});

setInterval(function() {
    var TopOfTheBall = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    if(jump_ == 0){
        ball.style.top = (TopOfTheBall + 3) + "px";
    }

    var LeftOfObstacle = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var TopOfTheWay = parseInt(window.getComputedStyle(way).getPropertyValue("top"));
    var TopOfTheBall = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var ballTop = -(600-TopOfTheBall);

    if((TopOfTheBall > 570) || ((LeftOfObstacle < 30) && (LeftOfObstacle > -50) && ( (ballTop < TopOfTheWay) || (ballTop > TopOfTheWay + 150) ))) {
        alert("Game Over, Your Score is "+(counter - 1));
        ball.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

function jump(){
    jump_ = 1;
    let CountOfJump = 0;
    var jumpInterval = setInterval(function() {
        var TopOfTheBall = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
        if((TopOfTheBall > 6) && (CountOfJump < 15)){
            ball.style.top = (TopOfTheBall - 5) + "px";
        }
        if(CountOfJump > 20){
            clearInterval(jumpInterval);
            jump_ = 0;
            CountOfJump = 0;
        }
        CountOfJump++;
    }, 10);
};