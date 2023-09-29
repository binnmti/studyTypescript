//2^3 は 2 * 2 * 2 です。 xとnが与えられます。x^n を求めてください。
export const question4 = (x: number, n: number): number => {
    if (n === 0) {
        return 1;
    }

    return Number(exponentiation(x, n).toFixed(8));
};

function exponentiation(x: number, n: number): number {
    const [intMultiplier, intDivisor, floatMultiplier, floatDivisor] = disassembly(x)
    const absN = Math.abs(n);
    const isFloat = x % 1 !== 0;

    let result = x;
    for (let i = 1; i < absN; i++) {
        if (isFloat) {
            result *= (1 / (2 << floatMultiplier) + floatDivisor) * 100;
        } else {
            result *= (2 << (intMultiplier - 1)) + intDivisor;
        }
    }
    result *= (n < 0 && x < 0) ? -1 : 1;
    return n > 0 ? result : 1 / result;
}

export const disassembly = (x: number): [number, number, number, number] => {
    const absX = Math.abs(x);
    const intX = Math.floor(absX);
    const decimalX = absX / 100;

    let square = 1;
    let squareCounter = 0; 
    while (square < intX) {
        square <<= 1;
        squareCounter++;
    }

    let half = 1;
    let halfCounter = 0;         
    while (1 / half > halfCounter) {
        half <<= 1; 
        halfCounter++;
    }

    const intMultiplier = squareCounter - 1;
    const intDivisor = intX - (2 << (intMultiplier - 1));
    const floatMultiplier = halfCounter - 1;
    const floatDivisor = decimalX - (1 / (2 << floatMultiplier));
    return [intMultiplier, intDivisor, floatMultiplier, floatDivisor];
}

