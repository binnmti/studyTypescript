//2^3 は 2 * 2 * 2 です。 xとnが与えられます。x^n を求めてください。
export const question4 = (x: number, n: number): number => {
    if (x === 0) return 0;
    if (n === 0) return 1;

    let result;
    if (n > 0) {
        result = hierarchicalMultiplication(x, n);
    } else {
        result = 1 / hierarchicalMultiplication(x, -n);
    }
    return Number(result.toFixed(8));
};

export const hierarchicalMultiplication = (x: number, n: number): number => {
    const half = Math.floor(n / 2);
    if (half < 1) {
        return x;
    } 

    const result = hierarchicalMultiplication(x, half);
    let mul = result * result;
    if (n % 2 !== 0) {
        mul *= x;
    }
    return mul;
}
