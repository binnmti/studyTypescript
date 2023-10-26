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
//時間計算量 O(n^2)
//空間計算量 O(1)
export const sort = (schedules: number[][]): number[][] => {
    for (let i = 0; i < schedules.length; i++) {
        for (let j = schedules.length - 1; j > i; j--) {
            if (schedules[j][0] < schedules[j - 1][0]) {
                [schedules[j],schedules[j - 1]] = [schedules[j - 1],schedules[j]];
            }
        }
    }
    return schedules;
}

export const question1Day1 = (schedules: number[][]): boolean => {
    schedules = sort(schedules);
    for (let i = 0; i < schedules.length; i++) {
        for (let j = i + 1; j < schedules.length; j++) {
            if (schedules[i][1] > schedules[j][0]) {
                return false;
            }
        }
    }
    return true;
};
