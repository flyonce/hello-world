/**
 * This is a simple example of FSM.
 */
var FSM = {
	States: {
		blue: 1,
		yellow: 2,
		red: 3
	},

	Inputs: {
		b_time: 15,
		y_time: 3,
		r_time: 15
	},

	current: States.blue,
	init: States.blue,
	delegate: null,

	checkInput: function(input) {
		switch (input) {
		case Inputs.b_time:
			return true;
		case Inputs.y_time:
			return true;
		case Inputs.r_time:
			return true;
		default:
			return false;
		}
	},

	translate: function(input) {
		if (!checkInput) {
			return;
		} else {
			if (current == States.blue && input == Inputs.b_time) {
				current = States.yellow;
				delegate.apply(this, current);
			}
			else if (current == States.yellow && input == Inputs.y_time) {
				current = States.red;
				delegate.apply(this, current);
			}
			else if (current == States.red && input == Inputs.r_time) {
				current = States.blue;
				delegate.apply(this, current);
			}
		}
	},

	putIn: function(time) {
			translate(time);
	}
};

