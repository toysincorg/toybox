var Rules = {
	internal: {},
	add: function (data) {
		var keys = Object.keys(data);

		keys.forEach(function (key) {
			Rules.internal[key] = data[key];
		});
	},
	debug: function () {
		console.log(Rules.internal)
	},
	check: function (rules) {
		var innocence = true;
		var instance = DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get();
		var userId = instance.userId;

		rules.forEach(function (rule) {
			judgement = Rules.internal[rule](userId);

			if (!judgement) {
				innocence = false;
			}
		});

		return innocence || throw new Meteor.Error("unauthorized", "The rules for this action have not been met.")
	}
}

export { Rules }