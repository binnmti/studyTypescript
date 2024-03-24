/*
あなたは3種類の仕事を掛け持ちしています（jobs[0]からjobs[2]）。今日からN日間、1日1仕事に取り組みます。最初を0日目とし、最終日をN-1日目とします。

i日目に仕事jobs[x] (xは0から2)に取り組むと、jobs[i][j]円が貰えます。ただし次の日も同じ仕事を選ぶことはできません。

初日はどの仕事を選んでも良いです。

N日間仕事をしたら、最大いくら貰えるでしょうか。

条件
1 <= n <= 1000
*/
// 時間計算量:O(n)
// 空間計算量:O(1)

// [5, 5, 10], [1, 7, 9], [9, 2, 7], [9, 1, 1]

// export const getSalary = (i: number, preIndex:number, sumSalary:number, maxSalary:number, jobs: number[][]):number => {
//     const length = jobs[0].length;
//     for (let j = 0; j < length; j++) {
//         if (preIndex === j) continue;
//         let salary = sumSalary + jobs[i][j];
//         if (maxSalary < salary) {
//             maxSalary = salary;
//         }
//         if (i === jobs.length - 1) continue;

//         maxSalary = getSalary(i + 1, j, salary, maxSalary, jobs);
//     }
//     return maxSalary;
// }

// export const question15 = (jobs: number[][]): number => {
//     const length = jobs[0].length;
//     let maxSalary = 0;
//     for (let i = 0; i < jobs.length; i++) {
//         let preIndex = -1;
//         let sumSalary = 0;
//         maxSalary = Math.max(getSalary(i, preIndex, sumSalary, maxSalary, jobs));
//     }
//     return maxSalary;
// };

export const getIndex = (i: number, preIndex:number, sumSalary:number, sumIndex:number, jobs: number[][]):number => {
    const length = jobs[0].length;

    // //今までの合計値よりも次が大きければさらに降りる
    // let nextMax = 0;
    // for (let k = 0; k < length; k++) {
    //     nextMax = Math.max(nextMax, jobs[i + 1][j]);
    // }
    // if (sumSalary < nextMax) {
    // }

    for (let j = 0; j < length; j++) {
        if (preIndex === j) continue;
        let salary = sumSalary + jobs[i][j];
        if (sumSalary < salary) {
            sumSalary = salary;
            sumIndex = j;
        }
        if (i === jobs.length - 1) continue;

        sumIndex = getIndex(i + 1, j, sumSalary, sumIndex, jobs);
    }
    return sumIndex;
}

export const question15 = (jobs: number[][]): number => {
    // 1行で書けそう
    let maxSalary = 0;
    let preIndex = -1;
    for (let i = 0; i < jobs.length; i++) {
        let sumSalary = 0;
        let sumIndex = 0;
        const index = getIndex(i, preIndex, sumSalary, sumIndex, jobs);
        preIndex = index;
        maxSalary += jobs[i][index]; 
    }
    return maxSalary;
};
