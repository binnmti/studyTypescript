/*
アルファベット小文字で構成される文字列sが与えられます。 文字列sの中に出現する各アルファベットの出現頻度が重複しないようにしたいです。
重複する出現頻度の文字が存在する場合、何文字か削除します。 何文字削除すれば、全ての文字の出現頻度がユニークになるか調べてください。
削除した結果として、その文字がなくなっても良いです。

アルファベット小文字のみ
1 <= s.length <= 1000
TypeScriptでは ts-heapq の使用が認められています。
例1:
s = "aaabbccc"
  ↓
"a" を1文字削除
  ↓
"aabbccc"
  ↓
"a"を1文字削除
  ↓
"abbccc"

answer = 2文字
*/
import { Heapq } from 'ts-heapq';

export const question6 = (str: string): number => {
    const charCounterMap = new Map<string, number>();
    for (const s of str) {
        let counter = charCounterMap.get(s);
        charCounterMap.set(s, counter === undefined ? 1 : ++counter);
    }
    let deleteCounter = 0;
    const counts = Array.from(charCounterMap.values());
    const heap: Heapq<number> = new Heapq<number>([], (a: number, b: number) => a > b);
    for (const s of counts) {
        heap.push(s);
    }
    while (heap.length() > 1) {
        const top = heap.pop();
        if (top === heap.top() && top > 0) {
            if(top > 1) heap.push(top - 1);
            deleteCounter++;
        }
    }
    //a:3, b:2, c:3
    // for (let [s1, counter1] of charCounterMap) {
    //     let sameCounter = false;
        
    //     while (true) {
    //         for (const [s2, counter2] of charCounterMap) {
    //             if (s1 === s2) {
    //                 continue;
    //             }
    //             if (counter1 === counter2) {
    //                 sameCounter = true;
    //                 counter1--;
    //                 charCounterMap.set(s1, counter1);
    //                 deleteCounter++;
    //                 break;
    //             }
    //         }
    //         if (counter1 === 0 || sameCounter === false) {
    //             break;
    //         } else {
    //             sameCounter = false;
    //         }
    //     }
    // }
    return deleteCounter;
};
