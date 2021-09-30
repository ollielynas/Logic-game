console.log("js is working")

var eleNum = 0;
var nodeNum = 0;

function addAndGate() {
    window.placeIcon = "and";
    console.log(window.placeIcon);
    document.getElementById("and-icon").style.transform = window.scale
}

ele = document.getElementById("bg");

ele.addEventListener("mousedown", function (e) {
  // Get the target
  const target = e.target;

  // Get the bounding rectangle of target
  const rect = target.getBoundingClientRect();

  if (e.which === 3) {
    
    
    // ANCHOR add gate to window (top)
    
    if (window.placeIcon != "") {
    if (window.placeIcon == "and") {
        eleNum += 1
        const newDiv = document.createElement("and-"+eleNum);
        console.log("created element", "and-"+eleNum)

        const newContent = document.getElementById("and").cloneNode(true);

        const andInputOne = document.createElement("button");
        nodeNum += 1;
        andInputOne.innerHTML = "";
        andInputOne.id ='node'+nodeNum;
        andInputOne.onclick = "nodeIn("+nodeNum+")";
        andInputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        andInputOne.style.backgroundColor = "black";
        andInputOne.style.borderRadius = "100%";
        andInputOne.style.position = "absolute";
        andInputOne.style.left = "-0%";
        andInputOne.style.top = "25%";
        andInputOne.style.transform = "translate(-50%, -0%)";
        ;
        nodeNum += 1;
        const andInputtwo = document.createElement("button");
        andInputtwo.innerHTML = "";
        andInputtwo.id ='node'+nodeNum;
        andInputtwo.onclick = "nodeIn("+nodeNum+")";
        andInputtwo.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        andInputtwo.style.backgroundColor = "black";
        andInputtwo.style.borderRadius = "100%";
        andInputtwo.style.position = "absolute";
        andInputtwo.style.left = "-0%";
        andInputtwo.style.bottom = "25%";
        andInputtwo.style.transform = "translate(-50%, -0%)";
        nodeNum += 1;
        const andOutputOne = document.createElement("button");
        andOutputOne.innerHTML = "";
        andOutputOne.id ='node'+nodeNum;
        andOutputOne.onclick = "nodeIn("+nodeNum+")";
        andOutputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        andOutputOne.style.backgroundColor = "black";
        andOutputOne.style.borderRadius = "100%";
        andOutputOne.style.position = "absolute";
        andOutputOne.style.right = "-0%";
        andOutputOne.style.bottom = "50%";
        andOutputOne.style.transform = "translate( 50%, -0%)";



        newContent.appendChild(andOutputOne);
        newContent.appendChild(andInputOne);
        newContent.appendChild(andInputtwo);
        newDiv.appendChild(newContent);
newContent.style.transform = "scale(0.4)"


        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.getElementById("content").insertBefore(newDiv, currentDiv);
        var rectContent = document.getElementById("bg").getBoundingClientRect();
        
        var andWidth = document.getElementById('and-icon').offsetWidth;
        var andHeight = document.getElementById('and-icon').offsetHeight;

        newContent.style.position = "absolute";
        newContent.style.left = e.clientX - rectContent.left - andWidth/2 +"px";
        newContent.style.top = e.clientY - rectContent.top - andHeight/2 +"px";
        newContent.setAttribute('onclick',  '');
        
    }else if (window.placeIcon == "or") {
        eleNum += 1
        const newDiv = document.createElement("or-"+eleNum);
        console.log("created element", "or-"+eleNum)

        const newContent = document.getElementById("or").cloneNode(true);

        const orInputOne = document.createElement("button");
        nodeNum += 1;
        orInputOne.innerHTML = "";
        orInputOne.id ='node'+nodeNum;
        orInputOne.onclick = "nodeIn("+nodeNum+")";
        orInputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        orInputOne.style.backgroundColor = "black";
        orInputOne.style.borderRadius = "100%";
        orInputOne.style.position = "absolute";
        orInputOne.style.left = "-0%";
        orInputOne.style.top = "25%";
        orInputOne.style.transform = "translate(-50%, -0%)";
        nodeNum += 1;
        const orInputtwo = document.createElement("button");
        orInputtwo.innerHTML = "";
        orInputtwo.id ='node'+nodeNum;
        orInputtwo.onclick = "nodeIn("+nodeNum+")";
        orInputtwo.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        orInputtwo.style.backgroundColor = "black";
        orInputtwo.style.borderRadius = "100%";
        orInputtwo.style.position = "absolute";
        orInputtwo.style.left = "-0%";
        orInputtwo.style.bottom = "25%";
        orInputtwo.style.transform = "translate(-50%, -0%)";
        nodeNum += 1;
        const orOutputOne = document.createElement("button");
        orOutputOne.innerHTML = "";
        orOutputOne.id ='node'+nodeNum;
        orOutputOne.onclick = "nodeIn("+nodeNum+")";
        orOutputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        orOutputOne.style.backgroundColor = "black";
        orOutputOne.style.borderRadius = "100%";
        orOutputOne.style.position = "absolute";
        orOutputOne.style.right = "-0%";
        orOutputOne.style.bottom = "50%";
        orOutputOne.style.transform = "translate( 50%, -0%)";


        newContent.style.transform = "scale(0.4)"
        newContent.appendChild(orOutputOne);
        newContent.appendChild(orInputOne);
        newContent.appendChild(orInputtwo);
        newDiv.appendChild(newContent);



        // add the newly created element or its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.getElementById("content").insertBefore(newDiv, currentDiv);
        var rectContent = document.getElementById("bg").getBoundingClientRect();
        
        var orWidth = document.getElementById('or-icon').offsetWidth;
        var orHeight = document.getElementById('or-icon').offsetHeight;

        newContent.style.position = "absolute";
        newContent.style.left = e.clientX - rectContent.left - orWidth/2 +"px";
        newContent.style.top = e.clientY - rectContent.top - orHeight/2 +"px";
        newContent.setAttribute('onclick',  '');
        
    }else if (window.placeIcon == "nor") {
        eleNum += 1
        const newDiv = document.createElement("nor-"+eleNum);
        console.log("created element", "nor-"+eleNum)

        const newContent = document.getElementById("nor").cloneNode(true);

        const norInputOne = document.createElement("button");
        nodeNum += 1;
        norInputOne.innerHTML = "";
        norInputOne.id ='node'+nodeNum;
        norInputOne.onclick = "nodeIn("+nodeNum+")";
        norInputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        norInputOne.style.backgroundColor = "black";
        norInputOne.style.borderRadius = "100%";
        norInputOne.style.position = "absolute";
        norInputOne.style.left = "-0%";
        norInputOne.style.top = "25%";
        norInputOne.style.transform = "translate(-50%, -0%)";
        nodeNum += 1;
        const norInputtwo = document.createElement("button");
        norInputtwo.innerHTML = "";
        norInputtwo.id ='node'+nodeNum;
        norInputtwo.onclick = "nodeIn("+nodeNum+")";
        norInputtwo.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        norInputtwo.style.backgroundColor = "black";
        norInputtwo.style.borderRadius = "100%";
        norInputtwo.style.position = "absolute";
        norInputtwo.style.left = "-0%";
        norInputtwo.style.bottom = "25%";
        norInputtwo.style.transform = "translate(-50%, -0%)";
        nodeNum += 1;
        const norOutputOne = document.createElement("button");
        norOutputOne.innerHTML = "";
        norOutputOne.id ='node'+nodeNum;
        norOutputOne.onclick = "nodeIn("+nodeNum+")";
        norOutputOne.setAttribute('onclick',   "nodeIn("+nodeNum+")");
        norOutputOne.style.backgroundColor = "black";
        norOutputOne.style.borderRadius = "100%";
        norOutputOne.style.position = "absolute";
        norOutputOne.style.right = "-0%";
        norOutputOne.style.bottom = "50%";
        norOutputOne.style.transform = "translate( 50%, -0%)";



        newContent.appendChild(norOutputOne);
        newContent.appendChild(norInputOne);
        newContent.appendChild(norInputtwo);
        newDiv.appendChild(newContent);

        

        // add the newly created element or its content into the DOM
        const currentDiv = document.getElementById("div1");
        document.getElementById("content").insertBefore(newDiv, currentDiv);
        var rectContent = document.getElementById("bg").getBoundingClientRect();
        newContent.style.transform = "scale(0.4)"
        var orWidth = document.getElementById('or-icon').offsetWidth;
        var orHeight = document.getElementById('or-icon').offsetHeight;

        newContent.style.position = "absolute";
        newContent.style.left = e.clientX - rectContent.left - orWidth/2 +"px";
        newContent.style.top = e.clientY - rectContent.top - orHeight/2 +"px";
        newContent.setAttribute('onclick',  '');
        
    }
  }    window.placeIcon = "";

      // ANCHOR add gate to window (bottom)
    root.style.setProperty('--x-and', "-2000px");
    root.style.setProperty('--y-and', "-2000px");
    root.style.setProperty('--x-or', "-2000px");
    root.style.setProperty('--y-or', "-2000px");
    root.style.setProperty('--x-nor', "-2000px");
    root.style.setProperty('--y-nor', "-2000px");
}
  
  // Mouse position
  window.x = e.clientX - rect.left;
  window.y = e.clientY - rect.top;
});

