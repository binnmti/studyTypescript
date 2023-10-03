import { questionSalon2, ListNode } from '../questionSalon2';
describe('questionSalon2', () => {
    it('test1', () => {
        let head = new ListNode(3);
        let tail = head;
        tail.next = new ListNode(2);
        tail = tail.next;
        tail.next = new ListNode(1);
        tail = tail.next;
        expect(questionSalon2(head, head)).toEqual(head);
    });
});
