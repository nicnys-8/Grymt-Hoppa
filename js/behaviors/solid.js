/**
Describes the behavior of a solid object
 */
function Solid() {
    //================================
    // Private functions and variables
    //================================

    /*
    function move(deltaX, deltY) {
        this.x += this.hSpeed;
        this.y += this.vSpeed;
    }
    */

    //====================
    // Behavior properties
    //====================
    this.name = "Solid";

    this.properties = {};
    
    //=======================
    // Behavior tick function
    //=======================
    this.tick = function(gameState) {};
}
