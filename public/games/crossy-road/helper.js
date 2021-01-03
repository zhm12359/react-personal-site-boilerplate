function isPointInsideRect(x, y, z1, z2, z3, z4) {
    var x1 = Math.min(z1, z3);
    var x2 = Math.max(z1, z3);
    var y1 = Math.min(z2, z4);
    var y2 = Math.max(z2, z4);
    return ((x1 <= x ) && ( x <= x2) && (y1 <= y) && (y <= y2))
}

function layoutMap(w) {

    var grass1 = new Grass(0, -45, 100, 10);
    grass1.addToWorld(w);

    var road1 = new Road(0, -30, 100, 20, 4);
    road1.addToWorld(w);

    var grass2 = new Grass(0, -15, 100, 10);
    grass2.addToWorld(w);

    var river = new River(0, 0, 100, 20);
    river.addToWorld(w);

    var grass3 = new Grass(0, 15, 100, 10);
    grass3.addToWorld(w);

    var road2 = new Road(0, 30, 100, 20, 4);
    road2.addToWorld(w);

    var grass4 = new Grass(0, 45, 100, 10);
    grass4.addToWorld(w);

}

function layoutCars(wo) {

    var offset = -36;
    var w = 4;

    for (var i = 0; i < 4; i++) {
        var speed = isMobile ? random(0.05, 0.3) * 2 : random(0.05, 0.3);
        var car = new Car({
            x: 0, y: w / 3, z: offset,
            width: w, height: w / 5, depth: 2,
            red: random(255), green: random(255), blue: random(255),
            speed: speed * (i % 2 === 0 ? 1 : -1)
        });
        car.addToWorld(wo);
        cars.push(car);
        offset += 4;
    }

    offset = 24;

    for (var i = 0; i < 4; i++) {
        var speed = isMobile ? random(0.05, 0.3) * 2 : random(0.05, 0.3);
        var car = new Car({
            x: 0, y: w / 3, z: offset,
            width: w, height: w / 5, depth: random(1, 2),
            red: random(255), green: random(255), blue: random(255),
            speed: speed * (i % 2 === 0 ? 1 : -1)
        });
        car.addToWorld(wo);
        cars.push(car);
        offset += 4;
    }
}


function layoutLogs(w) {

    var riverOffset = -8;
    for (var row = 0; row < 5; row++) {
        var numLogs = random(3, 4);
        for (var i = 0; i < numLogs; i++) {
            var width = random(6, 8);
            var speed = isMobile ? random(0.05, 0.1) * 2 : random(0.05, 0.1);
            var log = new Log({
                x: random(-43, 43), y: 0, z: riverOffset,
                width: width, height: 1, depth: 4,
                xSpeed: speed * (row % 2 === 0 ? 1 : -1), ySpeed: 0, zSpeed: 0
            });
            log.addToWorld(w);
            logs.push(log);
        }
        riverOffset += 4;
    }

}

function layoutCoins(w) {

    for (var i = 0; i < 4; i++) {
        var coin = new Coin({
            x: random(-43, 43),
            z: random(-43, -15)
        });
        coin.addToWorld(w);
        coins.push(coin);
    }

    for (var i = 0; i < 4; i++) {
        var coin = new Coin({
            x: random(-43, 43),
            z: random(15, 43)
        });
        coin.addToWorld(w);
        coins.push(coin);
    }
}

function layoutFences(w) {
    var fence = new Fence(-50, 0, 100, 10, 'z');
    fence.addToWorld(w);
    fence = new Fence(50, 0, 100, 10, 'z');
    fence.addToWorld(w);
    fence = new Fence(0, 50, 100, 10, 'x');
    fence.addToWorld(w);
    fence = new Fence(0, -50, 100, 10, 'x');
    fence.addToWorld(w);
}

function layoutClouds(world) {

    for (var i = 0; i < 15; i++) {

        var wid = random(2, 7);
        var cloud = new Cloud({
            x: random(-70, 70), y: random(14, 23), z: random(-70, 70), width: wid, height: wid * 0.6
        });
        cloud.addToWorld(world);
    }

}

function refreshScore() {
    $("#score").attr("value", "Score: " + score);
}

// var seconds;
function refreshTimer() {

    var curr = second();
    if (curr !== lastSec) {
        timer--;
        lastSec = curr;
    }

    if (timer === 0) {

        setUpGameOver();

    } //game over

    var totalSeconds = parseInt(timer);

    var minu = parseInt(totalSeconds / 60);
    var sec = parseInt(totalSeconds % 60);
    var displaySec = (sec < 10 ? "0" + sec : sec);

    $("#timer").attr("value", "Time: " + minu + ":" + displaySec);
}

function isBrowserMobile() {

    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;

}

function layoutGame() {

    world.camera.holder.append(scoreHolder[0]); //add score display
    world.camera.holder.append(timerHolder[0]); //add timer display

    timer = 180;
    lastSec = second();

    gameOverTimer = 0;
    score = 0;

    layoutMap(world);
    layoutLogs(world);
    layoutCars(world);
    layoutFences(world);
    layoutCoins(world);
    layoutClouds(world);
}

function changeDirectionIfNeeded(c, bound) {
    if (c.lowerBody.x < 0 - bound + c.lowerBody.width || c.lowerBody.x > bound - c.lowerBody.width) {
        c.speed = -1 * c.speed;
        if (c.speed > 0) {
            while (c.lowerBody.x + c.speed < 0 - bound + c.lowerBody.width) {
                c.speed += 0.01;
            }
        }

        if (c.speed < 0) {
            while (c.lowerBody.x + c.speed > bound - c.lowerBody.width) {
                c.speed -= 0.01;
            }
        }
        c.move();

        if (c.speed >= 0.3) c.speed = 0.3;
        if (c.speed <= -0.3) c.speed = -0.3;
    }
}

function punishNaughtyUserWhoGoesBeyondBound() {

    var userX = world.getUserPosition().x;
    var userY = world.getUserPosition().z;

    deadTimes++;

    if (!isPointInsideRect(userX, userY, -50, -50, 50, 50)) {
        score -= 1;
        setUserToOrigin();
    }
}

function setUpGameOver() {

    $("#score").attr("value", "");
    $("#timer").attr("value", "");

    state = 2;
    gameOverTimer = 3 * 60;

    setUserToOrigin();
    $('#endTitle').attr('value', 'Game Over!');
    $('#endScore').attr('value', 'Score: ' + score);
    $('#endAgain').attr('value', 'Click to play again!');

    gameOverBg = new Plane({
        x: -1, y: 2, z: 38, red: 150, blue: 150, green: 150,
        width: 10, height: 4.5
    });
    world.add(gameOverBg);
}

function setUserToOrigin() {
    world.setUserPosition(startX, startY, startZ);
    world.camera.holder.setAttribute("rotation", "0 1.67 0");
    refreshScore();
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}