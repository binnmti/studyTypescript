/*
あるゲームの主人公「マイク」は、地下に居ます。 地下は整数型数値の２次元配列で与えられます。 ２次元配列は、高さ = 2, 幅 = N (N は 4以上) です。

各セルは、次の値で与えられます。

0 : 何もない
1 : ゴースト
2 : コイン
スタート位置は[0, 1] で、ゴールは[N - 1, 1]です。 ゴールには必ず辿り着けます。 マイクはジャンプをすることができ、1回ジャンプすると2マス進みます。

ゴーストに当たることはできません。 枠の外にはみ出したり、ゴールを超えるジャンプはできません。

Screenshot 2024-02-12 at 1.41.29 AM.png

例えば、下図の場合、矢印のように進むことで、ゴーストを避けながらゴールに辿り着くができます。

matrix = [
  [0, 2, 0, 2, 0, 2, 1, 0],
  [0, 0, 2, 0, 1, 2, 0, 0]
]

マイクが、スタート位置からゴールにたどり着くまでに集めることができる最大のコインの枚数を返してください。
*/
// 時間計算量:O(n)
// 空間計算量:O(1)
enum CellItem {
    Nothing = 0,
    Ghost = 1,
    Coin = 2
}

export const isJump = (x: number, matrix: number[][]): boolean => {
    // 1個先上が幽霊 or 最後から1個前はジャンプしない
    if (matrix[0][x + 1] === CellItem.Ghost || x === matrix[0].length - 2) {
        return false;
    } 
    // 1個先下が幽霊ならジャンプ
    if (matrix[1][x + 1] === CellItem.Ghost) {
        return true;
    }
    // 1個先が両方コインの時
    if (matrix[0][x + 1] === CellItem.Coin && matrix[1][x + 1] === CellItem.Coin) {
        // 2個先上にコインがあるならジャンプしない、それ以外はジャンプ
        return matrix[0][x + 2] !== CellItem.Coin;
    }
    // 2個先上が幽霊じゃなくて、1個先下がコインならジャンプ、それ以外はジャンプしない
    return matrix[0][x + 1] === CellItem.Coin && matrix[1][x + 2] !== CellItem.Ghost;
}

export const question14 = (matrix: number[][]): number => {
    let coin = 0;
    let x = 0;
    while (x < matrix[0].length) {
        if (matrix[1][x] === CellItem.Coin) {
            coin++;
        } 
        if (!isJump(x++, matrix)) {
            continue;
        } 
        if (matrix[0][x] === CellItem.Coin) {
            coin++;
        } 
        x++;
    }
    return coin;
};
