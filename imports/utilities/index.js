var Utilities = {}

Utilities.enforceArray = function (input) {
	if (typeof input === "string") {
		return [input]
	} else if (typeof input === "object") {
		return input;
	} else { 
		throw new Meteor.Error("invalid-input", "Expected string or array for input")
	}
}
