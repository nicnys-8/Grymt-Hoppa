/**
Behavior describing a platform character
 */
Behavior.Platform = Behavior.Platform || function() {

	//================================
	// Private functions and variables
	//================================
	
	function jump() {
		this.vSpeed = -5;
	}

	//=================
	// Public interface
	//=================

	var behavior = {};

	behavior.name = "Platform";

	behavior.getProperties = function() {
		return {
			// Variables

			// Functions
			jump: jump
		};
	};
		
	return behavior;
}();