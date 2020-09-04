var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

ctx.lineWidth=4;
ctx.strokeStyle="rgba(242,0,0)";
ctx.strokeRect(75,25,125,100);

for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		if(i==0 || i==7){
			ctx.lineWidth=4;
			ctx.strokeStyle="rgba(242,0,0)";
			ctx.strokeRect(220+(j*70),20+(i*70),70,70);
			//ctx.fillStyle="rgb(242,0,0,0.6)";
			//ctx.fillRect(220+(j*70),20+(i*70),70,70);
		}
		else if(j==0 || j==7){
			ctx.lineWidth=4;
			ctx.strokeStyle="rgba(242,0,0)";
			ctx.strokeRect(220+(j*70),20+(i*70),70,70);
			//ctx.fillStyle="rgb(242,0,0,0.6)";
			//ctx.fillRect(220+(j*70),20+(i*70),70,70);
		}
	}
}

ctx.lineWidth=4;
ctx.strokeStyle="rgba(242,0,0)";
ctx.strokeRect(800,475,125,100);

ctx.fillStyle="rgba(242,0,0)";
ctx.font="15px 'Montserrat', sans-serif";
ctx.fillText("START",230,80);

ctx.fillStyle="rgba(242,0,0)";
ctx.font="15px 'Montserrat', sans-serif";
ctx.fillText("END",235,110);

ctx.fillStyle="rgba(242,0,0)";
ctx.font="15px 'Montserrat', sans-serif";
ctx.fillText("START",720,530);

ctx.fillStyle="rgba(242,0,0)";
ctx.font="15px 'Montserrat', sans-serif";
ctx.fillText("END",725,500);

ctx.fillStyle="rgba(242,0,0)";
ctx.font="bold 23px 'Montserrat', sans-serif";
ctx.fillText("SUCCESSFUL TOKENS",370,400);

ctx.beginPath();
canvas_arrow(ctx,255,35,325,35);
canvas_arrow(ctx,765,55,765,125);
canvas_arrow(ctx,745,565,675,565);
canvas_arrow(ctx,235,545,235,475);
ctx.lineWidth=3;
ctx.strokeStyle="rgba(242,0,0)";
ctx.stroke();

ctx.fillStyle="rgba(242,0,0)";
ctx.font="20px 'Montserrat', sans-serif";
ctx.fillText(localStorage.getItem("p1"),80,50);
ctx.fillStyle="rgba(242,0,0)";
ctx.font="20px 'Montserrat', sans-serif";
ctx.fillText(localStorage.getItem("p2"),805,500);


