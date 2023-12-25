/*
ダムを作りたいと思います。できるだけ水を溜めることができる大きなダムです。 
ダムの間にある他の山は工事で取り払ってしまいます。。
 山の標高リストが与えられるとき、最大貯水量を求めてください。。 山の頂点は１つで、途中に起伏などはありません。

例1:
heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 ↓
ans = 49

*/
// 時間計算量:O(n)
// 空間計算量:O(1)
export const question11 = (heights: number[]): number => {
    let maxArea = 0;
    let indexLeft = 0;
    let indexRight = heights.length - 1;
    while (indexRight > indexLeft)
    {
        const w = indexRight - indexLeft;
        const h = Math.min(heights[indexRight], heights[indexLeft]);
        maxArea = Math.max(maxArea, w * h);
        if (heights[indexRight] < heights[indexLeft]) {
            indexRight--;
        } else {
            indexLeft++;
        }
    }
    return maxArea;
};
