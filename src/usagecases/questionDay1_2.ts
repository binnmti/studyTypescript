/*
schedules = [ [start1, end1], [start2, end2], .... [startN, endN] ] の形で本日のミーティングスケジュールが渡されます。

このスケジュールからミーティングルームが何部屋必要かを求めてください。
条件
schedules.length < 1000
schedules[i].length = 2
schedules[i][0] < schedules[i][1]
*/
//時間計算量 O(n^2)
//空間計算量 O(1)
export const bubbleSort = (schedules: number[][], start: number, end: number): number[][] => {
    for (let i = start; i <= end; i++) {
        for (let j = end; j > start; j--) {
            if (schedules[j][0] < schedules[j - 1][0]) {
                [schedules[j],schedules[j - 1]] = [schedules[j - 1],schedules[j]];
            }
        }
    }
    return schedules;
}

export const hierarchyCheck = (schedules: number[][], idx:number, maxRoom: number, top: number): number => {
    for (let i = 0; i < schedules.length - 1; i++) {
        if (schedules[idx][0] < schedules[i][0] && schedules[idx][1] > schedules[i][1]
             && schedules[i][0] < schedules[top][1]) {
            maxRoom++;
            maxRoom = hierarchyCheck(schedules, i + 1, maxRoom, i);
            break;
        }
    }
    return maxRoom;
} 

export const questionDay1_2 = (schedules: number[][]): number => {
    // schedules = bubbleSort(schedules, 0, schedules.length - 1);
    return hierarchyCheck(schedules, 0, 1, 0);
};



// export const hierarchyCheck = (schedules: number[][], idx:number, maxRoom: number, top: number): number => {
//     for (let i = idx; i < schedules.length - 1; i++) {
//         if (schedules[i + 1][0] > schedules[top][1]) {
//             return maxRoom;
//         }
//         if (schedules[i][0] < schedules[i + 1][0] && schedules[i][1] > schedules[i + 1][1]) {
//             maxRoom++;
//             maxRoom = hierarchyCheck(schedules, i + 1, maxRoom, idx);
//             break;
//         }
//     }
//     return maxRoom;
// } 

// export const questionDay1_2 = (schedules: number[][]): number => {
//     schedules = bubbleSort(schedules, 0, schedules.length - 1);
//     return hierarchyCheck(schedules, 0, 1, 0);
// };

