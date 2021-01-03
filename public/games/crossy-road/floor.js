function Road(x, z, width, depth, lanes) {

    this.x = x;
    this.z = z;
    this.width = width;
    this.depth = depth;
    this.lanes = lanes;

    this.body = new Plane({
        x: 0,
        y: this.x,
        z: this.z,
        width: this.width,
        height: this.depth,
        rotationX: -90,
        asset: "road_tile",
        repeatX: 30,
        repeatY: this.lanes + 1
    });

    this.addToWorld = function (w) {
        w.add(this.body);
    }

}

function Grass(x, z, width, depth) {

    this.x = x;
    this.z = z;
    this.width = width;
    this.depth = depth;

    this.body = new Plane({
        x: 0,
        y: this.x,
        z: this.z,
        width: this.width,
        height: this.depth,
        rotationX: -90,
        red: 50,
        green: 214,
        blue: 21
    });

    this.addToWorld = function (w) {
        w.add(this.body);
    }

}

function River(x, z, width, depth) {
    this.x = x;
    this.z = z;
    this.width = width;
    this.depth = depth;

    this.body = new Plane({
        x: 0,
        y: this.x,
        z: this.z,
        width: this.width,
        height: this.depth,
        rotationX: -90,
        red: 20,
        green: 211,
        blue: 255
    });

    this.addToWorld = function (w) {
        w.add(this.body);
    }

}