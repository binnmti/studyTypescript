import { question9, ListNode  } from '../question9';
describe('question9', () => {
    it('test1', () => {
        let head = new ListNode(2);
        let tail = head;
        tail.next = new ListNode(1);
        tail = tail.next;

        let head1 = new ListNode(3);

        let head2 = new ListNode(6);
        let tail2 = head2;
        tail2.next = new ListNode(3);
        tail2 = tail2.next;
        expect(question9(head, head1)).toEqual(head2);
    });
});