let root = document.documentElement;
const elementTools = document.getElementById("tools");

root.addEventListener("mousemove", (e) => {
  var rect = document.getElementById("bg").getBoundingClientRect();
  if (window.placeIcon == "and") {
    var andWidth = document.getElementById('and-icon').offsetWidth;
    var andHeight = document.getElementById('and-icon').offsetHeight;
    root.style.setProperty('--x-and', e.clientX - andWidth/2 + "px");
    root.style.setProperty('--y-and', e.clientY - andHeight/2 + "px");

}else if (window.placeIcon == "or") {
    var andWidth = document.getElementById('or-icon').offsetWidth;
    var andHeight = document.getElementById('or-icon').offsetHeight;
    root.style.setProperty('--x-or', e.clientX - andWidth/2 + "px");
    root.style.setProperty('--y-or', e.clientY - andHeight/2 + "px");

}else if (window.placeIcon == "nor") {
    var andWidth = document.getElementById('nor-icon').offsetWidth;
    var andHeight = document.getElementById('nor-icon').offsetHeight;
    root.style.setProperty('--x-nor', e.clientX - andWidth/2 + "px");
    root.style.setProperty('--y-nor', e.clientY - andHeight/2 + "px");

}
  if (document.body.matches(":active")) {
    const style = getComputedStyle(elementTools);
    if (style.left != "0px") {
      root.style.setProperty("--mouse-x", e.clientX - window.x + "px");
      root.style.setProperty("--mouse-y", e.clientY - window.y + "px");
    }
    
  }
});

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.0005;

  // Restrict scale
  scale = Math.min(Math.max(0.6, scale), 4);
  if (scale > 1.5) scale += event.deltaY * -0.001;

  window.scale = `scale(${(scale/4)})`;
  document.getElementById("and-icon").style.transform = window.scale
  document.getElementById("or-icon").style.transform = window.scale
  document.getElementById("nor-icon").style.transform = window.scale
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.getElementById("content");
document.getElementById("bg").onwheel = zoom;



const noRightClick = document.body;

noRightClick.addEventListener("contextmenu", e => e.preventDefault());


function nodeIn(nodeNumber) {
    
    console.log(nodeNumber)
}

// ANCHOR add gate functions

function addOrGate() {
    window.placeIcon = "or";
    console.log(window.placeIcon);
    document.getElementById("or-icon").style.transform = window.scale
}

function addNorGate() {
    window.placeIcon = "nor";
    console.log(window.placeIcon);
    document.getElementById("nor-icon").style.transform = window.scale
}


//const noRightClick = document.body;

noRightClick.addEventListener("contextmenu", e => e.preventDefault());


function nodeIn(nodeNumber) {
    
    console.log(nodeNumber)
}

console.log("loaded js")