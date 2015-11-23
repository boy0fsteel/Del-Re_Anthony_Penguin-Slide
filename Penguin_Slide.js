<!DOCTYPE html>
<html>
<style>
body {
 font-family: Verdana, Helvetica, sans-serif;
}

.drawCloud() {
    opacity: 0.4;
    filter: alpha(opacity=40); /* For IE8 and earlier */
}

canvas {
 border: 1px solid black;
 background-color: rgb(255,192,203);
}
</style>
<body>

<canvas id="myCanvas" width="600" height="500">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

//Penguin oval
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
	var height = 130;
	var textColor = "white";
	var textX = 400;
	var textY = 74;
	var grad = 

	//var width = 200;
	//var height = 80;
   ctx.fillStyle = "black";

setInterval(draw,10);

 ctx.fillStyle = "black";

//Sun

function drawSun(){
ctx.beginPath();
ctx.arc(100, 75, 70, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#ffff66";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "#ffff66";


}

function drawSun2(){
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#ffd633";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "#ffd633";

}

function drawCloud(){
ctx.beginPath();
      ctx.moveTo(150, 80);
      ctx.bezierCurveTo(100, 70, 100, 120, 200, 120);
      ctx.bezierCurveTo(220, 150, 290, 150, 310, 120);
      ctx.bezierCurveTo(390, 120, 350, 70, 360, 70);
      ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
      ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
      ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 102, 0.7)";
      ctx.stroke();



}


function move(){
	//Penguin Move
	if(centerX<350){
	centerX= centerX+2;
	textColor= "#ff0066";
	}
	else if (centerX>=350 && centerX<610){
		
		centerX= centerX+5;
		centerY= centerY+5;
		textColor= "#00ff00";
	}
	else{
		centerX= -10;
		centerY = 250;
		textColor= "white";
	}
}

function textMove(){
	//Text Move
	if(textY<125){
		textY++;
	}
	else if(textY>=125){
		textY--;
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
    centerX - width/2, centerY + height/5, // C3
    centerX - width/2, centerY - height/5, // C4
    centerX, centerY - height/2); // A1
 	ctx.closePath();
  	ctx.fill();
  	move();
	textMove();
	drawText();
	drawTummy();
	drawBeak();	
	drawSun();
	drawSun2();
	drawCloud();
	

	}
	else{
	ctx.fillStyle = "black";
	ctx.beginPath();
	
	ctx.moveTo(centerX-30, centerY - height/2); // A1
  
    ctx.bezierCurveTo(
    centerX + width/5+20 , centerY - height/2, // C1
    centerX + width/5+20, centerY + height/2, // C2
    centerX+30, centerY + height/2); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/2+20, centerY + height/2, // C3
    centerX - width/2+20, centerY - height/2, // C4
    centerX-20, centerY - height/2); // A1
 	ctx.closePath();
  	ctx.fill();
	  	move();
		textMove();
		drawText();
		drawTummy();
		drawBeak();
		drawSun();
		drawSun2();	
	    drawCloud();
	    
	}
	
	drawB();

	

}
function drawTummy(){
	

	ctx.fillStyle = "white";
	ctx.beginPath();
	
	ctx.moveTo(centerX, centerY - height/5); // A1
  
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
	
	ctx.moveTo(centerX, (centerY-40) - height/20); // A1
  
    ctx.bezierCurveTo(
    centerX + width/10, (centerY-40) - height/20, // C1
    centerX + width/10, (centerY-40) + height/20, // C2
    centerX+25, (centerY-40) + height/20); // A2

	
  	ctx.bezierCurveTo(
    centerX - width/10, (centerY-40) + height/20, // C3
    centerX - width/10, (centerY-40) - height/20, // C4
    centerX+10, (centerY-40) - height/20); // A1
 	 ctx.closePath();
  	ctx.fill();

}



function drawText(){
	ctx.fillStyle= textColor;
	ctx.font = "30px Comic Sans MS";
	ctx.fillText("Penguin Slide!", textX, textY);
	
}

function drawB(){


//Gradient 
var grd = ctx.createLinearGradient(20, 20, 150, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "#A9D0F5");

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
