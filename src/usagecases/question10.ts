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
// 時間計算量:O(n log n)
// 空間計算量:O(n)
export const checkSum = (idx : number, k : number, n : number): number[] | null => {
    const result : number[] = [];
    let count = 0;
    let num = 1;
    for (let bit = 1; bit <= idx; bit <<= 1) {
        if (idx & bit) {
            count++;
            result.push(num);
        }
        num++;
    }
    const sum = result.reduce((a, b) => a + b, 0);
    return count === k && sum === n ? result : null;
}

export const question10 = (k : number, n : number): number[][] => {
    const hits : number[][] = [];
    for (let idx = 1; idx < (1 << 9); idx++) {
        const hit = checkSum(idx, k, n);
        if (hit) {
            hits.push(hit);
        }
    }
    return hits;
};
