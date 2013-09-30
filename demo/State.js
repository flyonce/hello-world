/**
 * State define
 */

var States = {

	/**
 	 * define a state.
	 */
	createState: function(stateName, stable) {
		var state = {};

		state.name = stateName;
		state.statable = false;
		state.action = null;

		if (statable) {
			state.statable = stable;
		}

		return state;
	},

	/**
 	 * create state set.
	 * usage States.createStateSet([{name: 'state1',statable:true},'state2']).
	 */
	createStateSet: function(states) {
		var stateSet = {};

		stateSet.set = [];

		stateSet.isValid = function(stateName) {
			for (var j = 0; j < this.set.length; ++j) {
				if (this.set[j].name === stateName) {
					return true;
				}
			}
			return false;
		};

		var length = states.length;
		for (var i = 0; i < length; ++i) {
			var state = states[i];
			var tmp;
			if (typeof state === 'object') {
				tmp = this.defineState(states.name, state.statable);
				stateSet.set.push(tmp);
			}
			else if (typeof state === 'string') {
				tmp = this.defineState(state);
				stateSet.set.push(tmp);
			}
		}
		return stateSet;
	}
};

