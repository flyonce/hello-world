/**
 * implement List.
 */

var Node = {

	createNode: function(elem, equalFuntion) {
		var node = {};

		node.element = null;
		node.next = null;
		node.isEqual = this.cmpl; 

		if (elem) {
			node.element = elem;
		}
		if (equalFuntion) {
			node.isEqual = equalFuntion;
		}

		return node;
	},

	cmpl: function(another) {
			if(typeof another === 'object'){
					return this.isEqual(another);
			}
			return this.element === another.element;
	}
};

var List = {

	create: function() {
		var list = {};

		list.head = Node.createNode();
		list.cursor = list.head;

		list.pushBack = function(node) {
			if (!this.find(node)) {
				this.cursor.next = node;
				this.cursor = node;
			}
		};

		list.pop = function() {
			if (this.cursor === this.head) {
				return null;
			} else {
				var tmp = this.head.next;
				this.head.next = tmp.next;
				tmp.next = null;

				return tmp;
			}
		};

		list.find = function(key) {
			var temp = this.head;
			while (temp !== null && ! temp.isEqual(key)) {
				temp = temp.next;
			}
			if (temp !== null) {
				return temp;
			} else {
				return false;
			}
		};

		list.remove = function(node) {
			var temp = this.head;
			var before = this.head;
			while (temp !== null) {
				if (temp.isEqual(node)) {
					before.next = temp.next;
					temp.next = null;
					temp = null;
					return this.head;
				}
				before = temp;
				temp = temp.next;
			}
		};

		list.count = function() {
			var count = 0;
			var temp = list.head;
			while (temp.next !== null) {
				count = count + 1;
				temp = temp.next;
			}
			return count;
		};

		list.destroy = function() {
			var temp = this.head;
			while (temp.next !== null) {
				this.remove(temp.next);
			}
		};

		return list;
	}
};

