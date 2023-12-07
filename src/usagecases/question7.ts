/*
自然数の配列 nums と 自然数 x が渡されます。 1回の操作で、nums の右端または左端から1つだけ数字を取り出す。途中から取り出すことは出来ません。 取り出した数字を nums に入れ直すことは出来ません。

なるべく少ない操作回数で取り出した数字の合計が、与えられた数字 x に等しくなるようにしたいです。 何回でできるか、操作回数を求めてください。出来ない場合は -1 を返してください。

条件
1 <= nums.length <= 2000
1 <= nums[i] <= 10000
1 <= x <= 10^7
*/
//時間計算量:O(n) 
//空間計算量:O(1)

export const question7 = (nums: number[], x: number): number => {
    let operationNumber = Number.MAX_VALUE;
    let leftSum = 0;
    let leftIdx = -1;
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        if (leftSum >= x) {
            leftIdx = i;
            break;
        }
    }
    let rightSum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        rightSum += nums[i];
        while (leftSum + rightSum >= x) {
            if (leftIdx !== -1) {
                leftSum -= nums[leftIdx];
            }
            if (leftSum + rightSum === x) {
                let index = nums.length - i;
                if (leftIdx !== -1) {
                    index += leftIdx;
                }
                if (operationNumber > index) {
                    operationNumber = index;
                }
            }
            leftIdx--;
        }
    }
    if (operationNumber === Number.MAX_VALUE) {
        return -1;
    } else {
        return operationNumber;
    }
}
