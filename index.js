 var canvas=document.getElementById("canvas");
 var ctx=canvas.getContext("2d");

var gap=350;


var bg=new Image();
var bird=new Image();
var pipeNorth=new Image();
var pipeSouth=new Image();
var fg=new Image();

bg.src="images/bg.png";
bird.src="images/bird.png";
pipeSouth.src="images/pipeSouth.png";
pipeNorth.src="images/pipeNorth.png";
fg.src="images/fg.png";

var fly=new Audio();
var scre=new Audio();


fly.src="fly.mp3";
scre.src="score.mp3";


var constant=pipeNorth.height+gap;

var bX=10;
var bY=150;
var gravity=1.5;

canvas.addEventListener("click",moveUp);

function moveUp()
{
	bY-=25;
	fly.play();

};

var pipe=[];
pipe[0]={
	x : canvas.width,
	y : 0
}

var score=0;

function draw()
{
	ctx.drawImage(bg,0,0);
	ctx.drawImage(fg,0,canvas.height-fg.height);
	ctx.drawImage(bird,bX,bY);
	
	for(var i=0;i<pipe.length ;i++)
	{
		ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
		ctx.drawImage(pipeSouth,pipe[i].x, pipe[i].y+constant);
		pipe[i].x--;
		if(pipe[i].x==125)
		{
			pipe.push({
				x :canvas.width,
				y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
			});
		}

		//collision detecting....
		if(bX+bird.width >= pipe[i].x && bX<=pipe[i].x+pipeNorth.width && 
			(bY <= pipe[i].y+pipeNorth.height || bY+bird.height >= pipe[i].y+constant))//|| bY +bird.height>= canvas.height-fg.height)
		{

			location.reload();//reload the page 
		}

		if(pipe[i].x == 5)
			{
				score++;
				scre.play();	
			}
		
	}
	bY+=gravity;

	ctx.fillStyle="#000";
	ctx.font="20px Verdana";
	ctx.fillText("Score: "+score,10,canvas.height-20);
	requestAnimationFrame(draw);
}

draw();