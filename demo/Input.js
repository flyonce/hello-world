/**
 * Define inputs.
 */

var Inputs = {

	createInput: function(type, validValueSet, equalFunction) {
		var input = {};
		input.valueSet = [];
		input.equal = function(another) {
			if (this.valueSet[0] == another) {
				return true;
			} else {
				return false;
			}
		};

		input.isValid = function(val) {
			if (this.valueSet.length === 0) {
				return true;
			} else {
				var length = this.input.length;
				for (var i = 0; i < length; ++i) {
					if (this.valueSet[i] === val) {
						return true;
					}
				}
				return false;
			}
		};

		input.type = type;
		if (validValueSet) {
			input.valueSet = validValueSet;
		}
		if (equalFunction) {
			input.equal = equalFunction;
		}

		return input;
	},

	createInputSet: function(inputs) {
		var inputSet = {};

		inputSet.set = [];

		inputSet.contains = function(input) {
			for (var j = 0; j < this.set.length; ++j) {
				if (this.set[j].name === input.name) {
					return set[j].isValid(input.valueSet[0]);
				}
			}
			return false;
		};

		var lenth = inputs.length;
		for (var i = 0; i < length; ++i) {
			var input = inputs[i];
			var tmp;
			if (typeof input === 'object') {
				if (!input.equal) {
					tmp = this.createInput(input.type, input.valueSet);
				} else {
					tmp = this.createInput(input.type, input.valueSet, input.equal);
				}
				inputSet.set.push(tmp);
			}
			else if (typeof input === 'string') {
				tmp = this.createInput(input);
				inputSet.set.push(tmp);
			}
		}

		return inputSet;
	}
};

