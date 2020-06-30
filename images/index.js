 var canvas=document.querySelector("canvas");
 var ctx=canvas.getContext("id");

var bg=new Image();
var bird=new Image();
var pipeNorth=new Image();
var pipeSouth=new Image();
var fg=new Image();

bg.src="/bg.png";
bird.src="bird.png";
pipeSouth.src="pipeSouth.png";
pipeNorth.src="pipeNorth.png";
fg.src="fg.png";

function draw()
{
	ctx.drawImage(bg,0,0);
}

draw();