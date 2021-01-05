function Fence(x, z, width, numPosts, direction) {
    this.x = x;
    this.z = z;
    this.width = width;
    this.numPosts = numPosts;
    this.direction = direction;

    this.posts = [];
    this.crosses = [];

    if (this.direction === 'x') {
        this.crosses.push(new Box({
            x: this.x,
            y: 1 / 3,
            z: this.z,
            width: width,
            height: .1,
            depth: .1,
            red: 0,
            green: 0,
            blue: 0
        }));

        this.crosses.push(new Box({
            x: this.x,
            y: 2 / 3,
            z: this.z,
            width: width,
            height: .1,
            depth: .1,
            red: 0,
            green: 0,
            blue: 0
        }));

        var curX = this.x - this.width / 2;
        for (var i = 0; i < numPosts; i++) {
            this.crosses.push(new Box({
                x: curX,
                y: .5,
                z: this.z,
                width: .1,
                height: 1,
                depth: .1,
                red: 0,
                green: 0,
                blue: 0
            }));
            curX += this.width / (this.numPosts - 1);
        }
    }
    if (this.direction === 'z') {
        this.crosses.push(new Box({
            x: this.x,
            y: 1 / 3,
            z: this.z,
            width: .1,
            height: .1,
            depth: width,
            red: 0,
            green: 0,
            blue: 0
        }));

        this.crosses.push(new Box({
            x: this.x,
            y: 2 / 3,
            z: this.z,
            width: .1,
            height: .1,
            depth: width,
            red: 0,
            green: 0,
            blue: 0
        }));

        var curZ = this.z - this.width / 2;
        for (var i = 0; i < numPosts; i++) {
            this.crosses.push(new Box({
                x: this.x,
                y: .5,
                z: curZ,
                width: .1,
                height: 1,
                depth: .1,
                red: 0,
                green: 0,
                blue: 0
            }));
            curZ += this.width / (this.numPosts - 1);
        }
    }


    this.addToWorld = function (w) {
        this.posts.forEach(function (p) {
            w.add(p);
        });

        this.crosses.forEach(function (c) {
            w.add(c);
        });
    }

}

