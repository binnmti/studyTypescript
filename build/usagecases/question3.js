"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.question3 = void 0;
const question3 = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};
exports.question3 = question3;
//# sourceMappingURL=question3.js.map