"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usagecases_1 = require("./usagecases");
const main = () => {
    console.log('----factorial');
    for (let i = 1; i <= 15; i++) {
        console.log(`    factorial(${i}) = ${(0, usagecases_1.factorial)(i)}`);
    }
    console.log('----FizzBuzz');
    for (let i = 0; i <= 16; i++) {
        console.log(`    FizzBuzz(${i}) = ${(0, usagecases_1.fizzBuzz)(i)}`);
    }
};
main();
//# sourceMappingURL=index.js.map