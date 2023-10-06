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
    let addVal = 0;
    while (addVal > 0 || nodeA || nodeB) {
        if (nodeA) {
            addVal += nodeA.val;
            nodeA = nodeA.next;
        }
        if (nodeB) {
            addVal += nodeB.val;
            nodeB = nodeB.next;
        }
        tail.next = new ListNode(addVal % 10);
        tail = tail.next;
        addVal = Math.floor(addVal / 10);
    }
    return result.next ? result.next as ListNode : null;
};
