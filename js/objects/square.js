/**
A platform character object
 */

function Square() {

	GameObject.call(this);
	

	//================================
	// Private functions and variables
	//================================

	var hotspot = {x: 16, y: 16};
	var standSprite = SpriteFactory.createSprite("img/pink-stand.svg", 1, hotspot);
	var walkSprite = SpriteFactory.createSprite("img/pink-walk.svg", 2, hotspot);

	standSprite.imageSpeed = 0;
	walkSprite.imageSpeed = 0.1;


	//==============
	// Add behaviors
	//==============

	this.addBehavior(Behavior.Renderable);
	this.addBehavior(Behavior.Physical);
	this.addBehavior(Behavior.Solid);
	this.addBehavior(Behavior.Moving);
	this.addBehavior(Behavior.Platform);
	this.addBehavior(Behavior.FaceDirection);


	//=================
	// Public interface
	//=================

	this.currentSprite = standSprite;
	this.boundingBox = {
		left: -16, right: 16,
		top: -16, bottom: 16
	};


}

Square.prototype = new GameObject();


