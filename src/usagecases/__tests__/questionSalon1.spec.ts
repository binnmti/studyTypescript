import { questionSalon1 } from '../questionSalon1';
describe('questionSalon1', () => {
    it('test1', () => {
        expect(questionSalon1([1, 1, 4, 2, 3])).toEqual([4,2,1,1,3]);
    });
    it('test2', () => {
        expect(questionSalon1([5,6,70,8,9])).toEqual([6,70,8,5,9]);
    });
});
