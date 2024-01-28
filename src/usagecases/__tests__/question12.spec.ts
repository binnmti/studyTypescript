import { question12 } from '../question12';
describe('question12', () => {
    it('test1', () => {
        expect(question12([[1,2],[3,4],[5,6],[7,8]])).toBe(4);
    });
    it('test2', () => {
        expect(question12([[10,16],[2,8],[1,6],[7,12]])).toBe(2);
    });
    it('test3', () => {
        expect(question12([[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(2);
    });
    it('test4', () => {
        expect(question12([[3, 4], [1, 5], [4, 8], [2, 6]])).toBe(1);
    });
    it('test6', () => {
        expect(question12([[1, 4], [1, 8], [5, 6], [7, 9]])).toBe(3);
    });
    it('test7', () => {
        expect(question12([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]])).toBe(2);
    });
});



