var btn_green, btn_red;

function setup() {
  createCanvas(400,400);

  btn_red = createSprite("RED")
  btn_red.position(100,50);
  btn_red.mousepressed(red_bg);

  btn_green = createSprite("GREEN")
  btn_green.position(250,50);
  btn_green.mousepressed(green_bg);
}

function draw() 
{
  background(30);


  redbg();
  greenbg();
  drawSprites();
 
}

function redbg(){
  r = 255;
  g = 0;
  b = 0;
}

function greenbg(){
  r = 0;
  g = 255;
  b = 0;
}



