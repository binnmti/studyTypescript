export const question4 = (x: number, n: number): number => {
    const str = exponentiation(x, n);
    //8桁切り上げ
    let result = '';
    let digitCounter = 0;
    let decimalFlag = false;
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (decimalFlag) {
            digitCounter++;
            if (digitCounter >= 8) {
                //次があれば四捨五入
                if (i !== str.length - 1 && Number(str[i + 1]) >= 5) {
                    let num = Number(result);
                    num += 0.00000001;
                    return Number(num);
                } else {
                    return Number(result);
                }
            }
        }
        if (str[i] === '.') {
            decimalFlag = true;
        }
    }
    return Number(result);
};

function exponentiation(x: number, n: number): string {
    let result = x;
    if (n === 0) {
        result = 1;
    } else if (n > 0) {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    } else {
        result = 1 / x;
        for (let i = 1; i < n * -1; i++) {
            result *= 1 / x;
        }
    }
    return result.toString();
}
