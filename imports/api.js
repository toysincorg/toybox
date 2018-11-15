import { Account } from "./logic/Account.js";
import { Procedures } from "./logic/Procedures.js";
import { Rules } from "./logic/Rules.js";
import { Roles } from "./logic/Roles.js";

var ToyBox = {};
ToyBox.rules = Rules;
ToyBox.register = Procedures.register;

Account.roles = Roles;

export { ToyBox, Account }