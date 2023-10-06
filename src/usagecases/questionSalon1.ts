// # 偶数・奇数ソート

// 自然数の配列 `nums` が渡されます。
// `nums`を偶数が配列の前半に、そのあとに奇数が来るように並び替えてください。
// 偶数の範囲内、または奇数の範囲内で、要素の順番は入れ替わっても良いです。

// ## 条件
// - 1 <= nums.length <= 10^3
// - 1 <= nums[i] <= 10^4

// ```
// 例1:
// nums = [1,1,4,2,3]
//   ↓
// answer = [4,2,1,1,3] ([2,4,1,1,3], [2,4,3,1,1]などでも良い)
// ```

// ```
// 例2:
// nums = [5,6,70,8,9]
//   ↓
// answer = [6,70,8,5,9]
export const questionSalon1 = (numbers: number[]): number[] => {
    let counter = 0;
    for (const index in numbers) {
        if (numbers[index] % 2 === 0) {
            [numbers[counter], numbers[index]] = [numbers[index], numbers[counter]];
            counter++;
        }
    }
    return numbers;
};
