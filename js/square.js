/**
 */
function createSquare() {
    var square = new GameObject();
    
    //================================
    // Private functions and variables
    //================================
    var hotspot = {x: 16, y: 16};

    //==============
    // Add behaviors
    //==============
    square.addBehavior(new Renderable());
    square.addBehavior(new FaceDirection());
    square.addBehavior(new Physical());
    square.addBehavior(new Moving());
    square.addBehavior(new Platform());
    square.addBehavior(new Solid());
    square.currentAnimation = createAnimation("img/pink.svg", 1, hotspot);
    square.currentAnimation.imageSpeed = 0;
    square.boundingBox = {
        left: -16, right: 16,
        top: -16, bottom: 16
    };

    //===============
    // Tick functions
    //===============
    square.tickEnd = function(gameState) {
        for (var i = 0; i < this.ticks.length; i++) {
            this.ticks[i].call(this, gameState);
        }
    };

    return square;   
}
