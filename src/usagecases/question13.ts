/*
あるゲームの主人公「マイク」は、地下の迷宮の中に居ます。 地下の迷宮は整数型数値の２次元配列で与えられます。

各セルは、次の値で与えられます。

0 : 何もない
1 : ブロック
2 : コイン
マイクは、何ないセル(0の値)の上を「右」または「下」にしか進むことができません。

スタート位置は左上で、ゴールは右下です。 ゴールには必ず辿り着けます。

ブロックを避けながら、最大何枚のコインを集めることができますか？
*/
// 時間計算量:O(2^(w+h-1))
// 空間計算量:O(1)
let maxCoin = -1;

export const checkRightUnder = (coin:number, i: number, j:number, w: number, h:number, matrix: number[][]) => {
    //行き止まり
    if (i >= h) return -1;
    if (j >= w) return -1;
    if (matrix[i][j] === 1) return -1;

    //コイン
    if (matrix[i][j] === 2) coin++;

    //ゴール
    if (i === h - 1 && j === w - 1){
        maxCoin = Math.max(coin, maxCoin);
    }

    checkRightUnder(coin, i + 1, j, w, h, matrix);
    checkRightUnder(coin, i, j + 1, w, h, matrix);
}

export const question13 = (matrix: number[][]): number => {
    maxCoin = -1;
    const i = 0;
    const j = 0;
    const coin = 0;
    checkRightUnder(coin, i, j, matrix[0].length, matrix.length, matrix);
    return maxCoin;


    // const w = matrix[0].length;
    // const h = matrix.length;
    // let maxCoin = 0;
    // //0:↓ 1:→
    // for (let idx = 1; idx < 2 << (w + h - 1); idx++) {
    //     let i = 0;
    //     let j = 0;
    //     let coin = 0;
    //     for (let bit = 1; bit <= idx; bit <<= 1) {
    //         if (matrix[i][j] === 1) break;
    //         if (matrix[i][j] === 2) coin++;
            
    //         if (idx & bit) {
    //             i++;
    //         } else {
    //             j++;
    //         }

    //         if (i >= h) break;
    //         if (j >= w) break;
    //     }
    //     maxCoin = Math.max(maxCoin, coin);
    // }
    // return maxCoin;
};
