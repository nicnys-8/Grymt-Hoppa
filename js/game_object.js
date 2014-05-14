/**
An object within the game
*/
var GameObject = function(ctx) {

    //===========
    // Properties
    //===========
    this.x = 0;
    this.y = 0;

    this.boundingBox = {
        left: -8, right: 8,
        top: -8, bottom: 8
    };

    this.behaviors = [];
    this.startTicks = [];
    this.endTicks = []; 
    
    //=================
    // Public functions
    //=================

    /**
    Check if this object overlaps another
    */
    this.overlapsObject = function(obj) {
        return (!(this.x + this.boundingBox.left > obj.x + obj.boundingBox.right ||
            this.x + this.boundingBox.right < obj.x + obj.boundingBox.left ||
            this.y + this.boundingBox.top > obj.y + obj.boundingBox.bottom ||
            this.y + this.boundingBox.bottom < obj.y + obj.boundingBox.top));
    };

    /**
     Actions to perform at each tick
     */
     this.tickStart = function(gameState) {
        for (var i = 0; i < this.startTicks.length; i++) {
            this.startTicks[i].call(this, gameState);
        }
    };

    /**
     Actions to perform at each tick
     */
     this.tickEnd = function(gameState) {
        for (var i = 0; i < this.endTicks.length; i++) {
            this.endTicks[i].call(this, gameState);
        }
    };
    
    /**
     Adds a behavior to the sprite object
     */
     this.addBehavior = function(behavior) {
        // Add the name of the behavior
        this.behaviors.push(behavior.name);
        // Add all behavior properties
        for (var p in behavior.properties) {
            this[p] = behavior.properties[p];
        }
        // Modify the target's tick functions
        this.startTicks.push(behavior.tickStart);
        this.endTicks.push(behavior.tickEnd);
    };
};