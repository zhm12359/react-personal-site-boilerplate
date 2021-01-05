// opt's x y z will be the center point of the log
// (should be 0 in most cases, to give the appearance of it being half submerged)
// opt's height, width, and depth will be log's actual height, width, and depth
// opt should also have xSpeed, ySpeed, and zSpeed
function Log(opts) {

    this.xSpeed = opts.xSpeed;
    this.ySpeed = opts.ySpeed;
    this.zSpeed = opts.zSpeed;
    this.x = opts.x;
    this.y = opts.y;
    this.z = opts.z;
    this.height = opts.height;
    this.width = opts.width;
    this.depth = opts.depth;

    this.body = new Box({
        x: this.x,
        y: this.y,
        z: this.z,
        height: this.height,
        width: this.width,
        depth: this.depth,
        red: 102,
        green: 53,
        blue: 2
    });

    this.addToWorld = function (w) {
        w.add(this.body);
    };

    this.setXYZ = function (x, y, z) {
        this.body.setXYZ(x, y, z);
    };

    this.checkCollision = function () {
        var userX = world.getUserPosition().x;
        var userY = world.getUserPosition().z;

        var z1 = this.body.x - this.width / 2;
        var z2 = this.body.z - this.depth / 2;

        var z3 = this.body.x + this.width / 2;
        var z4 = this.body.z + this.depth / 2;

        return isPointInsideRect(userX, userY, z1, z2, z3, z4);
    };

    this.move = function () {
        this.body.nudge(this.xSpeed, this.ySpeed, this.zSpeed);
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.z += this.zSpeed;

        if (this.checkCollision()) {
            world.camera.nudgePosition(this.xSpeed, this.ySpeed, this.zSpeed);
        }
    };

}
