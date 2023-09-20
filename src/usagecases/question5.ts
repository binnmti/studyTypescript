export const question5 = (str1: string, str2: string): boolean => {
    let pointer1 = str1.length - 1;
    let pointer2 = str2.length - 1;
    while (pointer1 >= 0 || pointer2 >= 0) {
        pointer1 = movePointer(str1, pointer1);
        pointer2 = movePointer(str2, pointer2);
        if (str1[pointer1] !== str2[pointer2]) {
            return false;
        }
        pointer1--;
        pointer2--;
    }
    return true;
};

const movePointer = (target: string, startAt: number): number => {
    let pointer = startAt;
    let sharpCounter = 0;
    while (pointer >= 0) {
        if (target[pointer] === '#') {
            sharpCounter++;
            pointer--;
            continue;
        }
        if (sharpCounter > 0) {
            sharpCounter--;
            pointer--;
            continue;
        }
        break;
    }
    return pointer;
};
