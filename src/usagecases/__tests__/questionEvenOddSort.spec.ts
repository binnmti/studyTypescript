import { questionEvenOddSort } from '../questionEvenOddSort';
describe('questionEvenOddSort', () => {
    it('test1', () => {
        expect(questionEvenOddSort([3,2,1])).toEqual([2,3,1]);
    });
    it('test2', () => {
        expect(questionEvenOddSort([5,6,70,8,9])).toEqual([6,70,8,5,9]);
    });
});
