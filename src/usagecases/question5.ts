export const question5 = (str1: string, str2: string): boolean => {
    let point1 = str1.length - 1;
    let point2 = str2.length - 1;
    let sharp1Counter = 0;
    let sharp2Counter = 0;
    while (point1 >= 0 || point2 >= 0) {
        if (str1[point1] === '#') {
            sharp1Counter++;
            point1--;
            continue;
        }
        if (sharp1Counter > 0) {
            sharp1Counter--;
            point1--;
            continue;
        }
        if (str2[point2] === '#') {
            sharp2Counter++;
            point2--;
            continue;
        }
        if (sharp2Counter > 0) {
            sharp2Counter--;
            point2--;
            continue;
        }
        if (str1[point1] !== str2[point2]) {
            return false;
        }
        if (point1 >= 0) {
            point1--;
        }
        if (point2 >= 0) {
            point2--;
        }
    }
    return true;
};
