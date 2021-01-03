var bgImage;
var missileRight;
var missileLeft;
var starImage;
var kirbyRight;
var kirbyLeft;
var score = 0;

var kirby = {x: 90, y: 600, size: 80, left: false, speed: 3, life: 3};
var star;
var missileLeft;
var missileRight;

var started = false;

var easy = false;

var upSound;
var bombSound;
var introSound;
var gameSound;
var gameOverSound;
var starSound;

function preload(){
    bgImage = loadImage("images/background.png");
    kirbyLeft = loadImage("images/kirbyLeft.png");
    kirbyRight = loadImage("images/kirbyRight.png");
    missileLeftImage = loadImage("images/missile.png");
    missileRightImage = loadImage("images/missileRight.png");
    starImage = loadImage("images/star.png");
    bombSound = loadSound("sounds/bomb.aac");
    introSound = loadSound("sounds/intro.aac");
    gameSound = loadSound("sounds/game.aac");
    gameOverSound = loadSound("sounds/gameOver.aac");
    starSound = loadSound("sounds/touchStar.aac");
}

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("#play");
    noStroke();
    star = {x: random(80, width-80), y: random(80, 400), size: 100};
    missileRight = {x: 0, y: random(80,400), size: 80, speed:5};
    missileLeft = {x: width + 50, y: random(80, 400), size: 100, speed:5};


}


function draw(){

    imageMode(CORNER);
    background(bgImage);

    if(!started){

        if(!introSound.isPlaying()) introSound.play();
        var mode = "Mode: ";
        mode += + easy ? "Easy" : "Hard";
        text("Press K to switch to Hard Mode", 175, 100);
        text("Press J to switch to Easy Mode", 175, 150);

        text(mode, 300, 200);

        textFont( "Times", 70);
        fill(255);

        text("Press Enter to start! ", 80, 300);
        textFont( "Times", 30);
        text( "Use WASD to control Kirby to get as many stars as possible.", 30, 400);
        text( "Be careful with the missiles.", 200, 450);



        if(keyCode == ENTER) {
            started = true;
        }

        if(keyIsDown(75)) easy = false;
        if(keyIsDown(74)) easy = true;



    }
    else if ( started && kirby.life > 0){
        if(introSound.isPlaying()) introSound.stop();
        if(gameOverSound.isPlaying()) gameOverSound.stop();
        if(!gameSound.isPlaying()) gameSound.play();
        //display score
        fill(255);
        textFont( "Times", 20);
        text("Your Score: " + score, 20, 20)
        text("Reaming Life: " + kirby.life, 20, 40);

        if(kirby.y < 750) kirby.y += kirby.speed/3; //gravity: kirby keeps floating down

        //check star kirby collision
        if(dist(kirby.x, kirby.y, star.x, star.y) < kirby.size / 2.2 + star.size /2.2 ){
            starSound.play();
            score++;
            star = {x: random(80, width-80), y: random(80, 400), size: 80};
            if (kirby.speed < 10) kirby.speed *= 1.05;
        }

        //check kirby missile collision
        if(dist(kirby.x, kirby.y, missileRight.x, missileRight.y) < kirby.size / 2.5 + missileRight.size/2.5 ||
            dist(kirby.x, kirby.y, missileLeft.x, missileLeft.y) < kirby.size / 2.5 + missileRight.size/2.5)
        {
            bombSound.play();
            kirby.life = kirby.life - 1;
            wait(200);
            kirby = {x: 90, y: 600, size: 80, left: false, speed: kirby.speed, life: kirby.life};

        }

        //display star image
        imageMode(CENTER);
        image(starImage, star.x, star.y, star.size, star.size);

        //the moving kirby
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65) ) {
            kirby.left = true;
            if(kirby.x>kirby.size/2) kirby.x -= kirby.speed;
        }else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) && kirby.x<800-kirby.size/2) {
            kirby.left = false;
            if(kirby.x<800-kirby.size/2) kirby.x += kirby.speed;
        }else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
            if(kirby.y>kirby.size) kirby.y -= kirby.speed;
        }else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
            if(kirby.y< 800-kirby.size/2) kirby.y += kirby.speed;
        }

        image(kirby.left ? kirbyLeft: kirbyRight, kirby.x, kirby.y, kirby.size, kirby.size);

        //randomly moving missile
        if(missileRight.x >= width + missileRight.size / 2) missileRight = {x: -50, y: random(80,400), size: missileRight.size<150? missileRight.size*1.03:  missileRight.size, speed: missileRight.speed*1.02};
        if(missileLeft.x <= -missileLeft.size/2) missileLeft = {x: width + 50, y: random(80, 400), size:  missileRight.size <150 ? missileLeft.size*1.03 :  missileRight.size, speed: missileLeft.speed*1.02};

        missileRight.x += missileRight.speed;
        if(!easy) missileLeft.x -= missileLeft.speed;
        image(missileRightImage, missileRight.x, missileRight.y, missileRight.size, missileRight.size);
        image(missileLeftImage, missileLeft.x, missileLeft.y, missileLeft.size, missileRight.size);
    }else{

        if(gameSound.isPlaying()) gameSound.stop();
        if(!gameOverSound.isPlaying()) gameOverSound.play();

        textFont( "Times", 30);
        var mode = "Mode: ";
        mode += + easy ? "Easy" : "Hard";
        text("Press K to switch to Hard Mode", 175, 100);
        text("Press J to switch to Easy Mode", 175, 150);
        text(mode, 300, 200);

        textFont( "Times", 100);
        text("Game Over! ", 99, 300);
        text("Your Score: "+ score, 80, 400);
        textFont( "Times", 60);
        text("Press enter to restart", 120, 480);

        if(keyCode==ENTER){
            started = true;
            star = {x: random(80, width-80), y: random(80, 400), size: 100};
            missileRight = {x: 0, y: random(80,400), size: 80, speed:5};
            missileLeft = {x: width + 50, y: random(80, 400), size: 100, speed:5};
            kirby = {x: 90, y: 600, size: 80, left: false, speed: 3, life: 3};
            score = 0;
        }

        if(keyIsDown(75)) easy = false;
        if(keyIsDown(74)) easy = true;

    }
}

function updateMissile(clickedRange) {
    missileLeft.size = int(clickedRange.value);
    missileRight.size = int(clickedRange.value);
}

function updateStar(clickedRange) {
    star.size = int(clickedRange.value);
}

function updateKirby(clickedRange) {
    kirby.size = int(clickedRange.value);
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}




