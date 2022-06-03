// OS module, operate with Operative System
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// methods return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`);

const current = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(current);
