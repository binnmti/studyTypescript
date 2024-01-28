/*
# 012. Balloon shootings

風船がいくつか空中に浮いています。風船には棒が付いていて、その棒のX座標が `[xStart, xEnd]` で与えられます。

あたなは地上にいます。X軸に沿って、真上に対してのみ、射撃をすることができます。放たれた弾丸はY軸方向に対して、無限大にまっすぐ飛び続けます。ジャンプしたり、斜めに撃ったりすることはできません。

もし途中で風船または風船についている棒に当たれば、風船を割ることができます。風船を割っても弾丸はまっすぐに飛び続けます。

弾丸は何回も打つことができます。すべての風船を割るのに必要な最低の回数を求めるプログラムを書いてください。


### 例1
```
balloons = [[1,2],[3,4],[5,6],[7,8]]

Ans = 4
```

---

### 例2
```
balloons = [[10,16],[2,8],[1,6],[7,12]]

Ans = 2
```
*/
// 時間計算量:O(n)
// 空間計算量:O(n)

export const question12 = (balloons: number[][]): number => {
    if (balloons.length === 1) return 1;

    class Balloon {
        constructor(
            public readonly leftPoint: number,
            public readonly rightPoint: number,
            public isBurst: boolean) {}
    }
    
    const toBalloonLsit = (balloons: number[][]) => 
        balloons.map(b => new Balloon(b[0], b[1], false));

    const isBurst = (left: Balloon, right: Balloon) =>
        (left.leftPoint >= right.leftPoint && left.leftPoint <= right.rightPoint) ||
        (left.rightPoint >= right.leftPoint && left.rightPoint <= right.rightPoint);        

    const isAllBurst = (balloonList: Balloon[]) =>
        balloonList.filter(b => !b.isBurst).length === 0;

    let shootCount = 0;
    const balloonList = toBalloonLsit(balloons);
    for (const ballon of balloonList) {
        if (ballon.isBurst) continue; 

        shootCount++;
        ballon.isBurst = true;
        for (const comboBalloon of balloonList) {
            if (comboBalloon.isBurst) continue;
            if (!isBurst(ballon, comboBalloon)) continue;

            comboBalloon.isBurst = true;
        }
        if (isAllBurst(balloonList)) break;
    }
    return shootCount;

    //O(n)疑惑
    // const start = Math.min(...balloonList.map(h => h.leftPoint));
    // const end = Math.max(...balloonList.map(h => h.rightPoint));
    // while (balloonList.filter(b => b.isBurst === false).length !== 0) {
    //     let maxHit = 0;
    //     let bestShootX = 0;
    //     for (let shootX = start; shootX <= end; shootX++) {
    //         const hitCount = balloonList.filter(b =>b.isBurst === false && b.leftPoint <= shootX && b.rightPoint >= shootX).length;
    //         if (maxHit >= hitCount)  continue;
            
    //         maxHit = hitCount;
    //         bestShootX = shootX;
    //     }
    //     balloonList.filter(b => b.leftPoint <= bestShootX && b.rightPoint >= bestShootX).forEach(h => h.isBurst = true);
    //     shootCount++;
    // }
    // return shootCount;


};
