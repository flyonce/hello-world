/**
 * The rules interpreter, to interpret customs' rules.
 */

var Interpreter = {

		//constructor
	create: function() {
			//the real object.
		var interpreter = {};

		//interpret a rule.
		//compare %current, %input with %rule. If matches, 
		//return the next state name, else false.
		interpreter.do = function(current, input, rule) {
			var jsonRule = rule.element.json;
			var srcState = jsonRule.from;
			var desState = jsonRule.to;
			var condition = jsonRule.when;

			if(current.name !== srcState){
				return;
			}
			if(condition.or)
		};

		return interpreter;
	}
};

