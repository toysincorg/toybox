import { Account } from "./Account.js"

var Roles = {}

Roles.remove = function (role, userId) {
	userId = userId || Account.getId();

	if (typeof role === "object") {
		role = [role]
	}

	var update = Meteor.users.update(userId, {
		$pullAll: {
			"profile.roles": role
		}
	})
}

Roles.add = function (role, userId) {
	userId = userId || Account.getId();

	if (typeof role === "object") {
		role = [role]
	}
	
	var update = Meteor.users.update(userId, {
		$addToSet: {
			$each: role
		}
	})
}

Roles.check = function (role, userId) {
	userId = userId || Account.getId();

	var userDoc = Meteor.users.findOne(userId);
	var roles = userDoc.profile.roles;
	var innocent = true;

	var check = function (role) {
		if (roles.indexOf(role) > 0) {
			return true
		} 
	}

	if (typeof role === "string") {
		innocent = check(role)
	} else if (typeof role === "object") { 
		role.forEach(function (name) {
			if (!check(name)) {
				innocent = false;
			}
		})
	}

	return innocent || throw new Meteor.Error("unauthorized", "Your roles are not valid for this action.")
}

export { Roles }