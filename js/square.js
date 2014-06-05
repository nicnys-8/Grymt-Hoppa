/**
 */
function createSquare() {
    var square = new GameObject();
    
    //================================
    // Private functions and variables
    //================================
    var hotspot = {x: 16, y: 16};
    var standAnimation = createAnimation("img/pink-stand.svg", 1, hotspot);
    var walkAnimation = createAnimation("img/pink-walk.svg", 2, hotspot);

    standAnimation.imageSpeed = 0;
    walkAnimation.imageSpeed = 0.1;

    //==============
    // Add behaviors
    //==============
    square.addBehavior(new Renderable());
    square.addBehavior(new FaceDirection());
    square.addBehavior(new Physical());
    square.addBehavior(new Moving());
    square.addBehavior(new Platform());
    square.addBehavior(new Solid());
    square.currentAnimation = walkAnimation;
    square.boundingBox = {
        left: -16, right: 16,
        top: -16, bottom: 16
    };

    //===============
    // Tick functions
    //===============
    square.tick = function(gameState) {
        var threshold = 0.1; //@TODO: Gör det här på nå annat sätt
        if (Math.abs(this.hSpeed) > threshold) {
            this.currentAnimation = walkAnimation;
        } else {
            this.currentAnimation = standAnimation;
        };

        for (var i = 0; i < this.ticks.length; i++) {
            this.ticks[i].call(this, gameState);
        }
    };

    return square;   
}
