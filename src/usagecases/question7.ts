/*
自然数の配列 nums と 自然数 x が渡されます。 1回の操作で、nums の右端または左端から1つだけ数字を取り出す。途中から取り出すことは出来ません。 取り出した数字を nums に入れ直すことは出来ません。

なるべく少ない操作回数で取り出した数字の合計が、与えられた数字 x に等しくなるようにしたいです。 何回でできるか、操作回数を求めてください。出来ない場合は -1 を返してください。

条件
1 <= nums.length <= 2000
1 <= nums[i] <= 10000
1 <= x <= 10^7
*/
//時間計算量:O(n^2) 
//空間計算量:O(n)

export const question7 = (nums: number[], x: number): number => {
    let sum = 0;
    let hit = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === x) {
            hit = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
        if (sum === x) {
            hit = i;
            break;
        }
    }
    return isCheck ? operationNumber : -1;
};
