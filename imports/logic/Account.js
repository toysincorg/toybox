var Account = {}

Account.getId = function () {
	var instance = DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get();
	return instance.userId;
}

Account.getCache = function () {
	var instance = DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get();
	var result = undefined;

	if (!instance.userId) return result;

	var connectionId = instance.connection.id;
	var connectionData = Meteor.default_server.sessions[connectionId];
	var collectionViews = connectionData.collectionViews.users.documents[instance.userId];
	var data = collectionViews && collectionViews.dataByKey || [];

	Object.keys(data).forEach(function (item) {
		if (!result) {
			result = {};
		}

		item = data[item][0].value;
	})

	return result;
}

Account.profile = {}

Account.profile.set = function (key, value, userId) {
	userId = userId || Account.getId();

	var update = Meteor.users.update({
		$set: {
			["profile." + key]: value
		}
	});

	return update;
}

Account.profile.get = function (field, userId) {
	userId = userId || Account.getId();

	var doc = Meteor.users.findOne(userId);
	return doc.profile[field];
}

export { Account }