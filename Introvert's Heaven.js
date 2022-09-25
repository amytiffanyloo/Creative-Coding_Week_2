//shape easing effect
var x1 = 1;
var y1 = 1;
var easing = 0.05;

//shape bouncing effect
var x2 = 500
var y2 = 80;
var xspeed = 5;
var yspeed = 10;

function setup() {
  createCanvas(900, 450);
  noStroke();  
}

function draw() {
background(237, 34, 93);

  //instructions
  let statement = 'Drag me home!';
  fill(255);
  textSize(20)
  text(statement, 20, 300, 170, 100);
  
  //floor
  fill(230)
  rect(0,430,900,20)
  
  //setting path for shape
  let topPath = 410;
  let bottomPath = 410;
  let pt = constrain(y1, topPath, bottomPath);
  
  //The Shape in outside mode
  fill(255);
  ellipse(x1,pt,80,80);

  //mouse interaction + easing effect (5% lag)
  if(mouseX){
    let targetX = mouseX;
  let dx = targetX - x1;
  x1 += dx * easing;  
     }
  let targetY = mouseY;
  let dy = targetY - y1;
  y1 += dy * easing;

  //entrance door
  fill(100,200,100)
  ellipse(450,400,160,160,0)

  //house
  fill(0)
  rect(450,120,400,330)
  
  //window
  fill(225,50,200,60);
  rect(560,200,240,210,10);
  
  //roof
  fill(225,190,100)
  arc(650, 150, 460, 260, PI, TWO_PI);
  
  //switch to home mode
  if (mouseX >460 && mouseX<840){
    
    
  //The Shape in home mode
  //Would like to make size random so that it looks like the shape is moving inside a 3D space
  let r = 25;
  fill(255);
  ellipse(x2, y2, r*2, r*2);

 //window
  fill(225,50,200,80);
  rect(560,200,240,210,10);

//top window wall    
  fill(0)
  rect(560,140,290,60);
    
//left window wall
  fill(0)
  rect(450,140,110,310);

//right window wall  
  fill(0)
  rect(800,205,50,250)
//bottom window wall
  fill(0)
  rect(560,410,240,50)
    
  //caption
  let newstatement = 'To the Introvert`s Heaven!';
  fill(255);
  textSize(20)
  text(newstatement,580,400, 270, 100);

//roof
  fill(225,190,100)
  arc(650, 150, 460, 260, PI, TWO_PI);

  //shape bouncing
  x2 += xspeed;
  y2 += yspeed;
    
  //bounce back at wall contact
  if (x2 > 750 || x2 < 500) {
    xspeed = -xspeed;
  }
  if (y2 > 400 || y2 < 90) {
    yspeed = -yspeed;
  }

  }
}