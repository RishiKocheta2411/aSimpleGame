var Box
function setup() {
  createCanvas(400,400);
  Box=createSprite(200,200,20,20); 
}

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
  Box.y-=5;
}
if(keyIsDown(DOWN_ARROW)){
 Box.y+=5; 
}
if(keyIsDown(LEFT_ARROW)){
  Box.x-=5;
}
if(keyIsDown(RIGHT_ARROW)){
  Box.x+=5;
}


  drawSprites();
}




