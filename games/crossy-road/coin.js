function Coin(opts) {

    this.x = opts.x;
    this.z = opts.z;
    this.size = 1;

    this.body = new Box({
        x: this.x,
        y: .8,
        z: this.z,
        height: 1,
        width: 1,
        depth: .1,
        asset: "coin",
        repeatX: 1,
        repeatY: 1
    });

    this.marker = new Octahedron({
        x: this.x,
        y: 8,
        z: this.z,
        scaleY: 1.5,
        red: 0,
        blue: 0,
        green: 255,
        opacity: .5
    });

    this.addToWorld = function (w) {
        w.add(this.body);
        w.add(this.marker);
    };

    this.checkCollision = function () {
        var userX = world.getUserPosition().x;
        var userY = world.getUserPosition().z;

        var z1 = this.body.x - this.size / 2;
        var z2 = this.body.z - this.size / 2;

        var z3 = this.body.x + this.size / 2;
        var z4 = this.body.z + this.size / 2;

        return isPointInsideRect(userX, userY, z1, z2, z3, z4);
    };

}