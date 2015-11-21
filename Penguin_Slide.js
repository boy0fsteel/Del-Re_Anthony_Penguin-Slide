<!DOCTYPE html>
<html>
<style>  
body {
 font-family: Verdana, Helvetica, sans-serif;
}
canvas {
 border: 1px solid black;
 background-color: rgb(102,255,255);
}

.penguin {
	color: "FF0000";
	width: 30;
	height: 50;
}
</style>
<body>

<canvas id="myCanvas" width="600" height="500">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>
var penguin;
var beak;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.clearRect(0,0,canvas.width,canvas.height);
	/*ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();*/

	var centerY = 250;
	var centerX = -10;
	var width = 80;
	var height = 130;
	//var width = 200;
	//var height = 80;
   ctx.fillStyle = "black";

setInterval(draw,10);

 ctx.fillStyle = "black";

function move(){
	if(centerX<350){
	centerX= centerX+2;
	}
	else if (centerX>=350 && centerX<610){
		
		centerX= centerX+5;
		centerY= centerY+5;
	}
	else{
		centerX= -10;
		centerY = 250;
	}
}
function draw(){
	ctx.clearRect(0,0, 900,900);
	
	if(centerX<350){
	ctx.fillStyle = "black";
	ctx.beginPath();
	
	ctx.moveTo(centerX, centerY - height/2); // A1
  
    ctx.bezierCurveTo(
    centerX + width/2, centerY - height/2, // C1
    centerX + width/2, centerY + height/2, // C2
    centerX, centerY + height/2); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/2, centerY + height/2, // C3
    centerX - width/2, centerY - height/2, // C4
    centerX, centerY - height/2); // A1
 	ctx.closePath();
  	ctx.fill();
  	move();
	drawTummy();
	drawBeak();	
	}
	else{
	ctx.fillStyle = "black";
	ctx.beginPath();
	
	ctx.moveTo(centerX-30, centerY - height/2); // A1
  
    ctx.bezierCurveTo(
    centerX + width/2+20 , centerY - height/2, // C1
    centerX + width/2+20, centerY + height/2, // C2
    centerX+30, centerY + height/2); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/2+20, centerY + height/2, // C3
    centerX - width/2+20, centerY - height/2, // C4
    centerX-30, centerY - height/2); // A1
 	ctx.closePath();
  	ctx.fill();
	  	move();
		drawTummy();
		drawBeak();	
	}
	drawB();
	

}
function drawTummy(){
	

	ctx.fillStyle = "white";
	ctx.beginPath();
	
	ctx.moveTo(centerX, centerY - height/4); // A1
  
    ctx.bezierCurveTo(
    centerX + width/4, centerY - height/4, // C1
    centerX + width/4, centerY + height/4, // C2
    centerX+4, centerY + height/4); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/4, centerY + height/4, // C3
    centerX - width/4, centerY - height/4, // C4
    centerX+4, centerY - height/4); // A1
 	 ctx.closePath();
  	ctx.fill();
  		
}
function drawBeak(){

	ctx.fillStyle = "orange";

	ctx.beginPath();
	
	ctx.moveTo(centerX, centerY - height/20); // A1
  
    ctx.bezierCurveTo(
    centerX + width/10, centerY - height/20, // C1
    centerX + width/10, centerY + height/20, // C2
    centerX+10, centerY + height/20); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/10, centerY + height/20, // C3
    centerX - width/10, centerY - height/20, // C4
    centerX+10, centerY - height/20); // A1
 	 ctx.closePath();
  	ctx.fill();

}
function drawB(){


//Start here - copy this for the gradient color
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "lightblue");

ctx.fillStyle = grd;

//Glacier Path
	
	ctx.beginPath();
	ctx.moveTo(350,300);
	ctx.lineTo(600,500);
	ctx.lineTo(0,500);
	ctx.lineTo(0,300);
	ctx.closePath();
	ctx.fill();
	
 //End here   


}

function clear(){
	//c.clearRect(0,0,canvas.width,canvas.height);
}
window.onload = move();



	/*Square Accents
	ctx.fillStyle = "#FF0000";
	ctx.beginPath();
	ctx.moveTo(0,300);
	ctx.lineTo(75,410);
	ctx.lineTO(125,450);
	ctx.lineTo(0,500);
	ctx.closePath();
	ctx.fill();*/

</script>

</body>
</html>
