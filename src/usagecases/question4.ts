//2^3 は 2 * 2 * 2 です。 xとnが与えられます。x^n を求めてください。
export const question4 = (x: number, n: number): number => {
    if (x === 0) return 0;
    if (n === 0) return 1;

    const map = new Map<number, number>();
    map.set(1, x);
    map.set(2, x * x);
    
    let result;
    if (n > 0) {
        result = hierarchicalMultiplication(map, x, n);
    } else {
        result = 1 / hierarchicalMultiplication(map, x, -n);
    }
    return Number(result.toFixed(8));
};

export const hierarchicalMultiplication = (map:Map<number, number>, x: number, n: number): number => {
    if (map.has(n)) {
        return map.get(n)!;
    }
    
    const half = Math.floor(n / 2);
    const result = hierarchicalMultiplication(map, x, half);
    let exponentiation = result * result;
    if (n % 2 != 0) {
        exponentiation *= x;
    }
    map.set(n, exponentiation);
    return exponentiation;
}
