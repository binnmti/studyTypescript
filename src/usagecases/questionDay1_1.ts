/*
schedules = [ [start1, end1], [start2, end2], .... [startN, endN] ] の形で本日のミーティングスケジュールが渡されます。

あなたは全ての予定に最初から最後まで参加したいです。 同時に複数の予定に出ることはできません。

与えられるschedulesの全てに参加することが可能かどうか判定してください。

ビルトイン関数、またはライブラリのsort機能の使用は禁止です。

条件
schedules.length < 1000
schedules[i].length = 2
schedules[i][0] < schedules[i][1]
*/
//バブルソート:時間計算量 O(n^2), 空間計算量 O(1)
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

//選択ソート:時間計算量 O(n^2), 空間計算量 O(1)
export const selectionSort = (schedules: number[][], start: number, end: number): number[][] => {
    for (let i = start; i <= end; i++) {
        let min = i;
        for (let j = i + 1; j <= end; j++) {
            if (schedules[min][0] > schedules[j][0]) {
                min = j;
            }
        }
        [schedules[i],schedules[min]] = [schedules[min],schedules[i]];
    }
    return schedules;
}

//挿入ソート:時間計算量 O(n^2), 空間計算量 O(1)
export const insertionSort = (schedules: number[][], start: number, end: number): number[][] => {
    for (let i = start + 1; i <= end; i++) {
        let hit = i;
        for (let j = start; j < i; j++) {
            if (schedules[hit][0] < schedules[j][0]) {
                hit = j;
                break;
            }
        }
        //これはswap,したいのはinsert
        // for (let j = hit; j < i; j++) {
        //     [schedules[j],schedules[j + 1]] = [schedules[j + 1],schedules[j]];
        // }
    }
    return schedules;
}

//マージソート:時間計算量 O(n long n), 空間計算量 O(1)
export const mergeSort = (schedules: number[][], start: number, end: number): number[][] => {
    const middle = Math.floor((end - start) / 2);
    if (middle >= 2) {
        mergeSort(schedules, start, start + middle);
        mergeSort(schedules, end - middle, end);
    }
    bubbleSort(schedules, start, middle);
    bubbleSort(schedules, middle, end);
    return schedules;
}

//クイックソート:時間計算量 O(n^2), 空間計算量 O(1)
export const quickSort = (schedules: number[][], start: number, end: number): number[][] => {
}

export const questionDay1_1 = (schedules: number[][]): boolean => {
    // o schedules = bubbleSort(schedules, 0, schedules.length - 1);
    // o schedules = selectionSort(schedules, 0, schedules.length - 1);
    // o schedules = mergeSort(schedules, 0, schedules.length - 1);
    // x schedules = insertionSort(schedules, 0, schedules.length - 1);

    schedules = quickSort(schedules, 0, schedules.length - 1);
    for (let i = 0; i < schedules.length - 1; i++) {
        if (schedules[i][1] > schedules[i + 1][0]) {
            return false;
        }
    }
    return true;
};
