/**
 * Define translation rules.
 * A rule was defined as an object like
 * {
 * 	   name: 'rule1',
 * 	   describe: ['state1', 'state2', 
 * 	   				{
 * 	   				'and':[
 * 	   						{
 * 	   					   	 type: 'buttonPress',
 * 	   					   	 valueSet: ['search']
 * 	   					   	}
 * 	   					  ],
 * 	   				'or': [
 * 	   				   	   { 
 * 	   				   	     type: 'input',
 * 	   				   	     valueSet: [1,2]
 * 	   				   	   }
 * 	   				   	  ],
 * 	   				'not':[
 * 	   				       {
 * 	   				         type: 'value',
 * 	   				         valueSet: [1]
 * 	   				       }
 * 	   				      ]
 * 	   				}	   				
 * 	   			 ]
 * }.
 * If describe as a array with neither 'and' or 'or' and 'not' tag,
 * it will be regard as 'or' defaultly.
 */

var Rules = {
	createRuleSet: function() {
		var ruleSet = {};

		ruleSet.rules = List.create();
		ruleSet.add = function(name, dscrb) {
			var rule = Node.createNode({
				name,
				dscrb
			},function(another) {
				if (typeof another === 'object') {
					return this.name === another.name;
				} else {
					return this.name === another;
				}
			});

			this.rules.pushBack(rule);
		};

		ruleSet.remove = function(name) {
			this.rules.remove(name);
		};

		return ruleSet;
	}
};

