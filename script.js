function trigger_dice() {
    document.getElementById('click-event').style.animation="click 0.5s ease-in-out";
    var number1 = dice[Math.floor(Math.random() * 9) + 1]
    var number2 = dice[Math.floor(Math.random() * 9) + 1]
    console.log(number1, number2)
    
}

var dice = {
    1:"\u2680",
    2:"\u2681",
    3:"\u2682",
    4:"\u2683",
    5:"\u2684",
    6:"\u2685",
    7:"\u2686",
    8:"\u2687",
    9:"\u2688",
}