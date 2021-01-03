var world;

var cars = [];
var logs = [];
var coins = [];

// 0 - Start State
// 1 - Playing State
// 2 - Game Over State
var state = 0;

var startX = 0;
var startY = 1;
var startZ = 45;

var score = 0;
var deadTimes = 0;

var isMobile = false;

var startScreen;
var gameOverBg;

var scoreHolder;
var timer;
var timerHolder;
var lastSec;

var gameOverTimer;

var carSound;
var waterSound;
var coinSound;

var startScreenCar;

function preload() {
    carSound = loadSound('sounds/horn.aac');
    waterSound = loadSound('sounds/splash.aac');
    coinSound = loadSound('sounds/coin.aac');
}

function setup() {
    noCanvas();

    world = new World('VRScene');
    setUserToOrigin();

    isMobile = isBrowserMobile();

    startScreen = $(".start");
    scoreHolder = $("#score");

    timerHolder = $("#timer");

    w = 4;
    offset = 30;
    startScreenCar = new Car({
        x: 0, y: -3, z: offset,
        width: w, height: w / 5, depth: random(1, 2),
        radius: w / 7,
        red: random(255), green: random(255), blue: random(255),
        speed: random(0.05, 0.3) * ( random(-1, 1) > 0 ? 1 : -1)
    });
    startScreenCar.addToWorld(world);

}

function draw() {

    switch (state) {
        case 0:
            drawStart();
            break;
        case 1:
            drawPlaying();
            break;
        case 2:
            drawGameOver();
            break;
    }
}

function drawPlaying() {

    if (mouseIsPressed) {
        //mobile touch is less sensitive than PC click
        if (isMobile) world.moveUserForward(0.25);
        else world.moveUserForward(0.05);
    }
    punishNaughtyUserWhoGoesBeyondBound();

    var userX = world.getUserPosition().x;
    var userZ = world.getUserPosition().z;

    cars.forEach(function (c) {
        c.move();
        changeDirectionIfNeeded(c, 50);

        if (c.checkCollision()) {
            deadTimes++;
            score--;
            setUserToOrigin();
        }

        if (userZ >= c.z - c.width / 2 && userZ <= c.z + c.width / 2 && abs(c.x - userX) <= 6) {
            if (c.speed < 0 && userX < c.x) {
                if (!carSound.isPlaying())
                    carSound.play();
            } else if (c.speed > 0 && userX > c.x) {
                if (!carSound.isPlaying())
                    carSound.play();
            }
        }

    });

    var drowning = true;
    logs.forEach(function (l) {
        l.move();
        if (l.x < -50 + l.width / 2) {
            l.body.setX(50 - l.width / 2);
            l.x = 50 - l.width / 2;
        } else if (l.x > 50 - l.width / 2) {
            l.body.setX(-50 + l.width / 2);
            l.x = -50 + l.width / 2;
        }

        if (l.checkCollision()) {
            drowning = false;
        }
    });

    if (drowning && userZ >= -10 && userZ <= 10) {
        deadTimes++;
        score--;
        waterSound.play(0, 2);
        wait(500);
        setUserToOrigin();
    }

    for (var i = 0; i < coins.length; i++) {
        var c = coins[i];
        if (c.checkCollision()) {
            coinSound.play();
            score++;
            world.remove(coins[i].body);
            world.remove(coins[i].marker);
            var newCoin = new Coin({
                x: random(-43, 43),
                z: (i < 5) ? random(-43, -15) : random(15, 43)
            });
            coins[i] = newCoin;
            newCoin.addToWorld(world);
        }
    }
    refreshTimer();
    refreshScore();
}

function drawStart() {

    if (mouseIsPressed) {
        startScreen.remove();
        layoutGame();
        lastSec = second();
        state = 1;
    }

    startScreenCar.move();
    changeDirectionIfNeeded(startScreenCar, 20);

}

function drawGameOver() {
    gameOverTimer--;
    if (mouseIsPressed && gameOverTimer <= 0) {
        $('#endTitle').attr('value', '');
        $('#endScore').attr('value', '');
        $('#endAgain').attr('value', '');
        world.remove(gameOverBg);

        refreshScore();
        refreshTimer();

        timer = 180;

        score = 0;

        state = 1;
    }
}


