/*
逆順に保存された連結リストで表される２つの数字 nodeA と nodeB が与えられます。
２つの数字を乗算した答えを示す逆順の連結リストを返してください。

連結リストから取り出した値を全て取り出して数値として取り扱い、乗算する方法や BigInteger, ライブラリ等の使用は禁止です。 
純粋に連結リストの操作だけで実装してください。
*/
//時間計算量:O(n) 
//空間計算量:O(n)
/*
 321
x654
---
  1284
 1605
1926
---
209934

4*1 = 4
4*2+5*1=13
4*3+5*2+6*1=28
5*3+6*2=27
6*3=18

4,3,9,9,0,2


*/
export class ListNode {
    constructor(
      public val: number = 0,
      public next: ListNode | null = null,
    ) {}
}

export const question9 = (nodeA: ListNode | null, nodeB: ListNode | null): ListNode | null => {
    const result = new ListNode(0);
    let tail = result;

    let arrayA = new Array();
    let arrayB = new Array();
    if (nodeA && nodeA.val) {
        arrayA.push(nodeA.val);
    }
    if (nodeB && nodeB.val) {
        arrayB.push(nodeB.val);
    }

    while (nodeA && nodeB) {
        if (nodeA) {
            nodeA = nodeA.next;
        }
        if (nodeB) {
            nodeB = nodeB.next;
        }
        if (nodeA && nodeA.val) {
            arrayA.push(nodeA.val);
        }
        if (nodeB && nodeB.val) {
            arrayB.push(nodeB.val);
        }
    }
    let moveUp = 0;
    for (let i = 0; i < arrayB.length; i++) {
        let sum = 0;
        for (let j = i; j >= 0; j--) {
            tail.next = new ListNode((arrayB[j] * arrayA[arrayA.length - 1 - j]) % 10 + moveUp);
            tail = tail.next!;

            moveUp = (arrayB[j] * arrayA[arrayA.length - 1 - j]) / 10;
        }
    }
    // while (nodeB) {
    //     tail.next = new ListNode(Number(mulStr[mulStr.length - 1 - i]));
    //     tail = tail.next!;

    // }
    return result.next as ListNode;


    // let digit = 1;
    // let mulA = 0;
    // let mulB = 0;
    // while (nodeA || nodeB) {
    //     mulA += nodeA && nodeA.val ? nodeA.val * digit : 0;
    //     mulB += nodeB && nodeB.val ? nodeB.val * digit : 0;

    //     if (nodeA) {
    //         nodeA = nodeA.next;
    //     }
    //     if (nodeB) {
    //         nodeB = nodeB.next;
    //     }

    //     digit *= 10; 
    // }
    // const mul = mulA * mulB;
    // const mulStr = mul.toString();

    // for(let i = 0; i < mulStr.length; i++){
    //     tail.next = new ListNode(Number(mulStr[mulStr.length - 1 - i]));
    //     tail = tail.next!;
    // }
    // return result.next as ListNode;


};
