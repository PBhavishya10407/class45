var bus;
var road; 

function setup()
{
    createCanvas(displayWidth,displayHeight);
    road = createSprite(displayWidth/2,displayHeight,displayWidth/2,displayHeight*-2);
    bus = createSprite(displayWidth/4+50,displayHeight/2+20,10,20);
}

function draw()
{
    background(255);

    if(keyDown(UP_ARROW))
    {
        bus.velocityY=-10;
        bus.shapeColor = "red";
    }

    camera.y=bus.y;


    drawSprites();
}
