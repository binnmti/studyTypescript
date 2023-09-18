export const question3 = (n: number): number => {
    n = n - 1;
    const sum3 = sumOfArithmeticProgression(n, 3);
    const sum5 = sumOfArithmeticProgression(n, 5);
    const sum15 = sumOfArithmeticProgression(n, 15);
    return sum3 + sum5 - sum15;
};

function sumOfArithmeticProgression(n: number, d: number): number
{
    return (1 / 2) * Math.trunc(n / d) * (2 * d + ((Math.trunc(n / d) - 1)) * d);
}