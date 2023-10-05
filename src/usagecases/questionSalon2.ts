// 2つの数字の足し算
// 逆順に保存された連結リストで表される２つの数字 nodeA と nodeB が与えられます。 ２つの数字を加算した答えを示す逆順の連結リストを返してください。

// 連結リストから取り出した値を全て取り出して数値として取り扱い、足し算をする方法や BigInteger, ライブラリ等の使用は禁止です。 純粋に連結リストの操作だけで実装してください。

export class ListNode {
    constructor(
      public val: number = 0,
      public next: ListNode | null = null,
    ) {}
}


export const questionSalon2 = (nodeA: ListNode | null, nodeB: ListNode | null): ListNode | null => {
    
    const result = new ListNode(0);
    let tail = result;
    let pointA = nodeA;
    let pointB = nodeB;
    let addVal = 0;
    let loop = true;
    while (loop) {
        if (pointA !== null) {
            addVal += pointA.val;
            pointA = pointA.next;
        }
        if (pointB !== null) {
            addVal += pointB.val;
            pointB = pointB.next;
        }
        tail.val = addVal % 10;
        addVal = Math.floor(addVal / 10);
        if (addVal === 0 && pointA === null && pointB === null) {
            loop = false;
        } else {
            tail.next = new ListNode(0);
            tail = tail.next;
        }
    }

    return result;
};
