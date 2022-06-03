//  Modules - Encapsulated Code (only share minimum)
//  CommonJS - Every file is module (by default)
const names = require("./04-names");
const sayHi = require("./05-utils");

const data = require("./06-alternative-flavor");
require("./07-mind-grenade"); //require only, run the code inside the module importer

// console.log(names);
// sayHi(names.john);
// sayHi(names.peter);

// sayHi("susan");
// sayHi(john);
// sayHi(peter);
