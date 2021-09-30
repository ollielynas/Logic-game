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

ele = document.getElementById("bg");

ele.addEventListener('mousedown', function (e) {
    // Get the target
    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    window.x = e.clientX - rect.left;
    window.y = e.clientY - rect.top;
    console.log(window.x,y)
});

let root = document.documentElement;

root.addEventListener("mousemove", e => {
    var rect = document.getElementById('bg').getBoundingClientRect(); 
if (document.body.matches(":active")) {
  root.style.setProperty('--mouse-x', e.clientX - window.x + "px");
  root.style.setProperty('--mouse-y', e.clientY - window.y + "px");

  
  
}
});

window.addEventListener( 'load', function() {
    var box = document.getElementById('bg'),
        docHeight = document.documentElement.offsetHeight;
    
    window.addEventListener( 'scroll', function() {
          // normalize scroll position as percentage
      var scrolled = window.scrollY / ( docHeight - window.innerHeight ),
          transformValue = 'scale('+scrolled+')';
  
      box.style.WebkitTransform = transformValue;
      box.style.MozTransform = transformValue;
      box.style.OTransform = transformValue;
      box.style.transform = transformValue;
      
    }, false);
    
  }, false);