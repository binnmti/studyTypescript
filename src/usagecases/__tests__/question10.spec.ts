import { question10 } from '../question10';
describe('question10', () => {
    it('test1', () => {
        expect(question10(3,7)).toEqual([[1,2,4]]);
    });
    it('test2', () => {
        expect(question10(3,9)).toEqual([[2,3,4], [1,3,5], [1,2,6]]);
    });
});
