//opt's width will be the width (long part) of the cloud; height will be the height; x, y, z will be the center;
function Cloud(opt) {
    this.x = opt.x;
    this.y = opt.y;
    this.z = opt.z;

    this.width = opt.width;
    this.height = opt.height;

    opt.red = 255;
    opt.blue = 255;
    opt.green = 255;
    opt.side = "double";
    opt.shader = "flat";

    var r = this.width / 5;
    var self = this;
    this.upper = new Circle(
        Object.assign({}, opt, {
            radius: r,
            y: self.y - self.height / 4
        })
    );

    this.lowers = [];

    r = this.width / 6;
    var xpos = opt.x - r * 1.5;
    for (var i = 0; i < 3; i++) {
        this.lowers.push(new Circle(
            Object.assign({}, opt, {
                radius: r,
                y: self.y - self.height / 2.2,
                x: xpos
            })
        ));
        xpos += r * 1.5;
    }

    this.addToWorld = function (w) {
        w.add(this.upper);
        this.lowers.forEach(function (c) {
            w.add(c);
        });
    }

}