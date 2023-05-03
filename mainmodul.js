const mod = require(`./modul.js`);
const User = require(`./myclass.js`)

console.log(`mitt namn är ${mod.exportNamn} `);

console.log(mod.greetings());

console.log(mod.addition(7, 8));

const user1 = new User("Berra", "123", "gillar kebab");

console.log(user1.getuser());

console.log(mod);
console.log(User);