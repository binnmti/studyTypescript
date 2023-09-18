export const question1 = (str: string): boolean => {
    // const stack: string[] = []
    // const rightHandSide:{[key:string]:string} = {
    //     "]": "[",
    //     "}": "{",
    //     ")": "(",
    // }
    // for (const char of [...s]) {
    //     if (
    //       (stack.length > 0) &&
    //       (stack.at(-1) === rightHandSide[char])) {
    //         stack.pop()
    //     } else {
    //         stack.push(char);
    //     }
    // }

    // return stack.length === 0;

    const bracketsPairs = [
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ];
    const stack: string[] = [];
    for (const s of str) {
        for (const bracketsPair of bracketsPairs) {
            if (s === bracketsPair[0]) {
                stack.push(s);
            } else if (s === bracketsPair[1]) {
                if (stack.length === 0) {
                    return false;
                }
                if (stack.at(-1) === bracketsPair[0]) {
                    stack.pop();
                }
            }
        }
    }
    return stack.length === 0;

    // const bracketsPairs = [
    //     ['(', ')'],
    //     ['{', '}'],
    //     ['[', ']'],
    // ];
    // const bracketsLevels = new Map<number, string>();
    // let level = 0;
    // for (const s of str) {
    //     for (const bracketsPair of bracketsPairs) {
    //         if (s === bracketsPair[0]) {
    //             level++;
    //             bracketsLevels.set(level * 1, s);
    //         } else if (s === bracketsPair[1]) {
    //             bracketsLevels.set(level * -1, s);
    //             level--;
    //         }
    //     }
    //     if (level < 0) return false;
    // }
    // for (const bracketsLevel of bracketsLevels) {
    //     for (const bracketsPair of bracketsPairs) {
    //         const level = bracketsLevels.get(bracketsLevel[0] * -1);
    //         if (
    //             bracketsPair[0] === bracketsLevel[1] &&
    //             bracketsPair[1] !== level
    //         ) {
    //             return false;
    //         }
    //     }
    // }
    return true;
};