function canvas_arrow(context, fromx, fromy, tox, toy) {
  var headlen = 20; 
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  context.moveTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

function rollDie1(){
	var random1 = Math.floor(Math.random()*6)+1;
	ctx.clearRect(300,100,300,200);
	ctx.fillStyle="rgb(242,0,0)";
    ctx.font="100px 'Montserrat', sans-serif";
    ctx.fillText(random1,460,260);

    document.getElementById("button1").style["display"]="none";

	if(p11.x<220 && p12.x<220){
		if(random1==6){
			document.getElementById("p11").style["display"]="inline-block";
			document.getElementById("p12").style["display"]="inline-block";
			p11.ID.onclick = function() {startGame(p11)};
			p12.ID.onclick = function() {startGame(p12)};
			document.getElementById("button1").style["display"]="inline-block";
		}
		else{
			document.getElementById("button2").style["display"]="inline-block";
		}
	}
	else if(p11.x<220 && p12.x>220){
		if(random1==6){
			document.getElementById("p11").style["display"]="inline-block";
			document.getElementById("p12").style["display"]="inline-block";
			p11.ID.onclick = function() {startGame(p11)};			
			p12.ID.onclick = function() {runningGame(p12,random1)};
			document.getElementById("button1").style["display"]="inline-block";
		}
		else{
			document.getElementById("p12").style["display"]="inline-block";
			p12.ID.onclick = function() {runningGame(p12,random1)};
			document.getElementById("button2").style["display"]="inline-block";
		}
	}

	else if(p11.x>220 && p12.x<220){
		if(random1==6){
			document.getElementById("p11").style["display"]="inline-block";
			document.getElementById("p12").style["display"]="inline-block";
			p12.ID.onclick = function() {startGame(p12)};			
			p11.ID.onclick = function() {runningGame(p11,random1)};
			document.getElementById("button1").style["display"]="inline-block";
		}
		else{
			document.getElementById("p11").style["display"]="inline-block";
			p11.ID.onclick = function() {runningGame(p11,random1)};
			document.getElementById("button2").style["display"]="inline-block";
		}
	}

	else{
		if(random1==6){
			document.getElementById("p11").style["display"]="inline-block";
			document.getElementById("p12").style["display"]="inline-block";
			p12.ID.onclick = function() {runningGame(p12,random1)};
		    p11.ID.onclick = function() {runningGame(p11,random1)};
		    document.getElementById("button1").style["display"]="inline-block";
		}
		else{
			document.getElementById("p11").style["display"]="inline-block";
			document.getElementById("p12").style["display"]="inline-block";
			p12.ID.onclick = function() {runningGame(p12,random1)};
		    p11.ID.onclick = function() {runningGame(p11,random1)};
		    document.getElementById("button2").style["display"]="inline-block";
		}
	}

}

function rollDie2(){
	var random2 = Math.floor(Math.random()*6)+1;
	ctx.clearRect(300,100,300,200);
	ctx.fillStyle="rgb(242,0,0)";
    ctx.font="100px 'Montserrat', sans-serif";
    ctx.fillText(random2,460,260);

    document.getElementById("button2").style["display"]="none";

	if(p21.x>780 && p22.x>780){
		if(random2==6){
			document.getElementById("p21").style["display"]="inline-block";
			document.getElementById("p22").style["display"]="inline-block";
			p21.ID.onclick = function() {startGame(p21)};
			p22.ID.onclick = function() {startGame(p22)};
			document.getElementById("button2").style["display"]="inline-block";
		}
		else{
			document.getElementById("button1").style["display"]="inline-block";
		}
	}
	else if(p21.x<780 && p22.x>780){
		if(random2==6){
			document.getElementById("p21").style["display"]="inline-block";
			document.getElementById("p22").style["display"]="inline-block";
			p21.ID.onclick = function() {runningGame(p21,random2)};			
			p22.ID.onclick = function() {startGame(p22)};
			document.getElementById("button2").style["display"]="inline-block";
		}
		else{
			document.getElementById("p21").style["display"]="inline-block";
			p21.ID.onclick = function() {runningGame(p21,random2)};
			document.getElementById("button1").style["display"]="inline-block";
		}
	}

	else if(p21.x>780 && p22.x<780){
		if(random2==6){

			document.getElementById("p21").style["display"]="inline-block";
			document.getElementById("p22").style["display"]="inline-block";
			p21.ID.onclick = function() {startGame(p21)};			
			p22.ID.onclick = function() {runningGame(p22,random2)};
			document.getElementById("button2").style["display"]="inline-block";
		}
		else{
			document.getElementById("p22").style["display"]="inline-block";
			p22.ID.onclick = function() {runningGame(p22,random2)};
			document.getElementById("button1").style["display"]="inline-block";
		}
	}

	else{
		if(random2==6){
			document.getElementById("p21").style["display"]="inline-block";
			document.getElementById("p22").style["display"]="inline-block";
			p22.ID.onclick = function() {runningGame(p22,random2)};
		    p21.ID.onclick = function() {runningGame(p21,random2)};
		    document.getElementById("button2").style["display"]="inline-block";
		}
		else{
			document.getElementById("p21").style["display"]="inline-block";
			document.getElementById("p22").style["display"]="inline-block";
			p22.ID.onclick = function() {runningGame(p22,random2)};
		    p21.ID.onclick = function() {runningGame(p21,random2)};
		    document.getElementById("button1").style["display"]="inline-block";
		}
	}
}

var count1=0;
var count2=0;

function startGame(object){
	document.getElementById("p11").style["display"]="none";
	document.getElementById("p12").style["display"]="none";
	document.getElementById("p21").style["display"]="none";
	document.getElementById("p22").style["display"]="none";
	ctx.clearRect(object.x,object.y,20,20);
	if(object===p11 || object===p12){
		object.x=245;
		object.y=45;
	}
	else{
		object.x=735;
		object.y=535;
	}
	if(object===p11 || object===p12){
		if(object.x==p21.x && object.y==p21.y){
			ctx.clearRect(p21.x,p21.y,20,20);
			p21.x=820;
			p21.y=540;
		}
		if(object.x==p22.x && object.y==p22.y){
			ctx.clearRect(p22.x,p22.y,20,20);
			p22.x=842;
			p22.y=540;
		}
	}

	if(object===p21 || object===p22){
		if(object.x==p11.x && object.y==p11.y){
			ctx.clearRect(p11.x,p11.y,20,20);
			p11.x=95;
			p11.y=90;
		}
		if(object.x==p12.x && object.y==p12.y){
			ctx.clearRect(p12.x,p12.y,20,20);
			p12.x=117;
			p12.y=90;
		}
	}
	drawPlayer(p11);
	drawPlayer(p12);
	drawPlayer(p21);
	drawPlayer(p22);
}

function runningGame(object,random){
	document.getElementById("p11").style["display"]="none";
	document.getElementById("p12").style["display"]="none";
	document.getElementById("p21").style["display"]="none";
	document.getElementById("p22").style["display"]="none";
	for(var m=0;m<random;m++)
	{
		ctx.clearRect(object.x,object.y,20,20);
		if(object===p11 || object===p12){
			if(object.x+object.moveby<780 && object.y<90){
				object.x+=object.moveby;
			}
			else if(object.x+object.moveby>780 && object.y+object.moveby<580){
				object.y+=object.moveby;
			}
			else if(object.y+object.moveby>580 && object.x-object.moveby>220){
				object.x-=object.moveby;
			}
			else if (object.x-object.moveby<220){
				if(object.y-(random-m)*object.moveby>160){
					object.y-=object.moveby;
				}
				else if(object.y-(random)*object.moveby>90 && object.y-(random)*object.moveby<160){
					if(object===p11){
						object.x=300;
						object.y=480;
						document.getElementById("p11").style["opacity"]=0;
						count1+=1;
					}
					else{
						object.x=322;
						object.y=480;
						document.getElementById("p12").style["opacity"]=0;
						count1+=1;
					}
				}
				else{
					alert("You can't move this token");
					if(object===p11){
						if(p12.x>220){
							runningGame(p12,random);
						}
						else{
							if(random==6){
								startGame(p12);
							}
						}
					}
					if(object===p12){
						if(p11.x>220){
							runningGame(p11,random);
						}
						else{
							if(random==6){
								startGame(p11);
							}
						}
					}
					break;
				}
			}
			
		}
		if(object===p21 || object===p22){
			if(object.x+object.moveby<780 && object.y<90){
				object.x+=object.moveby;
			}
			else if(object.x+object.moveby>780 && object.y+object.moveby<580){
				if(object.y+(random-m)*object.moveby<440){
					object.y+=object.moveby;
				}
				else if(object.y+(random)*object.moveby>440 && object.y+(random)*object.moveby<510){
					if(object===p21){
						object.x=650;
						object.y=480;
						document.getElementById("p21").style["opacity"]=0;
						count2+=1;
					}
					else{
						object.x=672;
						object.y=480;
						document.getElementById("p22").style["opacity"]=0;
						count2+=1;
					}
				}
				else{
					alert("You can't move this token");
					if(object===p21){
						if(p22.x<780){
							runningGame(p22,random);
						}
						else{
							if(random==6){
								startGame(p22);
							}
						}
					}
					if(object===p22){
						if(p21.x<780){
							runningGame(p21,random);
						}
						else{
							if(random==6){
								startGame(p21);
							}
						}
					}
					break;
				}
			}
			else if(object.y+object.moveby>580 && object.x-object.moveby>220){
				object.x-=object.moveby;
			}
			else if (object.x-object.moveby<220){
				object.y-=object.moveby;
			}
		}
		
	}
	if(object===p11 || object===p12){
		if(object.x==p21.x && object.y==p21.y){
			ctx.clearRect(p21.x,p21.y,20,20);
			p21.x=820;
			p21.y=540;
		}
		if(object.x==p22.x && object.y==p22.y){
			ctx.clearRect(p22.x,p22.y,20,20);
			p22.x=842;
			p22.y=540;
		}
	}

	if(object===p21 || object===p22){
		if(object.x==p11.x && object.y==p11.y){
			ctx.clearRect(p11.x,p11.y,20,20);
			p11.x=95;
			p11.y=90;
		}
		if(object.x==p12.x && object.y==p12.y){
			ctx.clearRect(p12.x,p12.y,20,20);
			p12.x=117;
			p12.y=90;
		}
	}

	drawPlayer(p11);
	drawPlayer(p12);
	drawPlayer(p21);
	drawPlayer(p22);
	if(count2==2){
		setTimeout(function(){alert(localStorage.getItem("p2") + " Won !"); window.location.replace("index.html");},1000);
	}
    if(count1==2){
    	setTimeout(function(){alert(localStorage.getItem("p1") + " Won !"); window.location.replace("index.html");},1000);
    }
}

var p11={
	x:95,
	y:90,
	moveby:70,
	ID: document.getElementById("p11")
};

var p12={
	x:117,
	y:90,
	moveby:70,
	ID: document.getElementById("p12")
};

var p21={
	x:820,
	y:540,
	moveby:70,
	ID: document.getElementById("p21")
};

var p22={
	x:842,
	y:540,
	moveby:70,
	ID: document.getElementById("p22")
};

function drawPlayer(object){
	ctx.drawImage(object.ID,object.x,object.y,20,20);
}

drawPlayer(p11);
drawPlayer(p12);
drawPlayer(p21);
drawPlayer(p22);









