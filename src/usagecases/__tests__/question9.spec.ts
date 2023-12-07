import { question9, ListNode  } from '../question9';
describe('question9', () => {
    it('test1', () => {
        let head = new ListNode(1);
        let tail = head;
        tail.next = new ListNode(2);
        tail = tail.next;

        let head1 = new ListNode(3);
        let tail2 = head1;

        let head3 = new ListNode(6);
        let tail3 = head3;
        tail3.next = new ListNode(3);
        tail3 = tail3.next;

        expect(question9(head, head1)).toEqual(head3);


        // let head = new ListNode(1);
        // let tail = head;
        // tail.next = new ListNode(2);
        // tail = tail.next;
        // tail.next = new ListNode(3);
        // tail = tail.next;

        // let head1 = new ListNode(4);
        // let tail2 = head1;
        // tail2.next = new ListNode(5);
        // tail2 = tail2.next;
        // tail2.next = new ListNode(6);
        // tail2 = tail2.next;

        // let head3 = new ListNode(4);
        // let tail3 = head3;
        // tail3.next = new ListNode(3);
        // tail3 = tail3.next;
        // tail3.next = new ListNode(9);
        // tail3 = tail3.next;
        // tail3.next = new ListNode(9);
        // tail3 = tail3.next;
        // tail3.next = new ListNode(0);
        // tail3 = tail3.next;
        // tail3.next = new ListNode(2);
        // tail3 = tail3.next;

        // expect(question9(head, head1)).toEqual(head3);
    });
});
