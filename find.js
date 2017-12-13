
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

console.log( "target x: " + targetX );
console.log( "target y: " + targetY );
//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var xdist = x0-x1;
    var ydist = y0-y1;
    //console.log(xdist);
    //console.log(xdist);
    return Math.sqrt((xdist*xdist) + (ydist*ydist));
};


var findIt = function (e) {
    //var event = window.event;
    var x = e.clientX;
    var y = e.clientY;
    var dist = distance(x,y,targetX,targetY);
    if(dist < 20){
	document.write("MOOOOOOO!!!!!!!!!!!!!");
	return;
    }
    console.log("DIST: " + dist);
    console.log("X: " + x);
    console.log("Y: " + y);
    //console.log(x);
    //console.log(y);
    //console.log(dist%255);
    var d = (dist / 5) % 255;
    changeColor(255 - d);
};

//chooses a color and changes to it based i=on increments of distances (50 px)
var changeColor = function( dist ){
    var color = (`rgb(${dist}, 0, ${dist})`);
    console.log(color);
    document.body.style.backgroundColor = color;
};

/*
  your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
