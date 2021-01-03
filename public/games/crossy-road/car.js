//opt's x y z will be the center point of the lowerBody's upper surface's center
//opt's height and width and depth will be lowerBody's height and width and depth
function Car(opt) {

    this.x = opt.x;
    this.y = opt.y;
    this.z = opt.z;
    this.width = opt.width;
    this.depth = opt.depth;

    this.tires = [];
    this.upperBody = new Box(Object.assign({}, opt, {
        y: opt.y + opt.height / 2,
        width: opt.width / 2,
        depth: opt.depth / 2
    }));
    this.lowerBody = new Box(Object.assign({}, opt, {
        y: opt.y - opt.height / 2
    }));

    this.light = new Cone(Object.assign({}, opt, {
        y: opt.y + opt.height + opt.height / 4,
        height: opt.height / 2,
        radiusBottom: opt.depth / 4,
        radiusTop: opt.depth / 8,
        red: random(255),
        green: random(255),
        blue: random(255)
    }));

    this.speed = opt.speed;

    var r = opt.radius ? opt.radius : opt.y - opt.height;

    this.tires.push(new Tire({
        x: opt.x - opt.width / 4,
        y: opt.y - opt.height,
        z: opt.z - opt.depth / 2,
        radius: r / 20 * 19,
        radiusTubular: r / 20,
        red: 0,
        green: 0,
        blue: 0
    }));

    this.tires.push(new Tire({
        x: opt.x - opt.width / 4,
        y: opt.y - opt.height,
        z: opt.z + opt.depth / 2,
        radius: r / 20 * 19,
        radiusTubular: r / 20,
        red: 0,
        green: 0,
        blue: 0
    }));

    this.tires.push(new Tire({
        x: opt.x + opt.width / 4,
        y: opt.y - opt.height,
        z: opt.z + opt.depth / 2,
        radius: r / 20 * 19,
        radiusTubular: r / 20,
        red: 0,
        green: 0,
        blue: 0
    }));

    this.tires.push(new Tire({
        x: opt.x + opt.width / 4,
        y: opt.y - opt.height,
        z: opt.z - opt.depth / 2,
        radius: r / 20 * 19,
        radiusTubular: r / 20,
        red: 0,
        green: 0,
        blue: 0
    }));

    this.addToWorld = function (w) {
        this.tires.forEach(function (t) {
            t.addToWorld(w);
        });

        w.add(this.upperBody);
        w.add(this.lowerBody);
        w.add(this.light);
    };

    var self = this;
    this.move = function () {
        this.tires.forEach(function (t) {
            t.nudge(self.speed, 0, 0);
            t.spin(-self.speed * 50);
        });
        this.upperBody.nudge(self.speed, 0, 0);
        this.lowerBody.nudge(self.speed, 0, 0);
        this.light.nudge(self.speed, 0, 0);

        this.x += self.speed;
    };

    this.setXYZ = function (x, y, z) {
        this.upperBody.setXYZ(x, y, z);
        this.lowerBody.setXYZ(x, y, z);
        this.light.setXYZ(x, y, z);
        this.tires.forEach(function (t) {
            t.setXYZ(x, y, z);
        })
    };

    this.checkCollision = function () {
        var userX = world.getUserPosition().x;
        var userY = world.getUserPosition().z;

        var z1 = this.lowerBody.x - this.width / 2;
        var z2 = this.lowerBody.z - this.depth / 2;

        var z3 = this.lowerBody.x + this.width / 2;
        var z4 = this.lowerBody.z + this.depth / 2;


        if (isPointInsideRect(userX, userY, z1, z2, z3, z4))return true;
        else return false;
    }

}


function Tire(opt) {

    this.innerBars = [];
    this.outerFrame = new Torus(opt);
    this.x = opt.x;
    this.y = opt.y;
    this.z = opt.z;

    for (var i = 0; i < 8; i++) {
        var cl = new Box({
            x: opt.x, y: opt.y, z: opt.z,
            height: opt.radius * 2,
            width: opt.radiusTubular,
            depth: opt.radiusTubular,
            red: 200, green: 200, blue: 200,
            rotationZ: 360 / 8 * i
        });
        this.innerBars.push(cl);
    }

    this.addToWorld = function (w) {
        this.innerBars.forEach(function (x) {
            w.add(x);
        });
        w.add(this.outerFrame);
    };

    this.spin = function (s) {
        this.innerBars.forEach(function (x) {
            x.spinZ(s);
        });
    };


    this.nudge = function (xs, ys, zs) {
        this.innerBars.forEach(function (b) {
            b.nudge(xs, ys, zs);
        });

        this.outerFrame.nudge(xs, ys, zs);
        this.x += xs;
        this.y += ys;
        this.z += zs;
    };

}
