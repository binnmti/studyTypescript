/*
整数kと整数nが渡されます。1〜9までの数字を同じ数字を使わずにk個組み合わせて、合計がnになる全ての組み合わせを作ってください。
 答えの順番は問いませんが、同じ組み合わせを含むことはできません。

条件
2 <= k <= 9
1 <= n <= 100
例1:
k = 3
n = 7
 ↓
ans = [[1,2,4]]

1 + 2 + 4 = 7

例2:
k = 3
n = 9
 ↓
ans = [[1,2,6], [1,3,5], [2,3,4]]

1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9

*/
export const bitPlus = (idx : number, k : number, n : number): number[] | null => {
    const result : number[] = [];
    let plus = 0;
    let i = 1;
    let count = 0;
    for (let bit = 1; bit <= idx; bit <<= 1, i++) {
        if (!(idx & bit))  continue;
        
        result.push(i);
        plus += i; 
        count += 1;
}
    return count === k && plus === n ? result : null;
}

export const question10 = (k : number, n : number): number[][] => {
    const pattern : number[][] = [];
    for (let idx = 1; idx < (1 << 9); idx++) {
        const result = bitPlus(idx, k, n);
        if (result) {
            pattern.push(result);
        }
    }
    return pattern;
};
