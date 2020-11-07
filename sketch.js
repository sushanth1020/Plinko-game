var particles =[]
var plinkos= []
var divisions=[]
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  division1 = new Division(120,300,80,120);

  division2 = new Division(136,340,95,130);

  division3 = new Division(120,300,80,127);

  division4 = new Division(170,370,85,120);

  division5 = new Division(190,395,100,150);

  division6 = new Division(150,330,89,185);
  for(var k =0; k <=Width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

    for (var j = 40; j <=width; j=j+50)
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 15; j <=width-10;j=j+50)
     {
       plinkos.push(new Plinko(j,175));
     }

     for (var j = 0; j < particles.length; j++){
       particles[j].display();
     }

     for (var k = 0; k < divisions.length; k++){
       divisions[k].display();
     }
    }


function draw() {
  background(255,255,255);  
  drawSprites();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

}
