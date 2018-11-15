Package.describe({
  name: "toybox",
  version: '0.1.0'
});

Package.onUse(function(api) {
	api.mainModule("imports/index.js", "server");
	api.use(['mongo', 'ecmascript'], "server");
	api.export(["ToyBox", "Account"]);
});