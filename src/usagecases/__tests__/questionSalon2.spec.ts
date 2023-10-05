import { questionSalon2, ListNode } from '../questionSalon2';
describe('questionSalon2', () => {
    it('test1', () => {
        let head = new ListNode(3);
        let tail = head;
        tail.next = new ListNode(2);
        tail = tail.next;
        tail.next = new ListNode(1);
        tail = tail.next;

        let head2 = new ListNode(6);
        let tail2 = head2;
        tail2.next = new ListNode(4);
        tail2 = tail2.next;
        tail2.next = new ListNode(2);
        tail2 = tail2.next;
        expect(questionSalon2(head, head)).toEqual(head2);
    });
});
