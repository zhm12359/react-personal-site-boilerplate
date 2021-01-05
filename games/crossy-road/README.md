# Interactive Computing Final Project: Crossy Road VR
Hanming Zeng and Herbert Li

### Introduction:
Crossy Road is a VR game where the user tries to collects coins
on the map while dodging cars and making sure not to fall in the water.
You only have three minutes to collect as many coins as you can!
Be careful, get hit and you'll respawn at the start of map and lose some of your score!

### How to Play:
The controls are pretty simple. Click to move forward. With a VR headset, look around as
you normally would, in the browser you can use click and hold to pan around the space.

### Implementation Overview:
* Several classes for Cars, Logs, and Coins
    * checkCollision(), move(), display() methods
* Several classes for generating the map, e.g. Fence, Road, River
    * made laying out the map pretty easy and makes it easy to extend the map
* Text display/manipulation done using jQuery

### Challenges:
Some of the challenges we faced were (in no particular order):
* Getting used to Aframe in general
* Drawing text in VR
* Handling log interactions (having the user drift with logs)

### Moving Forward:
We initially wanted to include different game modes in the game.
In the end, we ran out of time, however if we were given more time, we would've added
an arcade/endless mode, where is goal is just to see how far you can go.

This ends the high-level overview of our project, keep reading to see progress logs and 
more details of our implementation

### Classes in Depth
* Car(opt)
    * consists of upperbody (box), lowerbody (box), tires (torus + boxes for spokes), and light (cone)
    * opt's x y z will be the center point of the lowerBody's upper surface's center
    * opt's height and width and depth will be lowerBody's height and width and depth
    * initially, the tires were a bunch of cylinders, but due to performance issues, we toned them down to boxes
    * cars also honk if the user gets too close/if they're about to get hit
* Cloud(opt)
    * opt's width will be the width (long part) of the cloud; height will be the height; x, y, z will be the center
    * randomly generated bunch of circles
* Coin(opt)
    * opt's x and z are the coin's position
* Fence(x, z, width, numPosts, direction)
    * x, z is the center of the fence, direction determines whether fence goes in the x or z direction
    * drawn using boxes
* Floor (Road, River, Grass)
    * Constructors take x, z, width, and depth (x, z are the center point)
    * Road takes an additional parameter: lanes
    * Road is drawn using an external asset image, which is just a one lane road
* Log(opt)
    * opt's x y z will be the center point of the log
    * y should be 0 in most cases, to give the appearance of it being half submerged
    * opt's height, width, and depth will be log's actual height, width, and depth
    * opt should also have xSpeed, ySpeed, and zSpeed

### Implementation Details
* Collisions 
    * Were mainly handled by checking whether the user (a point) was in some object
    * See our point-in-rectangle function
* Log moving
    * Check whether user was on a log (collision detection)
    * If so, nudge the user based on the log's speed
* Timer
    * Frame rates are inconsistent across mobile and web
    * used p5 to keep track of the current second (system time), update the timer based on whether the second has changed
* Text
    * Used <a-text> and jQuery to hide, modify, and remove the text in the scene
* Reseting the User
    * Used setUserPosition(), but also had to use jQuery to reset the user's rotation

### Progress Reports
* December 11
    * Game is pretty much finished, putting on the finishing touches and fixing some bugs right now. 
* December 4
    * As of 11/29, we've finished the map. During class on 12/4, we've also added in all the
    objects and done collisions with cars, coins, and logs (although log collisions are still
    a bit funny). Score tracking and basic game state and flow have also been added.
* November 27
    * As of 11/29, we have come up with an idea and have just started to implement. As of right now,
    we have cars and are currently working on floating logs!
* November 20
    * As of 11/20, we still haven't come up with an idea. We want to do something in VR, but after
    testing some ideas, we've realized that we're limited by performance. We're also looking into
    some ideas in the AR, but as whole, still not quite sure...
