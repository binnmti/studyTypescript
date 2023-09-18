"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.question2 = void 0;
const question2 = (str) => {
    let len = str.length / 2;
    while (len > 1) {
        const repeatStr = str.substring(0, len);
        let str2 = '';
        for (let j = 1; j <= str.length / len; j++) {
            str2 += repeatStr;
        }
        if (str === str2) {
            return true;
        }
        len = len / 2;
    }
    // for (let i = 2; i <= str.length / 2; i++) {
    //     const repeatStr = str.substring(0, i);
    //     let str2 = '';
    //     for (let j = 1; j <= str.length / i; j++) {
    //         str2 += repeatStr;
    //     }
    //     if (str === str2) {
    //         return true;
    //     }
    // }
    return false;
};
exports.question2 = question2;
//# sourceMappingURL=question2.js.map