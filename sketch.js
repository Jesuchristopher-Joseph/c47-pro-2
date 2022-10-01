var obsTop1, obsTop2, obstacleTop, obstacleTopGroup;
var obsBottom1,obsBottom2,obsBottom3, obstacleBottom, obstacleBottomGroup;
var balloonImg, balloon;
var bgImg, bg;
var gameOverImg; 
var restartImg;
var jumpSound;
var dieSound;
var topGround, bottomGround;


function preload(){
    obsTop1 = loadImage("assets/obsTop1.png");
    obsTop2 = loadImage("assets/obsTop2.png");

    obsBottom1 = loadImage("assets/obsBottom1.png");
    obsBottom2 = loadImage("assets/obsBottom2.png");
    obsBottom3 = loadImage("assets/obsBottom3.png");

    bgImg = loadImage("assets/bg.png")
    
    balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

    gameOverImg = loadImage("assets/gameOver.png");
    restartImg = loadImage("assets/restart.png");

    jumpSound = loadSound("assets/jump.mp3");
    dieSound = loadSound("assets/die.mp3");
}

function setup(){

    createCanvas(800,600);
    bg = createSprite(165,400);
    bg.addImage(bgImg);
    bg.scale = 1.2;

    balloon = createSprite(100,200);
    balloon.addAnimation("balloon", balloonImg);   
    balloon.scale = 0.3;

    topGround = createSprite(400,10, 800, 10);
    topGround.visible = false;
    bottomGround = createSprite(400, 590, 800,10);
    bottomGround.visible = false;

    obstacleTopGroup = new Group();
    obstacleBottomGroup = new Group();

}

function draw(){
    background(0);

    spawnObsTop();
    spawnObsBot();
    drawSprites();
}

function spawnObsTop(){
    if(frameCount%60 === 0){
        obstacleTop = createSprite(400,50);
        obstacleTop.scale = 0.1;
        obstacleTop.velocityX = -4;

                            //min and max
        obstacleTop.y = random(10,100);

        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: obstacleTop.addImage(obsTop1); break;
            case 2: obstacleTop.addImage(obsTop2); break;
            default : break;
        }
        obstacleTop.lifetime = 200;
        balloon.depth = obstacleTop.depth+1;

        obstacleTopGroup.add(obstacleTop);
    }
}

function spawnObsBot(){
    if(frameCount%80 === 0){
        obstacleBottom = createSprite(800,510);
        obstacleBottom.scale = 0.1;
        obstacleBottom.velocityX = -4;

        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: obstacleBottom.addImage(obsBottom1); break;
            case 2: obstacleBottom.addImage(obsBottom2); break;
            case 3: obstacleBottom.addImage(obsBottom3); break;
            default : break;
        }
        obstacleBottom.lifetime = 200;
        balloon.depth = obstacleBottom.depth+1;

        obstacleBottomGroup.add(obstacleBottom);
    
    }
}