
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    var xdist = x0-x1;
    var ydist = y0-y1;
    return ((xdist**2) + (ydist**2)) ** (1/2)
};


var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
